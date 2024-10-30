import React from 'react'
import DocumentEditor from './package/editor/DocumentEditor.tsx'
import './package/editor/styles.css'

const App: React.FC = () => {
  return (
    <div style={{display: 'flex'}}>
      <div style={{width: '200px'}}/>
      <main style={{flex: "1", overflowX: "auto", padding: "1rem"}}>
        <div
          style={{
            width: 'calc(100% - 250px)',
            height: 'calc(100vh - 300px)',
            overflow: 'scroll',
            minHeight: '300px',
          }}
        >
          <DocumentEditor showTableOfContents={true}/>
        </div>
      </main>
    </div>
  )
}

export default App