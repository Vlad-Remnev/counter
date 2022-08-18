type countType = number

const initialState = 0

export const maxCountReducer = (state: countType = initialState, action: AddValueActionType) => {
    switch (action.type) {
        case "ADD-MAX-VALUE":
            return state = action.payload
        default: return state
    }
}

export type AddValueActionType = ReturnType<typeof addMaxValueAC>
export const addMaxValueAC = (value: number) => {
    return {
        type: 'ADD-MAX-VALUE',
        payload: value
    } as const
}