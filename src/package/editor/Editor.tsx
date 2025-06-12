import {useSharedHistoryContext} from './context/SharedHistoryContext.tsx'
import {HistoryPlugin} from '@lexical/react/LexicalHistoryPlugin'
import {RichTextPlugin} from '@lexical/react/LexicalRichTextPlugin'
import {LexicalErrorBoundary} from '@lexical/react/LexicalErrorBoundary'
import {AutoFocusPlugin} from '@lexical/react/LexicalAutoFocusPlugin'
import {TabIndentationPlugin} from '@lexical/react/LexicalTabIndentationPlugin'
import {HorizontalRulePlugin} from '@lexical/react/LexicalHorizontalRulePlugin'
import {forwardRef, useEffect, useImperativeHandle, useState} from 'react'
import Placeholder from './ui/Placeholder.tsx'
import ContentEditable from './ui/ContentEditable.tsx'
import ToolbarPlugin from './plugins/ToolbarPlugin'
import {ListPlugin} from '@lexical/react/LexicalListPlugin'
import {CheckListPlugin} from '@lexical/react/LexicalCheckListPlugin'
import ListMaxIndentLevelPlugin from './plugins/ListMaxIndentLevelPlugin'
import TabFocusPlugin from './plugins/TabFocusPlugin'
import FloatingLinkEditorPlugin from './plugins/FloatingLinkEditorPlugin'
import AutoLinkPlugin from './plugins/AutoLinkPlugin'
import LinkPlugin from './plugins/LinkPlugin'
import PageBreakPlugin from './plugins/PageBreakPlugin'
import ImagesPlugin from './plugins/ImagesPlugin'
import KeywordsPlugin from './plugins/KeywordsPlugin'
import EmojisPlugin from './plugins/EmojisPlugin'
import ComponentPickerPlugin from './plugins/ComponentPickerPlugin'
import AutoEmbedPlugin from './plugins/AutoEmbedPlugin'
import {LayoutPlugin} from './plugins/LayoutPlugin/LayoutPlugin.tsx'
import CollapsiblePlugin from './plugins/CollapsiblePlugin'
import ExcalidrawPlugin from './plugins/ExcalidrawPlugin'
import EquationsPlugin from './plugins/EquationsPlugin'
import FigmaPlugin from './plugins/FigmaPlugin'
import YouTubePlugin from './plugins/YouTubePlugin'
import TwitterPlugin from './plugins/TwitterPlugin'
import PollPlugin from './plugins/PollPlugin'
import InlineImagePlugin from './plugins/InlineImagePlugin'
import FloatingTextFormatToolbarPlugin from './plugins/FloatingTextFormatToolbarPlugin'
import {TablePlugin} from '@lexical/react/LexicalTablePlugin'
import TableCellResizerPlugin from './plugins/TableCellResizer'
import TableActionMenuPlugin from './plugins/TableActionMenuPlugin'
import DragDropPaste from './plugins/DragDropPastePlugin'
import EmojiPickerPlugin from './plugins/EmojiPickerPlugin'
import DraggableBlockPlugin from './plugins/DraggableBlockPlugin'
import DataMentionPlugin, {DataMentionObject} from './plugins/DataMentionPlugin'
import {OnChangePlugin} from '@lexical/react/LexicalOnChangePlugin'
import {$getRoot, EditorState, LexicalEditor, SerializedEditorState} from 'lexical'
import TableHoverActionsPlugin from './plugins/TableHoverActionsPlugin'
import {CAN_USE_DOM} from './utils/canUseDOM.ts'
import TableOfContentsPlugin from './plugins/TableOfContentsPlugin'
import {EmailEditorRef, ExportData, ImageUploadCallback} from "./DocumentEditor.tsx";
import {useLexicalComposerContext} from "@lexical/react/LexicalComposerContext";
import {$generateHtmlFromNodes} from "@lexical/html";
import {InitialEditorStateType} from "@lexical/react/LexicalComposer";

interface EditorProps extends ImageUploadCallback{
  step: 1 | 2 | 3;
  autoMentionData: DataMentionObject[]
  autoAfterMentionData: DataMentionObject[]
  onChange?: (editorState: EditorState, editor: LexicalEditor, tags: Set<string>) => void;
  showTableOfContents?: boolean;
}

