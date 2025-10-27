import {useSharedHistoryContext} from './context/SharedHistoryContext.tsx'
import {HistoryPlugin} from '@lexical/react/LexicalHistoryPlugin'
import {RichTextPlugin} from '@lexical/react/LexicalRichTextPlugin'
import {LexicalErrorBoundary} from '@lexical/react/LexicalErrorBoundary'
import {AutoFocusPlugin} from '@lexical/react/LexicalAutoFocusPlugin'
import {TabIndentationPlugin} from '@lexical/react/LexicalTabIndentationPlugin'
import {HorizontalRulePlugin} from '@lexical/react/LexicalHorizontalRulePlugin'
import {forwardRef, useCallback, useEffect, useImperativeHandle, useLayoutEffect, useState} from 'react'
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
import TriggerAutofill , {AutofillDataObject} from './plugins/AutofillPlugin/TriggerAutofill.tsx'
import {
  $getRoot, $nodesOfType,
  COMMAND_PRIORITY_CRITICAL,
  EditorState,
  LexicalEditor,
  SELECTION_CHANGE_COMMAND,
  SerializedEditorState
} from 'lexical'
import TableHoverActionsPlugin from './plugins/TableHoverActionsPlugin'
import {CAN_USE_DOM} from './utils/canUseDOM.ts'
import TableOfContentsPlugin from './plugins/TableOfContentsPlugin'
import {ReactDocEditorRef, ExportData, ImageUploadCallback} from "./DocumentEditor.tsx";
import {useLexicalComposerContext} from "@lexical/react/LexicalComposerContext";
import {$generateHtmlFromNodes} from "@lexical/html";
import {InitialEditorStateType} from "@lexical/react/LexicalComposer";
import AutofillPlugin, {UPDATE_DATA} from "./plugins/AutofillPlugin/AutofillPlugin.tsx";
import FloatingFileAttachEditorPlugin from "./plugins/FloatingFileAttachEditorPlugin";
import {AutofillNode, AutofillStage, SerializedAutofillNode} from "./nodes/AutofillNode.ts";
import {exportNodeToJSON} from "./utils/editorState.ts";

interface EditorProps extends ImageUploadCallback {
  stage: AutofillStage;
  autofillPreData: AutofillDataObject[]
  autofillPostData: AutofillDataObject[]
  onChange?: (data: ExportData) => void;
  showTableOfContents?: boolean;
  ignoreSelectionChange?: boolean;
  inputNodes?: SerializedAutofillNode[]
}

const Editor = forwardRef<ReactDocEditorRef, EditorProps>((props, ref) => {
  const {
    stage,
    autofillPreData,
    autofillPostData,
    onChange,
    imageUploadCallback,
    showTableOfContents = false,
    ignoreSelectionChange = true,
    inputNodes,
  } = props
  const {historyState} = useSharedHistoryContext()
  const [editor] = useLexicalComposerContext()
  const [activeEditor, setActiveEditor] = useState<LexicalEditor>(editor)
  const placeholder = <Placeholder>Enter text...</Placeholder>
  const [isLinkEditMode, setIsLinkEditMode] = useState<boolean>(false)
  const [isFileAttachEditMode, setIsFileAttachEditMode] = useState<boolean>(false)
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
    extractAllInputNodes: () => editor.getEditorState().read(() => {
      return $nodesOfType(AutofillNode).filter(n => n.__autofillType === 'input').map(n => exportNodeToJSON(n))
    }),
    updatePreData: (preData: AutofillDataObject[]) => {
      editor.dispatchCommand(UPDATE_DATA, {preData})
    }
  }))

  const handleEditorChange = useCallback((editorState: EditorState, e: LexicalEditor) => {
    if (onChange) {
      e.read(() => {
        const root = $getRoot()
        const htmlContent = $generateHtmlFromNodes(e)
        const serializedEditorState = editorState.toJSON()
        const plainContent = root.getTextContent()
        onChange({htmlContent, plainContent, serializedEditorState})
      })
    }
  }, [onChange])

  useLayoutEffect(() => {
    if (onChange) {
      return activeEditor.registerUpdateListener(
        ({ dirtyElements, dirtyLeaves, prevEditorState}) => {
          if ((dirtyElements.size === 0 && dirtyLeaves.size === 0) || prevEditorState.isEmpty()) {
            return;
          }
          const editorState = editor.getEditorState();
          handleEditorChange(editorState, editor);
        },
      );
    }
  }, [activeEditor, ignoreSelectionChange, handleEditorChange, onChange, editor]);

  useEffect(() => {
    return editor.registerCommand(
      SELECTION_CHANGE_COMMAND,
      (_payload, newEditor) => {
        setActiveEditor(newEditor)
        return false
      },
      COMMAND_PRIORITY_CRITICAL,
    )
  }, [editor])

  return (
    <>
      <ToolbarPlugin
        setIsLinkEditMode={setIsLinkEditMode}
        imageUploadCallback={imageUploadCallback}
        stage={stage}
      />
      <div className="editor-container">
        <DragDropPaste/>
        <AutoFocusPlugin/>
        <ComponentPickerPlugin imageUploadCallback={imageUploadCallback}/>
        <EmojiPickerPlugin/>
        <AutoEmbedPlugin/>
        <AutofillPlugin stage={stage} preData={autofillPreData} inputNodes={inputNodes}/>
        <TriggerAutofill stage={stage} preData={autofillPreData} postData={autofillPostData}/>
        <EmojisPlugin/>
        <KeywordsPlugin/>
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
            <FloatingFileAttachEditorPlugin
              anchorElem={floatingAnchorElem}
              isFileAttachEditMode={isFileAttachEditMode}
              setIsFileAttachEditMode={setIsFileAttachEditMode}
              imageUploadCallback={imageUploadCallback}
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