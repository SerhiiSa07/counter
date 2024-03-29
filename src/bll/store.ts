import {applyMiddleware, combineReducers, createStore} from "redux";
import {counterReducer} from "./counter-reducer";
import thunk from "redux-thunk";
import {loadState, saveState} from "../utils/localstorage-utils";

const rootReducer = combineReducers({
    counter: counterReducer
})

export const store = createStore(rootReducer, loadState(), applyMiddleware(thunk), )

store.subscribe(() => {
    saveState({
        counter: store.getState().counter
    });
});

/*const persistedTodosString = localStorage.getItem('app-state')
if (persistedTodosString) {
    preloadedState = JSON.parse(persistedTodosString)
}*/



store.subscribe(() => {
    saveState({
        counter: store.getState().counter
    })
 /*localStorage.setItem('app-state', JSON.stringify(store.getState()))*/
})




export type AppStateType = ReturnType<typeof rootReducer>
export type AppStoreType = typeof store