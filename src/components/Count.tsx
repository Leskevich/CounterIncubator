import React from 'react';

type countP = {
    count: number
    inc: () => void
    res: () => void
}


const Count = ({count, inc, res}: countP) => {
    return (
        <div>
            <div>
                {count}
            </div>
            <button onClick={inc}>inc</button>
            <button onClick={res}>res</button>
        </div>
    )


}
export default Count