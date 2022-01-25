import React, {useState} from 'react';
import './App.css';
import Count from "./components/Count";
import StartCount from "./components/StartCount";


function App() {
    let [count, setCount] = useState(0)
    let [startCount, setStartCount] = useState(0)


    function inc() {
        setCount(count + 1)
    }

    function res() {
        setCount(0)
    }

    function startValue(value:number){
        setStartCount(value)
    }

    return (
        <div className="App">
            <StartCount
            />
            <Count
                count={count}
                inc={inc}
                res={res}
            />
        </div>
    );
}

export default App;
