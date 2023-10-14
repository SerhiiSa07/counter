import React from "react";
import style from "./Counter2.module.css";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../store/store";
import {CounterStateType, setCountValueAC, setStatusAC} from "../../reducer/counter-reducer";
import {Settings2} from "../interface/Settings2";
import {Button2} from "../interface/Button2";
import {Display} from "../interface/Display";

export const Counter2 = () => {

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
                <Settings2/>
                <div className={style.buttonsBlock}>
                    <div>
                        <Button2 title={'save'} className={style.button}
                                 disabled={minCount >= maxCount || minCount < 0 || !setStatus}
                                 callback={onClickSave}
                        />
                    </div>
                </div>
            </div>
            <div className={style.counter}>
                <Display />
                <div className={style.buttonsBlock}>
                    <div>
                        <Button2 title={'inc'}
                                 className={style.button}
                                 disabled={count === maxCount || setStatus}
                                 callback={onClickInc}
                        />
                    </div>
                    <div>
                        <Button2 title={'reset'}
                                 className={style.button}
                                 disabled={count === minCount || setStatus}
                                 callback={onClickReset}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}