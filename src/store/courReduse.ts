const localStartState = Number(localStorage.getItem('START_COUNT'))
const maxStartState = Number(localStorage.getItem('MAX-COUNT'))
const initialState:initialStateType = {
    count: localStartState,
    startCount: localStartState,
    maxCount: maxStartState,
    disabled: true,
    error:true
}

function setToLocalStorage(key: string, value: number) {
    localStorage.setItem(key, JSON.stringify(value))
}

export const CountReduser = (state: initialStateType = initialState, action: actionType): initialStateType => {

    switch (action.type) {
        case "INC":
            return {...state, count: state.count + 1}
        case "RES":
            return {...state, count: state.startCount}
        case "MAX-COUNT":
            return {...state, maxCount: action.value}
        case "START-COUNT":
            return {...state, startCount: action.value}
        case "SET-START-COUNT":
            setToLocalStorage('MAX-COUNT', state.maxCount);
            setToLocalStorage('START_COUNT', state.startCount);
            return {...state, count: state.startCount}
        case "DISABLED":
            return {...state, disabled: action.disabledValue}
        default:
            return state
    }
}

//action
export const incAC = () => ({type: "INC"} as const)
export const resAC = () => ({type: "RES"} as const)
export const startValueAC = (value: number) => ({type: "START-COUNT", value} as const)
export const maxValueAC = (value: number) => ({type: "MAX-COUNT", value} as const)
export const setStartCountAC = () => ({type: "SET-START-COUNT"} as const)
export const disabledAC = (disabledValue: boolean) => ({type: "DISABLED", disabledValue} as const)
//StateType
export type initialStateType = {
    count: number
    startCount: number
    maxCount: number
    disabled: boolean
    error:boolean
}
//action type
type actionType = incType
    | resType
    | startCountType
    | maxCountType
    | setStartCountType
    | disabledType
type disabledType = ReturnType<typeof disabledAC>
type incType = ReturnType<typeof incAC>
type resType = ReturnType<typeof resAC>
type startCountType = ReturnType<typeof startValueAC>
type maxCountType = ReturnType<typeof maxValueAC>
type setStartCountType = ReturnType<typeof setStartCountAC>




