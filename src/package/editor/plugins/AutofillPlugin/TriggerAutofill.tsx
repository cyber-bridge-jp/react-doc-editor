import {useLexicalComposerContext} from '@lexical/react/LexicalComposerContext'
import {
  LexicalTypeaheadMenuPlugin,
  MenuOption,
  MenuTextMatch,
  useBasicTypeaheadTriggerMatch,
} from '@lexical/react/LexicalTypeaheadMenuPlugin'

import {
  TextNode,
} from 'lexical'
import {useCallback, useEffect, useMemo, useState} from 'react'
import * as React from 'react'
import * as ReactDOM from 'react-dom'

import {AutofillNode, AutofillStage, AutofillType} from "../../nodes/AutofillNode.ts";
import {INSERT_AUTOFILL} from "./AutofillPlugin.tsx";
import {$createAutofillTokenNode, $isAutofillTokenNode} from "../../nodes/AutofillTokenNode.ts";
import './TriggerAutofill.css';

const PUNCTUATION =
  '\\.,\\+\\*\\?\\$\\@\\|#{}\\(\\)\\^\\-\\[\\]\\\\/!%\'"~=<>_:;'
const NAME = '\\b[A-Z][^\\s' + PUNCTUATION + ']'

const DocumentMentionsRegex = {
  NAME,
  PUNCTUATION,
}

const PUNC = DocumentMentionsRegex.PUNCTUATION

const TRIGGERS = ['=\\$a', '=\\$i', '=\\$f'].join('|')

const AUTO_TRIGGER = '=$a'
const INPUT_TRIGGER = '=$i'
const AFTER_AUTO_TRIGGER = '=$f'

// Chars we expect to see in a mention (non-space, non-punctuation).
const VALID_CHARS = '^(' + TRIGGERS + ')\\s|' + '[^' + PUNC + '\\s]'

// Non-standard series of chars. Each series must be preceded and followed by
// a valid char.
const VALID_JOINS =
  '(?:' +
  '\\.[ |$]|' + // E.g. "r. " in "Mr. Smith"
  ' |' + // E.g. " " in "Josh Duck"
  '[' +
  PUNC +
  ']|' + // E.g. "-' in "Salier-Hellendag"
  ')'

const LENGTH_LIMIT = 75

const AtSignMentionsRegex = new RegExp(
  '(' + // Whole match (group 1)
  '(' + TRIGGERS + ')' + // Trigger (group 2)
  '((?:' + VALID_CHARS + VALID_JOINS + '){0,' + LENGTH_LIMIT + '})' + // Valid mention (group 3)
  ')',
)

// 50 is the longest alias length limit.
const ALIAS_LENGTH_LIMIT = 50

// Regex used to match alias.
const AtSignMentionsRegexAliasRegex = new RegExp(
  '(' + // Whole match (group 1)
  '(' + TRIGGERS + ')' + // Trigger (group 2)
  '((?:' + VALID_CHARS + '){0,' + ALIAS_LENGTH_LIMIT + '})' + // Valid mention (group 3)
  ')',
)

const inputData: AutofillDataObject[] = [
  {
    inputField: {
      label: '入力フィールドを追加',
      value: null,
    },
  },
]

const mentionsCache = new Map()

const lookUpService = {
  search(string: string, data: AutofillDataObject[], callback: (results: Array<AutofillDataObject>) => void): void {
    setTimeout(() => {
      const results = data.filter((mention) =>
        Object.keys(mention).filter((key) => mention[key].label.toLowerCase().includes(string.toLowerCase())).length > 0,
      )
      callback(results)
    }, 300)
  },
}

