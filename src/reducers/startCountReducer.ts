type countType = number

const initialState = 0

export const startCountReducer = (state: countType = initialState, action: AddValueActionType) => {
    switch (action.type) {
        case "ADD-START-VALUE":
            return state = action.payload
        default: return state
    }
}

export type AddValueActionType = ReturnType<typeof addStartValueAC>
export const addStartValueAC = (value: number) => {
    return {
        type: 'ADD-START-VALUE',
        payload: value
    } as const
}