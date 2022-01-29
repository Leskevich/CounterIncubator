import React, {useCallback} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../store/store";
import {incAC, initialStateType, resAC} from "../store/courReduse";
import s from './Count.module.css'

const Count = () => {
    const {
        startCount,
        maxCount,
        count,
        disabled
    } = useSelector<AppRootStateType, initialStateType>((state) => state.count)
    const dispatch = useDispatch()
    const incCount = () => dispatch(incAC())
    const resCount = () => dispatch(resAC())

    const isStartEqMax = startCount === maxCount
    const isStartLessZero = startCount < 0;
    const isMaxLessStart = startCount >= maxCount
    const isMaxLessZero = maxCount < 0
    const isCountEqMax = count === maxCount
    const isCountEqStart = count === startCount
    const errorCount = isStartEqMax || isMaxLessStart || isStartLessZero || isMaxLessZero || isCountEqMax

    return (
        <div>
            <div className={errorCount? s.countError : s.count}>
                {isStartLessZero || isMaxLessZero ? ' >=0' : isMaxLessStart ? 'max должент быть больше' : count}
            </div>
            <button onClick={incCount} disabled={isCountEqMax || !disabled}>
                inc
            </button>
            <button onClick={resCount} disabled={isCountEqStart || !disabled}>
                res
            </button>
        </div>
    )
}
export default Count