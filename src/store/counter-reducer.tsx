
const initialState = {
    minValue: 0,
    maxValue: 5,
    count: 0,
    isStatus: true,
}

export type CounterStateType = {
    minValue: number,
    maxValue: number,
    count: number,
    isStatus: boolean,
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
                ...state, minValue: state.minValue
            }
        }
        case 'SET-MIN-VALUE': {
            return {
                ...state, minValue: action.minValue
            }
        }
        case 'SET-MAX-VALUE': {
            return {
                ...state, maxValue: action.maxValue
            }
        }
        case 'SET-COUNT-VALUE': {
            return {
                ...state, count: action.count
            }
        }
        case 'SET-STATUS-VALUE': {
            return {
                ...state, isStatus: action.isStatus
            }
        }
        default:
            return state
    }
}

type ActionType =
    ReturnType<typeof incValueAC>
    | ReturnType<typeof resetValueAC>
    | ReturnType<typeof setMinValueAC>
    | ReturnType<typeof setMaxValueAC>
    | ReturnType<typeof isStatusAC>
    | ReturnType<typeof setCountValueAC>

export const incValueAC = () => ({type: 'INC-VALUE'}) as const
export const resetValueAC = () => ({type: 'RESET-VALUE'}) as const
export const setMinValueAC = (minValue: number) => ({type: 'SET-MIN-VALUE', minValue}) as const
export const setMaxValueAC = (maxValue: number) => ({type: 'SET-MAX-VALUE', maxValue}) as const
export const setCountValueAC = (count: number) => ({type: 'SET-COUNT-VALUE', count}) as const
export const isStatusAC = (isStatus: boolean) => ({type: 'SET-STATUS-VALUE', isStatus}) as const