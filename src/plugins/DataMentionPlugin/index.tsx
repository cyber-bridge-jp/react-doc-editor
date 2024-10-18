import {useLexicalComposerContext} from '@lexical/react/LexicalComposerContext';
import {
    LexicalTypeaheadMenuPlugin,
    MenuOption,
    MenuTextMatch,
    useBasicTypeaheadTriggerMatch,
} from '@lexical/react/LexicalTypeaheadMenuPlugin';

import './index.css';

import {
    COMMAND_PRIORITY_LOW, SELECTION_CHANGE_COMMAND,
    TextNode
} from 'lexical';
import {useCallback, useEffect, useMemo, useState} from 'react';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

import {
    $createDataMentionNode,
    DataMentionType
} from "../../nodes/DataMentionNode.tsx";

const PUNCTUATION =
    '\\.,\\+\\*\\?\\$\\@\\|#{}\\(\\)\\^\\-\\[\\]\\\\/!%\'"~=<>_:;';
const NAME = '\\b[A-Z][^\\s' + PUNCTUATION + ']';

const DocumentMentionsRegex = {
    NAME,
    PUNCTUATION,
};

const PUNC = DocumentMentionsRegex.PUNCTUATION;

const TRIGGERS = ['=\\$a', '=\\$i', '=\\$f'].join('|');

const AUTO_TRIGGER = '=$a';
const INPUT_TRIGGER = '=$i';
const AFTER_AUTO_TRIGGER = '=$f';

// Chars we expect to see in a mention (non-space, non-punctuation).
const VALID_CHARS = '^(' + TRIGGERS + ')\\s|' + '[^' + PUNC + '\\s]';

// Non-standard series of chars. Each series must be preceded and followed by
// a valid char.
const VALID_JOINS =
    '(?:' +
    '\\.[ |$]|' + // E.g. "r. " in "Mr. Smith"
    ' |' + // E.g. " " in "Josh Duck"
    '[' +
    PUNC +
    ']|' + // E.g. "-' in "Salier-Hellendag"
    ')';

const LENGTH_LIMIT = 75;

const AtSignMentionsRegex = new RegExp(
    '(^|\\s|\\()(' +
    '(' +
    TRIGGERS +
    ')' +
    '((?:' +
    VALID_CHARS +
    VALID_JOINS +
    '){0,' +
    LENGTH_LIMIT +
    '})' +
    ')$',
);

// 50 is the longest alias length limit.
const ALIAS_LENGTH_LIMIT = 50;

// Regex used to match alias.
const AtSignMentionsRegexAliasRegex = new RegExp(
    '(^|\\s|\\()(' +
    '(' +
    TRIGGERS +
    ')' +
    '((?:' +
    VALID_CHARS +
    '){0,' +
    ALIAS_LENGTH_LIMIT +
    '})' +
    ')$',
);

const inputData: DataMentionObject[] = [
    {
        inputField: {
            label: '入力フィールドを追加',
            value: null,
        }
    }
]

const mentionsCache = new Map();

const lookUpService = {
    search(string: string, data: DataMentionObject[], callback: (results: Array<DataMentionObject>) => void): void {
        setTimeout(() => {
            const results = data.filter((mention) =>
                Object.keys(mention).filter((key) => mention[key].label.toLowerCase().includes(string.toLowerCase())).length > 0,
            );
            callback(results);
        }, 300);
    },
};

function useMentionLookupService(mentionString: string | null, data: DataMentionObject[], trigger = ''): Array<DataMentionObject> {
    const [results, setResults] = useState<Array<DataMentionObject>>([]);

    useEffect(() => {
        const cachedResults = mentionsCache.get(trigger + mentionString);

        if (mentionString == null) {
            setResults([]);
            return;
        }

        if (cachedResults === null) {
            return;
        } else if (cachedResults !== undefined) {
            setResults(cachedResults);
            return;
        }

        mentionsCache.set(trigger + mentionString, null);
        lookUpService.search(mentionString, data, (newResults) => {
            mentionsCache.set(trigger + mentionString, newResults);
            setResults(newResults);
        });
    }, [mentionString, data, trigger]);

    return results;
}

function checkForAtSignMentions(
    text: string,
    minMatchLength: number,
): MenuTextMatch | null {
    let match = AtSignMentionsRegex.exec(text);
    if (match === null) {
        match = AtSignMentionsRegexAliasRegex.exec(text);
    }
    if (match !== null) {
        // The strategy ignores leading whitespace but we need to know it's
        // length to add it to the leadOffset
        const maybeLeadingWhitespace = match[1];

        const matchingString = match[4];
        if (matchingString.length >= minMatchLength) {
            return {
                leadOffset: match.index + maybeLeadingWhitespace.length,
                matchingString,
                replaceableString: match[3],
            };
        }
    }
    return null;
}

function getPossibleQueryMatch(text: string): MenuTextMatch | null {
    return checkForAtSignMentions(text, 0);
}

class MentionTypeaheadOption extends MenuOption {
    dataMention: DataMentionType;
    fieldName: string;
    label: string;
    data: string | number | null;

    constructor(dataMention: DataMentionType, fieldName: string, label: string, data: string | number | null) {
        super(dataMention + label);
        this.dataMention = dataMention;
        this.fieldName = fieldName;
        this.label = label;
        this.data = data;
    }
}

function MentionsTypeaheadMenuItem({
                                       index,
                                       isSelected,
                                       onClick,
                                       onMouseEnter,
                                       option,
                                   }: {
    index: number;
    isSelected: boolean;
    onClick: () => void;
    onMouseEnter: () => void;
    option: MentionTypeaheadOption;
}) {
    let className = 'item';
    if (isSelected) {
        className += ' selected';
    }

    return (
        <li
            key={option.key}
            tabIndex={-1}
            className={className}
            ref={option.setRefElement}
            role="option"
            aria-selected={isSelected}
            id={'typeahead-item-' + index}
            onMouseEnter={onMouseEnter}
            onClick={onClick}>
            <span className="text">{option.label}</span>
        </li>
    );
}

