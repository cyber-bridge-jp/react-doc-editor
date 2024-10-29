import React, {Suspense, useCallback, useEffect} from 'react'
import {LexicalNestedComposer} from '@lexical/react/LexicalNestedComposer'
import {AutoFocusPlugin} from '@lexical/react/LexicalAutoFocusPlugin'
import LinkPlugin from '../plugins/LinkPlugin'
import EmojisPlugin from '../plugins/EmojisPlugin'
import {HashtagPlugin} from '@lexical/react/LexicalHashtagPlugin'
import KeywordsPlugin from '../plugins/KeywordsPlugin'
import {HistoryPlugin} from '@lexical/react/LexicalHistoryPlugin'
import {RichTextPlugin} from '@lexical/react/LexicalRichTextPlugin'
import {ContentEditable} from '@lexical/react/LexicalContentEditable'
import Placeholder from '../ui/Placeholder.tsx'
import LexicalErrorBoundary from '@lexical/react/LexicalErrorBoundary'
import {LexicalEditor} from 'lexical/LexicalEditor'
import {useSharedHistoryContext} from '../context/SharedHistoryContext.tsx'
import './DataMentionNode.css'
import {
  $getNodeByKey,
  $getSelection,
  $isNodeSelection,
  CLICK_COMMAND,
  COMMAND_PRIORITY_LOW,
  DELETE_LINE_COMMAND,
  DELETE_WORD_COMMAND,
  FORMAT_TEXT_COMMAND,
  KEY_BACKSPACE_COMMAND,
  KEY_DELETE_COMMAND,
  LineBreakNode,
  type NodeKey,
  ParagraphNode, REMOVE_TEXT_COMMAND,
  RootNode,
  TextFormatType,
  TextNode,
} from 'lexical'
import {EmojiNode} from './EmojiNode.tsx'
import {KeywordNode} from './KeywordNode.ts'
import {useLexicalNodeSelection} from '@lexical/react/useLexicalNodeSelection'
import {useLexicalComposerContext} from '@lexical/react/LexicalComposerContext'
import {mergeRegister} from '@lexical/utils'
import {$isDataMentionNode, DataMentionNode} from './DataMentionNode.tsx'

export default function DataMentionComponent(
  {
    dataMention,
    label,
    value,
    data,
    step,
    nodeKey,
    error,
  }: {
    dataMention: 'auto' | 'input' | 'after-auto';
    label: string;
    value?: LexicalEditor;
    data: string | number | null;
    step: 1 | 2 | 3;
    nodeKey: NodeKey;
    error: string | null;
  },
): React.JSX.Element {
  const {historyState} = useSharedHistoryContext()
  const divRef = React.useRef<HTMLSpanElement>(null)
  const editorRef = React.useRef<HTMLDivElement | null>(null)
  const [isSelected, setSelected, clearSelection] = useLexicalNodeSelection(nodeKey)
  const [editor] = useLexicalComposerContext()

  const onClick = useCallback(
    (payload: MouseEvent) => {
      if (payload.target === divRef.current) {
        clearSelection()
        setSelected(true)
        return true
      }

      return false
    },
    [setSelected, clearSelection],
  )

  const onDelete = useCallback((payload: KeyboardEvent) => {
    const selection = $getSelection()
    const node = $getNodeByKey(nodeKey) as DataMentionNode
    if (node && node.setSpanRef) {
      node.setSpanRef(divRef.current)
    }
    if (isSelected && $isNodeSelection(selection)) {
      payload.preventDefault()
      if ($isDataMentionNode(node) && node.getKey() === nodeKey) {
        node.remove()
        return true
      }
    }
    return false
  }, [nodeKey, isSelected])

  const onFormatText = useCallback((format: TextFormatType) => {
    if (isSelected && $isNodeSelection($getSelection())) {
      const node = $getNodeByKey(nodeKey)
      if ($isDataMentionNode(node)) {
        node.toggleFormat(format)
        return true
      }
    }
    return false
  }, [isSelected, nodeKey])

  useEffect(() => {
    const unregister = mergeRegister(
      editor.registerCommand<MouseEvent>(
        CLICK_COMMAND,
        onClick,
        COMMAND_PRIORITY_LOW,
      ),
      editor.registerCommand(
        KEY_DELETE_COMMAND,
        onDelete,
        COMMAND_PRIORITY_LOW,
      ),
      editor.registerCommand(
        DELETE_WORD_COMMAND,
        onDelete,
        COMMAND_PRIORITY_LOW,
      ),
      editor.registerCommand(
        DELETE_LINE_COMMAND,
        onDelete,
        COMMAND_PRIORITY_LOW,
      ),
      editor.registerCommand(
        REMOVE_TEXT_COMMAND,
        onDelete,
        COMMAND_PRIORITY_LOW,
      ),
      editor.registerCommand(
        KEY_BACKSPACE_COMMAND,
        onDelete,
        COMMAND_PRIORITY_LOW,
      ),
      editor.registerCommand<TextFormatType>(
        FORMAT_TEXT_COMMAND,
        onFormatText,
        COMMAND_PRIORITY_LOW,
      ),
    )

    if (divRef.current) {
      const sibling = divRef.current.previousSibling || divRef.current.nextSibling
      if (sibling) {
        // then we need to insert this ref inside the previousSibling
        sibling.appendChild(divRef.current)
      }
    }

    if (value && step == 2) {
      editor.update(() => {
        value.setEditable(true)
      })
    }

    return () => {
      unregister()
    }
  }, [editor, onClick, onDelete])

  useEffect(() => {
    if (editorRef.current) {
      const elem = editorRef.current
      const sibling = elem?.nextSibling?.firstChild?.parentElement
      if (sibling && elem) {
        elem.style.minWidth = `${sibling.offsetWidth}px`
      }
    }
  }, [])


  return (
    <Suspense fallback={null}>
      {
        dataMention !== 'input' ?
          step === 3 ?
            (
              <span data-decorate="true">
                {data}
              </span>
            ) : step === 2 ?
              (
                <span data-decorate="true">{dataMention === 'after-auto' ? label : data}</span>
              ) :
              (
                <span data-decorate="true" ref={divRef}
                      style={isSelected ? {border: '1px solid blue'} : {}}>{label}</span>
              )
          : (
            step !== 1 && value ?
              <span className="data-mention-input-container" data-mention-input-step={step}>
                <LexicalNestedComposer
                  initialEditor={value}
                  initialNodes={[RootNode, TextNode, LineBreakNode, ParagraphNode, EmojiNode, KeywordNode]}
                >
                  <AutoFocusPlugin/>
                  <LinkPlugin/>
                  <EmojisPlugin/>
                  <HashtagPlugin/>
                  <KeywordsPlugin/>
                  <HistoryPlugin externalHistoryState={historyState}/>
                  <RichTextPlugin
                    contentEditable={
                      <ContentEditable
                        ref={(ref) => {editorRef.current = ref}}
                        data-mention-input-step={step}
                        {...error ? {'data-mention-input-error': error} : {}}
                        className="DataMention__contentEditable"/>
                    }
                    placeholder={
                      <Placeholder
                        className={error ? 'DataMention__placeholder_error' : 'DataMention__placeholder'}
                      >
                        {error ? error : `${label}を入力してください`}
                      </Placeholder>
                    }
                    ErrorBoundary={LexicalErrorBoundary}
                  />
                </LexicalNestedComposer>
              </span> :
              <span data-decorate="true"><b>{label}</b></span>
          )
      }
    </Suspense>
  )
}