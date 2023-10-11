
const initialState = {
    minCount: 0,
    maxCount: 5,
    count: 0,
    setStatus: true
}

export type CounterStateType = {
    minCount: number,
    maxCount: number,
    count: number,
    setStatus: boolean,
}



export const counterReducer = (state: CounterStateType = initialState, action: ActionType): CounterStateType => {
    switch (action.type) {
        case 'INC-VALUE': {
            return {
                ...state, count: state.count + 1
            }
        }
        case 'RESET-VALUE': {
            return {
                ...state, minCount: state.minCount
            }
        }
        case 'MIN-COUNT': {
            return {
                ...state, minCount: action.minCount
            }
        }
        case 'MAX-COUNT': {
            return {
                ...state, maxCount: action.maxCount
            }
        }
        case 'SET-COUNT-VALUE': {
            return {
                ...state, count: action.count
            }
        }
        case 'SET-STATUS': {
            return {
                ...state, setStatus: action.setStatus
            }
        }
        default:
            return state
    }
}

type ActionType =
    ReturnType<typeof incValueAC>
    | ReturnType<typeof resetValueAC>
    | ReturnType<typeof minCountAC>
    | ReturnType<typeof maxCountAC>
    | ReturnType<typeof setStatusAC>
    | ReturnType<typeof setCountValueAC>

export const incValueAC = () => ({type: 'INC-VALUE'}) as const
export const resetValueAC = () => ({type: 'RESET-VALUE'}) as const
export const minCountAC = (minCount: number) => ({type: 'MIN-COUNT', minCount}) as const
export const maxCountAC = (maxCount: number) => ({type: 'MAX-COUNT', maxCount}) as const
export const setCountValueAC = (count: number) => ({type: 'SET-COUNT-VALUE', count}) as const
export const setStatusAC = (setStatus: boolean) => ({type: 'SET-STATUS', setStatus}) as const