export type DataMentionData = {
    label: string;
    value: string | number | null;
}

export type DataMentionObject = { [key: string]: DataMentionData }

export default function DataMentionPlugin(
    {
        step,
        autoData,
        afterAutoData,
    }: {
        step: 1 | 2 | 3;
        autoData: DataMentionObject[];
        afterAutoData: DataMentionObject[];
    }
): React.JSX.Element | null {
    const [editor] = useLexicalComposerContext();

    const [queryString, setQueryString] = useState<string | null>(null);
    const [trigger, setTrigger] = useState<string>();
    const [inputVal, setInputVal] = useState<string>();
    const [showInput, setShowInput] = useState<boolean>(false);
    const [selectedItem, setSelectedItem] = useState<{
        nodeToReplace: TextNode | null;
        selectedOption: MentionTypeaheadOption;
    } | null>(null);

    const data = trigger === AUTO_TRIGGER ? autoData : trigger === AFTER_AUTO_TRIGGER ? afterAutoData : inputData;
    const results = useMentionLookupService(queryString, data, trigger);

    const checkForSlashTriggerMatch = useBasicTypeaheadTriggerMatch('/', {
        minLength: 0,
    });

    const options = useMemo(
        () =>
            results
                .map(
                    (result) => {
                        const key = Object.keys(result)[0];
                        return new MentionTypeaheadOption(trigger === AUTO_TRIGGER ? 'auto' : 'after-auto', key, result[key].label, result[key].value);
                    },
                ),
        [results],
    );

    const onSelectOption = useCallback(
        (
            selectedOption: MentionTypeaheadOption,
            nodeToReplace: TextNode | null,
            closeMenu: () => void,
        ) => {
            if (selectedOption.fieldName === 'inputField') {
                setShowInput(true);
                setSelectedItem({nodeToReplace, selectedOption});
                closeMenu();
                return;
            }
            editor.update(() => {
                const mentionNode = $createDataMentionNode(
                    {
                        dataMention: trigger === AUTO_TRIGGER ? 'auto' : trigger == INPUT_TRIGGER ? 'input' : 'after-auto',
                        fieldName: selectedOption.fieldName,
                        label: selectedOption.label,
                        data: selectedOption.data,
                    },
                );
                if (nodeToReplace) {
                    nodeToReplace.replace(mentionNode);
                }
                closeMenu();
            });
        },
        [editor, trigger],
    );

    const checkForMentionMatch = useCallback(
        (text: string) => {
            const slashMatch = checkForSlashTriggerMatch(text, editor);
            if (slashMatch !== null) {
                return null;
            }
            const match = getPossibleQueryMatch(text);
            if (match !== null) {
                setTrigger(match.replaceableString);
            }
            return match
        },
        [checkForSlashTriggerMatch, editor],
    );

    useEffect(() => {
        if (step === 2) {
            editor.registerCommand(SELECTION_CHANGE_COMMAND,
                // eslint-disable-next-line @typescript-eslint/no-unused-vars
                (_, e) => {
                    if (e.getRootElement()?.className === 'DataMention__contentEditable' && !editor.isEditable()) {
                        editor.setEditable(true);
                        e.focus();
                    } else if (e.getRootElement()?.className !== 'DataMention__contentEditable' && editor.isEditable()) {
                        editor.setEditable(false);
                    }
                    return true;
                },
                COMMAND_PRIORITY_LOW);
        }
    }, [step, editor]);


    return (
        <>
            <LexicalTypeaheadMenuPlugin<MentionTypeaheadOption>
                onQueryChange={setQueryString}
                onSelectOption={onSelectOption}
                triggerFn={checkForMentionMatch}
                options={options}
                menuRenderFn={(
                    anchorElementRef,
                    {selectedIndex, selectOptionAndCleanUp, setHighlightedIndex},
                ) =>
                    anchorElementRef.current && results.length
                        ? ReactDOM.createPortal(
                            <div className="typeahead-popover mentions-menu">
                                <ul>
                                    {options.map((option, i: number) => (
                                        <MentionsTypeaheadMenuItem
                                            index={i}
                                            isSelected={selectedIndex === i}
                                            onClick={() => {
                                                setHighlightedIndex(i);
                                                selectOptionAndCleanUp(option);
                                            }}
                                            onMouseEnter={() => {
                                                setHighlightedIndex(i);
                                            }}
                                            key={option.key}
                                            option={option}
                                        />
                                    ))}
                                </ul>
                            </div>,
                            anchorElementRef.current,
                        )
                        : null
                }
            />
            {
                showInput && selectedItem && ReactDOM.createPortal(
                    <div className='data-mention-input-modal'>
                        <input placeholder='Enter label of input field' value={inputVal || ''} type='text'
                               onChange={(e) => {
                                   setInputVal(e.target.value)
                               }}/>
                        <button onClick={() => {
                            editor.update(() => {
                                const mentionNode = $createDataMentionNode(
                                    {
                                        dataMention: 'input',
                                        fieldName: selectedItem.selectedOption.fieldName,
                                        label: inputVal || 'Empty',
                                        data: null,
                                    },
                                );
                                if (selectedItem.nodeToReplace) {
                                    selectedItem.nodeToReplace.replace(mentionNode);
                                }
                                setShowInput(false);
                                setSelectedItem(null);
                            });
                        }}>Save
                        </button>
                    </div>
                    , document.body
                )
            }
        </>
    );
}