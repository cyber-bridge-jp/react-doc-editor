import React from 'react'
import DocumentEditor from './package/editor/DocumentEditor.tsx'
import './package/editor/styles.css'

const App: React.FC = () => {
  const [preview, setPreview] = React.useState('')
  return (
    <>
      <iframe
        srcDoc={preview}
        style={{width: '100%', height: '100%'}}
      />
      <DocumentEditor
        onChange={({htmlContent})=>{setPreview(htmlContent)}}
        autofillPreData={[{
          test: {
            label: 'Hello'
          }
        }]}
        autofillPostData={[{
          papa: {
            label: 'Papa'
          }
        }]}
      />
    </>
  )
}

export default App