const Editor = forwardRef<EmailEditorRef, EditorProps>((props, ref) => {
  const {
    step,
    autoMentionData,
    autoAfterMentionData,
    onChange = () => {},
    imageUploadCallback,
    showTableOfContents = false,
  } = props
  const {historyState} = useSharedHistoryContext()
  const [editor] = useLexicalComposerContext()
  const placeholder = <Placeholder>Enter text...</Placeholder>
  const [isLinkEditMode, setIsLinkEditMode] = useState<boolean>(false)
  const [floatingAnchorElem, setFloatingAnchorElem] = useState<HTMLDivElement | null>(null)
  const [isSmallWidthViewport, setIsSmallWidthViewport] = useState<boolean>(false)

  const onRef = (_floatingAnchorElem: HTMLDivElement) => {
    if (_floatingAnchorElem !== null) {
      setFloatingAnchorElem(_floatingAnchorElem)
    }
  }

  useEffect(() => {
    const updateViewPortWidth = () => {
      const isNextSmallWidthViewport =
        CAN_USE_DOM && window.matchMedia('(max-width: 1025px)').matches

      if (isNextSmallWidthViewport !== isSmallWidthViewport) {
        setIsSmallWidthViewport(isNextSmallWidthViewport)
      }
    }
    updateViewPortWidth()
    window.addEventListener('resize', updateViewPortWidth)

    return () => {
      window.removeEventListener('resize', updateViewPortWidth)
    }
  }, [isSmallWidthViewport])

  const exportData = (): ExportData => {
    let htmlContent = ''
    let plainContent = ''
    let serializedEditorState: SerializedEditorState = {} as SerializedEditorState
    editor.read(() => {
      const root = $getRoot()
      htmlContent = $generateHtmlFromNodes(editor)
      serializedEditorState = editor.getEditorState().toJSON()
      plainContent = root.getTextContent()
    })

    return {serializedEditorState, htmlContent, plainContent}
  }

  const updateEditorState = (initialEditorState: InitialEditorStateType) => {
    if (initialEditorState === null) return
    switch (typeof initialEditorState) {
      case 'string': {
        const parsedEditorState = editor.parseEditorState(initialEditorState);
        editor.setEditorState(parsedEditorState, {tag: 'history-merge'});
        break;
      }
      case 'object': {
        editor.setEditorState(initialEditorState, {tag: 'history-merge'});
        break;
      }
      case 'function': {
        editor.update(() => {
          const root = $getRoot();
          if (root.isEmpty()) {
            initialEditorState(editor);
          }
        }, {tag: 'history-merge'});
        break;
      }
    }
  }

  useImperativeHandle(ref, () => ({
    exportData,
    updateEditorState,
    getEditor: () => editor,
  }))

  return (
    <>
      <ToolbarPlugin setIsLinkEditMode={setIsLinkEditMode} imageUploadCallback={imageUploadCallback}/>
      <div className="editor-container">
        <DragDropPaste/>
        <AutoFocusPlugin/>
        <ComponentPickerPlugin imageUploadCallback={imageUploadCallback}/>
        <EmojiPickerPlugin/>
        <AutoEmbedPlugin/>
        <DataMentionPlugin step={step} autoData={autoMentionData} afterAutoData={autoAfterMentionData}/>
        <EmojisPlugin/>
        <KeywordsPlugin/>
        <OnChangePlugin ignoreSelectionChange={true} onChange={onChange}/>
        <HistoryPlugin externalHistoryState={historyState}/>
        <AutoLinkPlugin/>
        <RichTextPlugin
          contentEditable={
            <div className="editor-scroller">
              <div className="editor" ref={onRef}>
                <ContentEditable/>
              </div>
            </div>
          }
          placeholder={placeholder}
          ErrorBoundary={LexicalErrorBoundary}
        />
        <ListPlugin/>
        <CheckListPlugin/>
        <ListMaxIndentLevelPlugin maxDepth={7}/>
        <TablePlugin
          hasCellMerge={true}
          hasCellBackgroundColor={true}
        />
        <TableCellResizerPlugin/>
        <ImagesPlugin/>
        <InlineImagePlugin/>
        <LinkPlugin/>
        <PollPlugin/>
        <TwitterPlugin/>
        <YouTubePlugin/>
        <FigmaPlugin/>
        <HorizontalRulePlugin/>
        <EquationsPlugin/>
        <ExcalidrawPlugin/>
        <TabFocusPlugin/>
        <TabIndentationPlugin/>
        <CollapsiblePlugin/>
        <PageBreakPlugin/>
        <LayoutPlugin/>
        {floatingAnchorElem && !isSmallWidthViewport && (
          <>
            <DraggableBlockPlugin
              anchorElem={floatingAnchorElem}
            />
            <FloatingLinkEditorPlugin
              anchorElem={floatingAnchorElem}
              isLinkEditMode={isLinkEditMode}
              setIsLinkEditMode={setIsLinkEditMode}
            />
            <TableHoverActionsPlugin anchorElem={floatingAnchorElem}/>
            <FloatingTextFormatToolbarPlugin
              anchorElem={floatingAnchorElem}
            />
            <TableActionMenuPlugin
              anchorElem={floatingAnchorElem}
              cellMerge={true}
            />
          </>
        )}
        {showTableOfContents && <TableOfContentsPlugin/>}
      </div>
    </>
  )
})

export default Editor;