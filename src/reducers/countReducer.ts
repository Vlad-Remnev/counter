type countType = number

const initialState = 0

export const countReducer = (state: countType = initialState, action: CountReducerTypes): countType => {
    switch (action.type) {
        case "ADD-VALUE":
            return state = action.payload
        case "PLUS-VALUE":
            return state += action.payload
        default: return state
    }
}

export type CountReducerTypes = addValueActionType | plusValueActionType

export type addValueActionType = ReturnType<typeof addValueAC>
export const addValueAC = (value: number) => {
    return {
        type: 'ADD-VALUE',
        payload: value
    } as const
}

export type plusValueActionType = ReturnType<typeof plusValueAC>
export const plusValueAC = (value: number) => {
    return {
        type: 'PLUS-VALUE',
        payload: value
    } as const
}