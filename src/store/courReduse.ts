export type initialStateType = {
    count: number
    startCount: number
    maxCount: number
}
let initialState = {
    count: 0,
    startCount: 1,
    maxCount: 0,
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
            return {...state,count:state.startCount}
        default:
            return state
    }

}
//action
type actionType = incType
    | resType
    | startCountType
    | maxCountType
    | setStartCountType

export const incAC = () => ({type: "INC"} as const)
type incType = ReturnType<typeof incAC>
export const resAC = () => ({type: "RES"} as const)
type resType = ReturnType<typeof resAC>

export const startValueAC = (value: number) => ({type: "START-COUNT", value} as const)
type startCountType = ReturnType<typeof startValueAC>

export const maxValueAC = (value: number) => ({type: "MAX-COUNT", value} as const)
type maxCountType = ReturnType<typeof maxValueAC>

export const setStartCountAC = () => ({type: "SET-START-COUNT"}as const)
type setStartCountType = ReturnType<typeof setStartCountAC>