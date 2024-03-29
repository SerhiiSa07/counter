import {combineReducers, createStore} from 'redux';
import {counterReducer} from '../reducer/counter-reducer';
import {loadState, saveState} from '../localstorage/localstorage';


const rootReducer = combineReducers({
    counter: counterReducer
})

export const store = createStore(rootReducer, loadState())

store.subscribe(() => {
    saveState({
        counter: store.getState().counter
    });
    localStorage.setItem('app-state', JSON.stringify(store.getState()))
})

export type AppStateType = ReturnType<typeof rootReducer>
export type AppStoreType = typeof store