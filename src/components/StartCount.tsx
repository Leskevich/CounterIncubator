import React, {ChangeEvent} from 'react';
import {useDispatch} from "react-redux";
import {maxValueAC, setStartCountAC, startValueAC} from "../store/courReduse";

type startCountP = {
    startValue: (value: number) => void
    maxValue: (value: number) => void
    setStartValue: () => void
    setLocalValue: (value: number) => void
    setDisabled: (t: boolean) => void
    disabled: boolean
}
const StartCount = ({startValue, maxValue, setStartValue, setDisabled, disabled, setLocalValue}: startCountP) => {
let dispatch = useDispatch()
    let startCounter = (e: ChangeEvent<HTMLInputElement>) => {
        let value = e.currentTarget.value
        dispatch(startValueAC(+value))
        setDisabled(false)
        setLocalValue(+value)
    }
    let maxCounter = (e: ChangeEvent<HTMLInputElement>) => {
        let value = e.currentTarget.value
        dispatch(maxValueAC(+value))

        setDisabled(false)
    }
    let buttonClick = () => {
        dispatch(setStartCountAC())

        setDisabled(true)
    }

    return (
        <div>
            <input placeholder={'start count'} onChange={startCounter}/>
            <input placeholder={'max count'} onChange={maxCounter}/>
            <button disabled={disabled} onClick={buttonClick}>set</button>
        </div>
    )
}


export default StartCount
