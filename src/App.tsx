import React from "react";
import DocumentEditor from "./components/DocumentEditor.tsx";
import './components/styles.css';


const App: React.FC = () => {
    return (
        <DocumentEditor autoMentionData={[{test: {label: "Test", value: "Test"}}]}/>
    )
}

export default App;