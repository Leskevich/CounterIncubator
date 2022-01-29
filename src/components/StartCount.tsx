import React, {ChangeEvent, useCallback} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {disabledAC, initialStateType, maxValueAC, setStartCountAC, startValueAC} from "../store/courReduse";
import {AppRootStateType} from "../store/store";
import s from './Count.module.css'

const StartCount = () => {
//state
    const dispatch = useDispatch()
    const {startCount, maxCount, disabled} = useSelector<AppRootStateType, initialStateType>((state) => state.count)
//function
    const startCounter = (e: ChangeEvent<HTMLInputElement>) => {
        let value = e.currentTarget.value
        dispatch(startValueAC(+value))
        dispatch(disabledAC(false))
    }
    const maxCounter = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.currentTarget.value
        dispatch(maxValueAC(+value))
        dispatch(disabledAC(false))
    }
    const buttonClick = () => {
        dispatch(setStartCountAC())
        dispatch(disabledAC(true))
    }
    const isStartEqMax = startCount === maxCount
    const isStartLessZero = startCount < 0;
    const isMaxLessStart = startCount >= maxCount
    const isMaxLessZero = maxCount < 0
    const isButtonDisabled = isStartEqMax || disabled || isStartLessZero || isMaxLessZero

    const getInputStyle = (isError: boolean) => isError ? s.inputError : s.input
    const startInputClassName = getInputStyle(isStartEqMax || isStartLessZero)
    const maxInputClassName = getInputStyle(isMaxLessStart)

    return (
        <div>
            <span> start </span>
            <input className={startInputClassName} type={"number"} value={startCount} onChange={startCounter}/>
            <span> max </span>
            <input className={maxInputClassName} type={"number"} value={maxCount} onChange={maxCounter}/>
            <button disabled={isButtonDisabled} onClick={buttonClick}>set</button>
        </div>
    )
}
export default StartCount