function useMentionLookupService(mentionString: string | null, data: AutofillDataObject[], trigger = ''): Array<AutofillDataObject> {
  const [results, setResults] = useState<Array<AutofillDataObject>>([])
  useEffect(() => {
    const cachedResults = mentionsCache.get(trigger + mentionString)

    if (mentionString == null) {
      setResults([])
      return
    }

    if (cachedResults === null) {
      return
    } else if (cachedResults !== undefined) {
      setResults(cachedResults)
      return
    }

    mentionsCache.set(trigger + mentionString, null)
    lookUpService.search(mentionString, data, (newResults) => {
      mentionsCache.set(trigger + mentionString, newResults)
      setResults(newResults)
    })
  }, [mentionString, data, trigger])

  return results
}

function checkForAtSignMentions(
  text: string,
  minMatchLength: number,
): MenuTextMatch | null {
  let match = AtSignMentionsRegex.exec(text)
  if (match === null) {
    match = AtSignMentionsRegexAliasRegex.exec(text)
  }
  if (match !== null) {
    const matchingString = match[3] // Extracts the part after the trigger
    if (matchingString.length >= minMatchLength) {
      return {
        leadOffset: match.index,
        matchingString, // Use the extracted part for searching
        replaceableString: match[0], // The entire matched string including trigger
      }
    }
  }
  return null
}

function getPossibleQueryMatch(text: string): MenuTextMatch | null {
  return checkForAtSignMentions(text, 0)
}

class MentionTypeaheadOption extends MenuOption {
  autofillType: AutofillType
  fieldName: string
  label: string
  data: string | number | null
  isMan: boolean
  isNumber: boolean

