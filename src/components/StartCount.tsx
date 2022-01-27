import React, {ChangeEvent} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {disabledAC, initialStateType, maxValueAC, setStartCountAC, startValueAC} from "../store/courReduse";
import {AppRootStateType} from "../store/store";
import s from './Count.module.css'

const StartCount = () => {
//state
    const dispatch = useDispatch()
    const stateCount = useSelector<AppRootStateType, initialStateType>((state) => state.count)

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
    let ErrorClassStartCount = stateCount.startCount === stateCount.maxCount
        || stateCount.startCount<0
        ? s.inputError : s.input
    let ErrorClassMaxCount = stateCount.startCount >= stateCount.maxCount
        ? s.inputError : s.input

    return (
        <div>
            start
            <input className={ErrorClassStartCount} type={"number"} value={stateCount.startCount} onChange={startCounter}/>
            max
            <input className={ErrorClassMaxCount} type={"number"} value={stateCount.maxCount} onChange={maxCounter}/>
            <button
                disabled={stateCount.disabled ||
                    stateCount.startCount < 0 ||
                    stateCount.maxCount < 0 ||
                    stateCount.startCount === stateCount.maxCount}
                onClick={buttonClick}>set
            </button>
        </div>
    )
}
export default StartCount
