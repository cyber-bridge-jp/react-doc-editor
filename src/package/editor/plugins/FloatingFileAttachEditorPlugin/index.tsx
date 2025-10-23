import './index.css'

import {useLexicalComposerContext} from '@lexical/react/LexicalComposerContext'
import {$findMatchingParent, mergeRegister} from '@lexical/utils'
import {
  $getSelection,
  $isLineBreakNode,
  $isRangeSelection,
  CLICK_COMMAND,
  COMMAND_PRIORITY_CRITICAL,
  COMMAND_PRIORITY_HIGH,
  COMMAND_PRIORITY_LOW,
  KEY_ESCAPE_COMMAND,
  LexicalEditor,
  SELECTION_CHANGE_COMMAND,
} from 'lexical'
import {Dispatch, useCallback, useEffect, useRef, useState} from 'react'
import * as React from 'react'
import {createPortal} from 'react-dom'

import {getSelectedNode} from '../../utils/getSelectedNode'
import {setFloatingElemPositionForLinkEditor} from '../../utils/setFloatingElemPositionForLinkEditor'
import {$createFileAttachNode, $isFileAttachNode, FileAttachNode} from "../../nodes/FileAttachNode.ts";
import {$isAutofillTokenNode} from "../../nodes/AutofillTokenNode.ts";
import {UploadCallbackType} from "../../DocumentEditor.tsx";

