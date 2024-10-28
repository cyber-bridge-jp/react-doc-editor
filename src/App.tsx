import React from "react";
import DocumentEditor from "./components/DocumentEditor.tsx";
import './components/styles.css';


const App: React.FC = () => {
    return (
        <DocumentEditor
          autoMentionData={[{test: {label: "Test", value: 1000, isNumber: true, isMan: true}}]}
          editorState={'{"root":{"children":[{"children":[{"dataMention":"auto","fieldName":"test","label":"Test","data":null,"version":1,"type":"data-mention","format":0,"style":""}],"direction":null,"format":"","indent":0,"type":"paragraph","version":1,"textFormat":0,"textStyle":""}],"direction":null,"format":"","indent":0,"type":"root","version":1}}'}
          step={2}
        />
    )
}

export default App;