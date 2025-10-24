import React from 'react'
import DocumentEditor from './package/editor/DocumentEditor.tsx'
import './package/editor/styles.css'

const App: React.FC = () => {
  return <DocumentEditor autofillPreData={[{test: {label: 'test', value: ''}}]}/>
}

export default App