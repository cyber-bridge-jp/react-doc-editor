import React, {useEffect} from 'react'
import DocumentEditor from './components/DocumentEditor.tsx'
import './components/styles.css'
import {$generateHtmlFromNodes} from '@lexical/html'
import {LexicalEditor} from 'lexical'


const App: React.FC = () => {
  const editorRef = React.useRef<LexicalEditor | null>(null)
  const [updated, setUpdated] = React.useState(0)
  const [html, setHtml] = React.useState('')

  useEffect(() => {
    if (editorRef.current) {
      editorRef.current.update(() => {
        setHtml($generateHtmlFromNodes(editorRef.current as LexicalEditor, null))
      })
    }
  }, [updated])
  return (
    <>
      <DocumentEditor
        editorState={'{"root":{"children":[{"children":[{"detail":0,"format":0,"mode":"normal","style":"","text":"test ","type":"text","version":1},{"dataMention":"input","fieldName":"inputField","label":"abc","value":{"editorState":{"root":{"children":[],"direction":null,"format":"","indent":0,"type":"root","version":1}}},"data":null,"version":1,"type":"data-mention","format":0,"style":""}],"direction":"ltr","format":"","indent":0,"type":"paragraph","version":1,"textFormat":0,"textStyle":""}],"direction":"ltr","format":"","indent":0,"type":"root","version":1}}'}
        editorRef={editorRef}
        onChange={(_editorState, editor, _tags) => {
          if (!editorRef.current) {
            editorRef.current = editor
          }
        }}
        step={1}
      />
      <button onClick={() => setUpdated(updated + 1)}>Update</button>
      <div dangerouslySetInnerHTML={{__html: html}}/>
    </>
  )
}

export default App