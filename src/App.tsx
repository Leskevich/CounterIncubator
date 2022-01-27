import React, {useState} from 'react';
import './App.css';
import Count from "./components/Count";
import StartCount from "./components/StartCount";


function App() {
    const valueFromLocalStorage = Number(localStorage.getItem('count'))
    let [count, setCount] = useState(valueFromLocalStorage)
    let [startCount, setStartCount] = useState(0)
    let [maxCount, setMaxCount] = useState(0)
    let [disabled, setDisabled] = useState(true)

    function inc() {
        setCount(count + 1)
    }

    function res() {
        setCount(startCount)
    }

    function startValue(value: number) {
        setStartCount(value)
    }

    function maxValue(value: number) {
        setMaxCount(value)
    }

    function setStartValue() {
        setCount(startCount)
    }

    const setLocalValue = (value: number) => {
        localStorage.setItem('count', JSON.stringify(value))
    }

    return (
        <div className="App">
            <StartCount
                disabled={disabled}
                setDisabled={setDisabled}
                startValue={startValue}
                maxValue={maxValue}
                setStartValue={setStartValue}
                setLocalValue={setLocalValue}
            />
            <Count
                count={count}
                inc={inc}
                res={res}
                maxCount={maxCount}
                startCount={startCount}
                disabled={disabled}
            />
        </div>
    );
}

export default App;
