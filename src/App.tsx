import React from 'react';
import './App.css';
import Count from "./components/Count";
import StartCount from "./components/StartCount";

function App() {
    return (
        <div className="App">
            <StartCount/>
            <Count/>
        </div>
    );
}

export default App;
