import {AppStateType} from "../store/store";

export const getLocalStorage = () => {
    try {
        const getFromLocalStorageHandler = localStorage.getItem('setCounter');
        if (getFromLocalStorageHandler === null) {
            return undefined;
        }
        return JSON.parse(getFromLocalStorageHandler);
    } catch (err) {
        return undefined;
    }
};

export const setToLocalStorage = (state: AppStateType) => {
    try {
        const setToLocalStorageHandler = JSON.stringify(state);
        localStorage.setItem('setCounter', setToLocalStorageHandler);
    } catch {
        // ignore write errors
    }
};