function FloatingFileAttachEditor({
                                    editor,
                                    isFileAttach,
                                    setIsFileAttach,
                                    anchorElem,
                                    isFileAttachEditMode,
                                    setIsFileAttachEditMode,
                                    imageUploadCallback,
                                  }: {
  editor: LexicalEditor;
  isFileAttach: boolean;
  setIsFileAttach: Dispatch<boolean>;
  anchorElem: HTMLElement;
  isFileAttachEditMode: boolean;
  setIsFileAttachEditMode: Dispatch<boolean>;
  imageUploadCallback?: UploadCallbackType
}): JSX.Element {
  const editorRef = useRef<HTMLDivElement | null>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const [linkUrl, setLinkUrl] = useState('')
  const [editedLinkUrl, setEditedLinkUrl] = useState('https://')
  const [title, setTitle] = useState('')
  const [editedTitle, setEditedTitle] = useState('')
  const [currentNode, setCurrentNode] = useState<FileAttachNode | null>(null)

  const updateLinkEditor = useCallback(() => {
    const selection = $getSelection()
    if ($isRangeSelection(selection)) {
      const node = getSelectedNode(selection)
      const linkParent = $findMatchingParent(node, $isFileAttachNode)

      if (linkParent) {
        setLinkUrl(linkParent.getURL())
        setTitle(linkParent.getTitle() || '')
        setCurrentNode(linkParent)
      } else if ($isFileAttachNode(node)) {
        setLinkUrl(node.getURL())
        setTitle(node.getTitle() || '')
        setCurrentNode(node)
      } else {
        setLinkUrl('')
      }
      if (isFileAttachEditMode) {
        setEditedLinkUrl(linkUrl)
        setEditedTitle(title)
      }
    }
    const editorElem = editorRef.current
    const nativeSelection = window.getSelection()
    const activeElement = document.activeElement

    if (editorElem === null) {
      return
    }

    const rootElement = editor.getRootElement()

    if (
      selection !== null &&
      nativeSelection !== null &&
      rootElement !== null &&
      rootElement.contains(nativeSelection.anchorNode) &&
      editor.isEditable()
    ) {
      const domRect: DOMRect | undefined =
        nativeSelection.focusNode?.parentElement?.getBoundingClientRect()
      if (domRect) {
        domRect.y += 40
        setFloatingElemPositionForLinkEditor(domRect, editorElem, anchorElem)
      }
    } else if (!activeElement || activeElement.className !== 'link-input') {
      if (rootElement !== null) {
        setFloatingElemPositionForLinkEditor(null, editorElem, anchorElem)
      }
      setIsFileAttachEditMode(false)
      setLinkUrl('')
      setTitle('')
    }

    return true
  }, [anchorElem, editor, setIsFileAttachEditMode, isFileAttachEditMode, linkUrl])

  useEffect(() => {
    const scrollerElem = anchorElem.parentElement

    const update = () => {
      editor.getEditorState().read(() => {
        updateLinkEditor()
      })
    }

    window.addEventListener('resize', update)

    if (scrollerElem) {
      scrollerElem.addEventListener('scroll', update)
    }

    return () => {
      window.removeEventListener('resize', update)

      if (scrollerElem) {
        scrollerElem.removeEventListener('scroll', update)
      }
    }
  }, [anchorElem.parentElement, editor, updateLinkEditor])

  useEffect(() => {
    return mergeRegister(
      editor.registerUpdateListener(({editorState}) => {
        editorState.read(() => {
          updateLinkEditor()
        })
      }),

      editor.registerCommand(
        SELECTION_CHANGE_COMMAND,
        () => {
          updateLinkEditor()
          return true
        },
        COMMAND_PRIORITY_LOW,
      ),
      editor.registerCommand(
        KEY_ESCAPE_COMMAND,
        () => {
          if (isFileAttach) {
            setIsFileAttach(false)
            return true
          }
          return false
        },
        COMMAND_PRIORITY_HIGH,
      ),
    )
  }, [editor, updateLinkEditor, setIsFileAttach, isFileAttach])

  useEffect(() => {
    editor.getEditorState().read(() => {
      updateLinkEditor()
    })
  }, [editor, updateLinkEditor])

  useEffect(() => {
    if (isFileAttachEditMode && inputRef.current) {
      inputRef.current.focus()
    }
  }, [isFileAttachEditMode, isFileAttach])

  const handleLinkSubmission = () => {
    if (currentNode !== null) {
      if (editedLinkUrl !== '' && editedTitle !== '') {
        editor.update(() => {
          const child = currentNode.getFirstChild();
          if (child && $isAutofillTokenNode(child)) {
            child.setTextContent(editedTitle)
          }
          const newNode = $createFileAttachNode(editedLinkUrl, {
            rel: currentNode.__rel,
            target: currentNode.__target,
            title: editedTitle,
          })
          currentNode.replace(newNode, true)
          setCurrentNode(newNode)
        })
      }
      setIsFileAttachEditMode(false)
    }
  }

  return (
    <div ref={editorRef} className="file-attach-editor">
      {!isFileAttach ? null : isFileAttachEditMode ? (
        <div className="file-attach-form">
          <div className="file-attach-inputs">
            <label htmlFor="file-attach-url">ファイルのURL</label>
            <input
              id="file-attach-url"
              ref={inputRef}
              className="file-attach-input"
              value={editedLinkUrl}
              onChange={(event) => {
                setEditedLinkUrl(event.target.value)
              }}
            />
            <label className="file-attach-input-file">
              <span>ファイルを選択</span>
              <input
                type="file"
                accept="application/pdf"
                onChange={(event) => {
                  const file = event.target.files?.[0]
                  if (file) {
                    const reader = new FileReader();
                    reader.onload = function () {
                      if (typeof reader.result === 'string') {
                        if (imageUploadCallback) {
                          imageUploadCallback(file, reader.result, (s) => {
                            setEditedLinkUrl(s)
                          })
                        } else {
                          setEditedLinkUrl(reader.result)
                        }
                      }
                    };
                    reader.readAsDataURL(file)
                  }
                }}
              />
            </label>
          </div>
          <div className="file-attach-inputs">
            <label htmlFor="file-attach-title">タイトル</label>
            <input
              id="file-attach-title"
              className="file-attach-input"
              value={editedTitle}
              onChange={(event) => {
                setEditedTitle(event.target.value)
              }}
            />
          </div>
          <div>
            <div
              className="file-attach-cancel"
              role="button"
              tabIndex={0}
              onMouseDown={(event) => event.preventDefault()}
              onClick={() => {
                setIsFileAttachEditMode(false)
              }}
            />

            <div
              className="file-attach-confirm"
              role="button"
              tabIndex={0}
              onMouseDown={(event) => event.preventDefault()}
              onClick={handleLinkSubmission}
            />
          </div>
        </div>
      ) : (
        <div className="file-attach-view">
          <div
            className="file-attach-edit"
            role="button"
            tabIndex={0}
            onMouseDown={(event) => event.preventDefault()}
            onClick={() => {
              setEditedLinkUrl(linkUrl)
              setEditedTitle(title)
              setIsFileAttachEditMode(true)
            }}
          />
          <dl>
            <dt>
              ファイルのURL
            </dt>
            <dd>
              <a href={linkUrl} target="_blank" rel="noopener noreferrer">{linkUrl}</a>
            </dd>
            <dt>
              タイトル
            </dt>
            <dd>
              {title}
            </dd>
          </dl>
        </div>
      )}
    </div>
  )
}

