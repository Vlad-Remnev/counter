import {combineReducers, legacy_createStore as createStore} from "redux";
import {countReducer} from "../reducers/countReducer";
import {maxCountReducer} from "../reducers/maxCountReducer";
import {startCountReducer} from "../reducers/startCountReducer";
import {loadState, saveState} from "../components/localStorage";

const rootReducer = combineReducers({
    count: countReducer,
    maxCount: maxCountReducer,
    startCount: startCountReducer
})

export type AppRootReducer = ReturnType<typeof rootReducer>

const persistedState = loadState()
export const store = createStore(
    rootReducer,
    persistedState
)

store.subscribe(() => {
    saveState({
        maxCount: store.getState().maxCount,
        startCount: store.getState().startCount,
        count: store.getState().count
    })
})

// @ts-ignore
window.store = store