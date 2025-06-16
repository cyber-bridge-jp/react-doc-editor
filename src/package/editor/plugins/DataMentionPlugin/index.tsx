import {useLexicalComposerContext} from '@lexical/react/LexicalComposerContext'
import {
  LexicalTypeaheadMenuPlugin,
  MenuOption,
  MenuTextMatch,
  useBasicTypeaheadTriggerMatch,
} from '@lexical/react/LexicalTypeaheadMenuPlugin'

import {
  $nodesOfType, COMMAND_PRIORITY_EDITOR, createCommand,
  TextNode,
} from 'lexical'
import {useCallback, useEffect, useMemo, useState} from 'react'
import * as React from 'react'
import * as ReactDOM from 'react-dom'

import {
  $createDataMentionNode, DataMentionNode,
  DataMentionType,
} from '../../nodes/DataMentionNode.tsx'
import {mergeRegister} from '@lexical/utils'

export const UPDATE_AUTO_DATA_COMMAND = createCommand('UPDATE_AUTO_DATA_COMMAND')

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

const inputData: DataMentionObject[] = [
  {
    inputField: {
      label: '入力フィールドを追加',
      value: null,
    },
  },
]

const mentionsCache = new Map()

const lookUpService = {
  search(string: string, data: DataMentionObject[], callback: (results: Array<DataMentionObject>) => void): void {
    setTimeout(() => {
      const results = data.filter((mention) =>
        Object.keys(mention).filter((key) => mention[key].label.toLowerCase().includes(string.toLowerCase())).length > 0,
      )
      callback(results)
    }, 300)
  },
}

function useMentionLookupService(mentionString: string | null, data: DataMentionObject[], trigger = ''): Array<DataMentionObject> {
  const [results, setResults] = useState<Array<DataMentionObject>>([])
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
  dataMention: DataMentionType
  fieldName: string
  label: string
  data: string | number | null
  isMan: boolean
  isNumber: boolean

  constructor(dataMention: DataMentionType, fieldName: string, label: string, data: string | number | null, isMan = false, isNumber = false) {
    super(dataMention + label)
    this.dataMention = dataMention
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

export type DataMentionData = {
  label: string;
  value: string | number | null;
  isMan?: boolean;
  isNumber?: boolean;
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
  },
): React.JSX.Element | null {
  const [editor] = useLexicalComposerContext()

  const [queryString, setQueryString] = useState<string | null>(null)
  const [trigger, setTrigger] = useState<string>()
  const [inputVal, setInputVal] = useState<string>()
  const [showInput, setShowInput] = useState<boolean>(false)
  const [selectedItem, setSelectedItem] = useState<DataMentionNode | null>(null)

  const data = trigger === AUTO_TRIGGER ? autoData : trigger === AFTER_AUTO_TRIGGER ? afterAutoData : inputData
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
            return new MentionTypeaheadOption(trigger === AUTO_TRIGGER ? 'auto' : 'after-auto', key, result[key].label, result[key].value, result[key].isMan, result[key].isNumber)
          },
        ),
    [results],
  )

  const onSelectOption = useCallback(
    (
      selectedOption: MentionTypeaheadOption,
      nodeToReplace: TextNode | null,
      closeMenu: () => void,
    ) => {
      editor.update(() => {
        let data = selectedOption.data
        if (selectedOption.isMan && typeof data === 'number' && data) {
          data = 10000 * data
        }
        if (selectedOption.isNumber && data) {
          // make comma separated number
          data = data.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
        }
        const mentionNode = $createDataMentionNode(
          {
            dataMention: trigger === AUTO_TRIGGER ? 'auto' : trigger == INPUT_TRIGGER ? 'input' : 'after-auto',
            fieldName: selectedOption.fieldName,
            label: selectedOption.label,
            data: data,
            format: nodeToReplace?.getFormat(),
            style: nodeToReplace?.getStyle(),
          },
        )
        if (selectedOption.fieldName === 'inputField') {
          setShowInput(true)
          setSelectedItem(mentionNode)
          closeMenu()
        }
        if (nodeToReplace) {
          nodeToReplace.replace(mentionNode)
        }
        closeMenu()
      })
    },
    [editor, trigger],
  )

  const checkForMentionMatch = useCallback(
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

  useEffect(() => {
    if (!editor.hasNodes([DataMentionNode])) {
      throw new Error('DataMentionPlugin: DataMentionNode not registered on editor')
    }

    const updateAutoData = () => {
      editor.update(() => {
        const nodes = $nodesOfType(DataMentionNode)
        nodes.forEach(node => {
          if ((node.__dataMention === 'auto' && node.__step === 2) || (node.__dataMention === 'after-auto' && node.__step === 3)) {
            let data: DataMentionObject | undefined
            if (node.__dataMention === 'auto') {
              data = autoData.find((d) => d[node.__fieldName] && d[node.__fieldName].label === node.__label)
            } else {
              data = afterAutoData.find((d) => d[node.__fieldName] && d[node.__fieldName].label === node.__label)
            }
            if (data) {
              const dataOption = data[node.__fieldName]
              let value = dataOption.value
              if (value && dataOption.isMan) {
                value = parseInt(value.toString()) * 10000
              }
              if (value && dataOption.isNumber) {
                value = value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
              }
              node.setData(value)
            }
          }
        })
      })
    }

    updateAutoData()

    return mergeRegister(
      editor.registerCommand(
        UPDATE_AUTO_DATA_COMMAND,
        () => {
          if (step === 2 || step === 3) {
            updateAutoData()
            return true
          }
          return false
        },
        COMMAND_PRIORITY_EDITOR,
      ),
    )

  }, [editor])


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
        showInput && selectedItem && ReactDOM.createPortal(
          <div className="doc-editor-typeahead-popover data-mention-input-menu">
            <input placeholder="Enter label of input field" value={inputVal || ''} type="text"
                   onChange={(e) => {
                     setInputVal(e.target.value)
                   }}/>
            <button
              type="button"
              onClick={() => {
              editor.update(() => {
                selectedItem?.setLabel(inputVal || '')
                setShowInput(false)
                setSelectedItem(null)
                setInputVal('')
              })
            }}>Save
            </button>
          </div>
          , document.body,
        )
      }
    </>
  )
}