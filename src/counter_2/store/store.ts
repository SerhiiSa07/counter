import {getLocalStorage, setToLocalStorage} from "../localstorage/localStorage";
import {combineReducers, createStore} from "redux";
import {counterReducer} from "../reducer/counter-reducer";

const rootReducer = combineReducers({
    counter: counterReducer
})

export const store2 = createStore(rootReducer, getLocalStorage())

store2.subscribe(() => {
    setToLocalStorage({
        counter: store2.getState().counter
    });
    localStorage.setItem('app-state', JSON.stringify(store2.getState()))
})

export type AppStateType = ReturnType<typeof rootReducer>
export type AppStoreType = typeof store2