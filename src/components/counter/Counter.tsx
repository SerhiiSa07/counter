import React from "react";
import style from "./Counter.module.css";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../store/store";
import {CounterStateType, setCountValueAC, setStatusAC} from "../../store/counter-reducer";
import {Settings} from "../interface/Settings";
import {Button} from "../interface/Button";
import {Display} from "../interface/Display";



export function Counter () {

    const {minCount, maxCount, count, setStatus} = useSelector<AppStateType, CounterStateType>(state => state.counter)
    const dispatch = useDispatch()
    const onClickInc = () => {
        dispatch(setCountValueAC(count + 1))
    }

    const onClickReset = () => {
        dispatch(setCountValueAC(minCount))
    }

    const onClickSave = () => {
        dispatch(setCountValueAC(minCount))
        dispatch(setStatusAC(false))
    }

    return(
        <div className={style.wrapper}>
            <div className={style.counter}>
                <Settings/>
                <div className={style.buttonsBlock}>
                    <div>
                        <Button title={'save'} className={style.button}
                                disabled={count >= minCount || minCount < 0 || !setStatus}
                                callback={onClickSave}
                        />
                    </div>
                </div>
            </div>
            <div className={style.counter}>wrapper
                <Display/>
                <div className={style.buttonsBlock}>
                    <div>
                        <Button title={'inc'} className={style.button} disabled={count === maxCount || setStatus}
                                callback={onClickInc}
                        />
                    </div>
                </div>
                <div>
                    <Button title={'reset'} className={style.button} disabled={count === maxCount || setStatus}
                            callback={onClickReset}
                    />
                </div>
            </div>
        </div>
    )
}

