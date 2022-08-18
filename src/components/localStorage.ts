import {AppRootReducer} from "../store/store";

export const loadState = () => {
    try {
        const serializedState = localStorage.getItem('countValue')
        if (serializedState === null) {
            return undefined
        }
        return JSON.parse(serializedState)
    } catch (err) {
        return undefined
    }
}

// export const saveState = (count: number) => {
//     try {
//         const serializedState = JSON.stringify(count)
//         localStorage.setItem('countValue', serializedState)
//     } catch (err) {
//         return undefined
//     }
// }


export const saveState = (state: AppRootReducer) => {
    try {
        const serializedState = JSON.stringify(state)
        localStorage.setItem('countValue', serializedState)
    } catch (err) {
        return undefined
    }
}