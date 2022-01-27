import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../store/store";
import {incAC, initialStateType, resAC} from "../store/courReduse";

type countP = {
    count: number
    inc: () => void
    res: () => void
    maxCount: number
    startCount: number
    disabled: boolean
}


const Count = ({res, maxCount, startCount, disabled}: countP) => {
    let stateCount = useSelector<AppRootStateType, initialStateType>((state) => state.count)
    let dispatch = useDispatch()
    let incCount = () => dispatch(incAC())
    let resCount = () => dispatch(resAC())


    return (
        <div>
            <div>
                {stateCount.count}
            </div>

            <button onClick={incCount} disabled={stateCount.count === stateCount.maxCount || !disabled}>inc</button>
            <button onClick={resCount} disabled={stateCount.count === stateCount.startCount || !disabled}>res</button>
        </div>
    )


}
export default Count