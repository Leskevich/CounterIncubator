import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../store/store";
import {incAC, initialStateType, resAC} from "../store/courReduse";
import s from './Count.module.css'

const Count = () => {
    const stateCount = useSelector<AppRootStateType, initialStateType>((state) => state.count)
    const dispatch = useDispatch()
    const incCount = () => dispatch(incAC())
    const resCount = () => dispatch(resAC())

    let errorCount = stateCount.startCount === stateCount.maxCount
    || stateCount.startCount >= stateCount.maxCount
    || stateCount.startCount < 0
    || stateCount.maxCount < 0
    || stateCount.count === stateCount.maxCount
        ? s.countError : s.count

    return (
        <div>
            <div className={errorCount}>
                {
                    stateCount.startCount < 0 || stateCount.maxCount < 0
                        ? ' >=0' : stateCount.startCount >= stateCount.maxCount
                            ? 'max должент быть больше' : stateCount.count
                }
            </div>
            <button onClick={incCount} disabled={stateCount.count === stateCount.maxCount || !stateCount.disabled}>
                inc
            </button>
            <button onClick={resCount} disabled={stateCount.count === stateCount.startCount || !stateCount.disabled}>
                res
            </button>
        </div>
    )
}
export default Count