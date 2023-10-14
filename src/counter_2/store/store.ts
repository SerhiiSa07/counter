import {getLocalStorage, setToLocalStorage} from "../localstorage/localStorage";
import {combineReducers, createStore} from "redux";
import {counterReducer} from "../reducer/counter-reducer";

const rootReducer = combineReducers({
    counter: counterReducer
})

export const store = createStore(rootReducer, getLocalStorage())

store.subscribe(() => {
    setToLocalStorage({
        counter: store.getState().counter
    });
    localStorage.setItem('app-state', JSON.stringify(store.getState()))
})

export type AppStateType = ReturnType<typeof rootReducer>
export type AppStoreType = typeof store