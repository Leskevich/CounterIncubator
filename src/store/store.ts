import {combineReducers, createStore} from "redux";
import {CountReduser} from "./courReduse";

const rootReducer = combineReducers({
    count:CountReduser
})

export const store = createStore(rootReducer)


export type AppRootStateType = ReturnType<typeof rootReducer>