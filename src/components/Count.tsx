import React from 'react';

type countP = {
    count: number
    inc: () => void
    res: () => void
    maxCount: number
    startCount:number
    disabled:boolean
}


const Count = ({count, inc, res, maxCount,startCount,disabled}: countP) => {
    return (
        <div>
            <div>
                {count}
            </div>
            <button onClick={inc} disabled={count === maxCount || !disabled}>inc</button>
            <button onClick={res} disabled={count===startCount || !disabled}>res</button>
        </div>
    )


}
export default Count