function useFloatingLinkEditorToolbar(
  editor: LexicalEditor,
  anchorElem: HTMLElement,
  isFileAttachEditMode: boolean,
  setIsFileAttachEditMode: Dispatch<boolean>,
  imageUploadCallback?: UploadCallbackType
): JSX.Element | null {
  const [activeEditor, setActiveEditor] = useState(editor)
  const [isFileAttach, setIsFileAttach] = useState(false)

  useEffect(() => {
    function updateToolbar() {
      const selection = $getSelection()
      if ($isRangeSelection(selection)) {
        const focusNode = getSelectedNode(selection)
        const focusFileAttachNode = $findMatchingParent(focusNode, $isFileAttachNode)
        if (!focusFileAttachNode) {
          setIsFileAttach(false)
          return
        }
        const badNode = selection.getNodes().find((node) => {
          const fileAttachNode = $findMatchingParent(node, $isFileAttachNode)
          if (
            !fileAttachNode?.is(focusFileAttachNode) &&
            !fileAttachNode &&
            !$isLineBreakNode(node)
          ) {
            return node
          }
        })
        if (!badNode) {
          setIsFileAttach(true)
        } else {
          setIsFileAttach(false)
        }
      }
    }

    return mergeRegister(
      editor.registerUpdateListener(({editorState}) => {
        editorState.read(() => {
          updateToolbar()
        })
      }),
      editor.registerCommand(
        SELECTION_CHANGE_COMMAND,
        (_payload, newEditor) => {
          updateToolbar()
          setActiveEditor(newEditor)
          return false
        },
        COMMAND_PRIORITY_CRITICAL,
      ),
      editor.registerCommand(
        CLICK_COMMAND,
        (payload) => {
          const selection = $getSelection()
          if ($isRangeSelection(selection)) {
            const node = getSelectedNode(selection)
            const linkNode = $findMatchingParent(node, $isFileAttachNode)
            if ($isFileAttachNode(linkNode) && (payload.metaKey || payload.ctrlKey)) {
              window.open(linkNode.getURL(), '_blank')
              return true
            }
          }
          return false
        },
        COMMAND_PRIORITY_LOW,
      ),
    )
  }, [editor])

  return createPortal(
    <FloatingFileAttachEditor
      editor={activeEditor}
      isFileAttach={isFileAttach}
      anchorElem={anchorElem}
      setIsFileAttach={setIsFileAttach}
      isFileAttachEditMode={isFileAttachEditMode}
      setIsFileAttachEditMode={setIsFileAttachEditMode}
      imageUploadCallback={imageUploadCallback}
    />,
    anchorElem,
  )
}

export default function FloatingFileAttachEditorPlugin({
                                                         anchorElem = document.body,
                                                         isFileAttachEditMode,
                                                         setIsFileAttachEditMode,
                                                         imageUploadCallback,
                                                       }: {
  anchorElem?: HTMLElement;
  isFileAttachEditMode: boolean;
  setIsFileAttachEditMode: Dispatch<boolean>;
  imageUploadCallback?: UploadCallbackType;
}): React.JSX.Element | null {
  const [editor] = useLexicalComposerContext()
  return useFloatingLinkEditorToolbar(
    editor,
    anchorElem,
    isFileAttachEditMode,
    setIsFileAttachEditMode,
    imageUploadCallback
  )
}