  constructor(autofillType: AutofillType, fieldName: string, label: string, data: string | number | null, isMan = false, isNumber = false) {
    super(autofillType + label)
    this.autofillType = autofillType
    this.fieldName = fieldName
    this.label = label
    this.data = data
    this.isMan = isMan
    this.isNumber = isNumber
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
  let className = 'item'
  if (isSelected) {
    className += ' selected'
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
  )
}

export type AutofillData = {
  label: string;
  value: string | number | null;
  isMan?: boolean;
  isNumber?: boolean;
}

export type AutofillDataObject = { [key: string]: AutofillData }

type InputAttributes = {
  label: string;
  title?: string;
  isFile?: boolean;
}

export default function TriggerAutofill(
  {
    preData,
    postData,
    stage
  }: {
    stage: AutofillStage;
    preData: AutofillDataObject[];
    postData: AutofillDataObject[];
  },
): React.JSX.Element | null {
  const [editor] = useLexicalComposerContext()

  const [queryString, setQueryString] = useState<string | null>(null)
  const [trigger, setTrigger] = useState<string>()
  const [inputVal, setInputVal] = useState<InputAttributes>({label: ''})
  const [showInput, setShowInput] = useState<boolean>(false)
  const [autofillNode, setAutofillNode] = useState<AutofillNode | null>(null)

  const data = trigger === AUTO_TRIGGER ? preData : trigger === AFTER_AUTO_TRIGGER ? postData : inputData
  const results = useMentionLookupService(queryString, data, trigger)

  const checkForSlashTriggerMatch = useBasicTypeaheadTriggerMatch('/', {
    minLength: 0,
  })

  const options = useMemo(
    () =>
      results
        .map(
          (result) => {
            const key = Object.keys(result)[0]
            return new MentionTypeaheadOption(trigger === AUTO_TRIGGER ? 'pre' : 'post', key, result[key].label, result[key].value, result[key].isMan, result[key].isNumber)
          },
        ),
    [results],
  )

  const insertAutoFill = useCallback(
    ({
       label,
       autofillType,
       nodeToReplace,
       data,
       fieldName,
       callback
     }: {
      label: string,
      autofillType: AutofillType,
      nodeToReplace?: TextNode | null,
      data?: string | number,
      fieldName?: string,
      callback?: (node: AutofillNode) => void
    }) => {
      editor.dispatchCommand(INSERT_AUTOFILL, {
        label,
        autofillType,
        nodeToReplace,
        data,
        fieldName,
        callback
      })
    },
    [editor],
  )

  const onSelectOption = useCallback(
    (
      selectedOption: MentionTypeaheadOption,
      nodeToReplace: TextNode | null,
      closeMenu: () => void,
    ) => {
      editor.update(() => {
        if (!nodeToReplace) {
          return
        }
        let data = selectedOption.data
        if (selectedOption.isMan && typeof data === 'number' && data) {
          data = 10000 * data
        }
        if (selectedOption.isNumber && data) {
          data = data.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
        }
        if (trigger !== INPUT_TRIGGER) {
          insertAutoFill({
            label: selectedOption.label,
            autofillType: trigger === AUTO_TRIGGER ? 'pre' : 'post',
            nodeToReplace,
            data: data || undefined,
            fieldName: selectedOption.fieldName
          })
          closeMenu()
        } else {
          insertAutoFill({
            label: selectedOption.label,
            autofillType: 'input',
            nodeToReplace,
            callback: (n) => {
              setAutofillNode(n)
            }
          })
          setShowInput(true)
          closeMenu()
        }
        closeMenu()
      })
    },
    [editor, trigger],
  )

  const checkForAutofillMatch = useCallback(
    (text: string) => {
      const slashMatch = checkForSlashTriggerMatch(text, editor)
      if (slashMatch !== null) {
        return null
      }
      const match = getPossibleQueryMatch(text)
      if (match !== null) {
        setTrigger(match.replaceableString.replace(match.matchingString, ''))
      }
      return match
    },
    [checkForSlashTriggerMatch, editor],
  )

  if (stage !== 1) {
    return null
  }

  return (
    <>
      <LexicalTypeaheadMenuPlugin<MentionTypeaheadOption>
        onQueryChange={setQueryString}
        onSelectOption={onSelectOption}
        triggerFn={checkForAutofillMatch}
        options={options}
        menuRenderFn={(
          anchorElementRef,
          {selectedIndex, selectOptionAndCleanUp, setHighlightedIndex},
        ) =>
          anchorElementRef.current && results.length
            ? ReactDOM.createPortal(
              <div className="doc-editor-typeahead-popover mentions-menu">
                <ul>
                  {options.map((option, i: number) => (
                    <MentionsTypeaheadMenuItem
                      index={i}
                      isSelected={selectedIndex === i}
                      onClick={() => {
                        setHighlightedIndex(i)
                        selectOptionAndCleanUp(option)
                      }}
                      onMouseEnter={() => {
                        setHighlightedIndex(i)
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
        showInput && autofillNode && ReactDOM.createPortal(
          <div className="trigger-autofill-menu">
            <div className="trigger-autofill-form">
              <input
                placeholder="ラベル"
                value={inputVal.label || ''}
                type="text"
                onChange={(e) => {
                  setInputVal((prev) => ({...prev, label: e.target.value}))
                }}
              />
              <label className="switch">
                <span>ファイル用</span>
                <input type="checkbox" checked={!!inputVal.isFile} onChange={(e) => {
                  setInputVal((prev) => ({...prev, isFile: e.target.checked}))
                }}/>
              </label>
              {
                inputVal.isFile && (
                  <input
                    placeholder="ファイルのタイトル 例：こちら"
                    value={inputVal.title || ''}
                    type="text"
                    onChange={(e) => {
                      setInputVal((prev) => ({...prev, title: e.target.value}))
                    }}
                  />
                )
              }
            </div>
            <button
              type="button"
              onClick={() => {
                editor.update(() => {
                  autofillNode?.setLabel(inputVal.label || '')
                  if (inputVal.isFile) {
                    autofillNode?.setInputTypeFile(inputVal.title || '')
                  }
                  const child = autofillNode?.getFirstChild()
                  if (child && $isAutofillTokenNode(child)) {
                    autofillNode?.append($createAutofillTokenNode(autofillNode?.getLabelForText()))
                    child.remove()
                    autofillNode?.selectNext()
                  }
                })
                setShowInput(false)
                setInputVal({label: ''})
                setAutofillNode(null)
              }}>
              保存
            </button>
          </div>
          , document.body,
        )
      }
    </>
  )
}