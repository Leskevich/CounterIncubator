import React, {ChangeEvent} from 'react';

type startCountP = {
    startValue: (value: number) => void
    maxValue: (value: number) => void
    setStartValue:()=>void
    setDisabled:(t:boolean)=>void
    disabled:boolean
}
const StartCount = ({startValue,maxValue,setStartValue,setDisabled,disabled}: startCountP) => {

    let startCounter = (e: ChangeEvent<HTMLInputElement>) => {
        let value = e.currentTarget.value
        startValue(+value)
        setDisabled(false)
    }
    let maxCounter = (e: ChangeEvent<HTMLInputElement>) => {
        let value = e.currentTarget.value
        maxValue(+value)
        setDisabled(false)
    }
    let buttonClick = ()=>{
        setStartValue()
        setDisabled(true)
    }

    return (
        <div>
            <input placeholder={'start count'} onChange={startCounter}/>
            <input placeholder={'max count'} onChange={maxCounter}  />
            <button disabled={disabled} onClick={buttonClick}>set</button>
        </div>
    )
}


export default StartCount
