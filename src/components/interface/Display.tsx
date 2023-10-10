import React from 'react';
import s from "../interface/Display.module.css"
import {useSelector} from "react-redux";
import {AppStateType} from "../../store/store";
import {CounterStateType} from "../../store/counter-reducer";



export const Display= () => {
    const {minCount, maxCount, count, setStatus} = useSelector<AppStateType, CounterStateType>(state => state.counter)

    const scoreboardClassname = count === maxCount ? `${s.counterBoard} ${s.red}` : `${s.counterBoard}`

    return (
        <>
            {setStatus
                ?
                <div
                    className={minCount < 0 || maxCount < 0 || minCount === maxCount || minCount > maxCount
                        ? `${s.counterBoard} ${s.textError}`
                        : `${s.counterBoard} ${s.text}`}>
                    {minCount < 0 || maxCount < 0 || minCount === maxCount || minCount > maxCount
                        ? `Incorrect value!`
                        : `enter values and press 'set'`}
                </div>
                : <div className={scoreboardClassname}>
                    {count}
                </div>}
        </>
    );
};