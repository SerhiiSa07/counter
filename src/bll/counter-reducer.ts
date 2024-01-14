const initialState = {
    value: 125
}

export const counterReducer = (state:InitialStateType = initialState, action: ActionType): InitialStateType => {
    switch (action.type) {
        case 'INC-VALUE':
            return {...state, value: state.value + 1}
        case 'SET-VALUE-FROM-LOCAL-STORAGE':
            return {
                ...state, value: action.value
            }
        default:
            return state
    }

}

export const incValueAC = () => ({type: 'INC-VALUE'} as const)
export const setValueFromLocalStorageAC = (value: number) => ({type: 'SET-VALUE-FROM-LOCAL-STORAGE', value} as const)


type InitialStateType = typeof initialState

export type IncValuesActionType = ReturnType<typeof incValueAC>
export type setValueFromLocalStorageActionStorage = ReturnType<typeof setValueFromLocalStorageAC>
type ActionType = IncValuesActionType | setValueFromLocalStorageActionStorage