import React, {ChangeEvent} from "react";
import style from "../counter/Counter.module.css";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../store/store";
import {CounterStateType, maxCountAC, setStatusAC} from "../../store/counter-reducer";

export function Settings () {

    const {minCount, maxCount} = useSelector<AppStateType, CounterStateType>(state => state.counter)
    const dispatch = useDispatch()

    const onChangeMaxCountHandler = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(setStatusAC(true))
        dispatch(maxCountAC(+e.currentTarget.value))
    }
    const onChangeMinCountHandler = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(setStatusAC(true))
        dispatch(maxCountAC(+e.currentTarget.value))
    }


    return(
        <div className={style.wrapper}>
            <div>
                <span>Max number:</span>
                <input className={(minCount >= maxCount) || maxCount < 0 ? style.errorInput : style.defaultInput}
                       onChange={onChangeMaxCountHandler}
                       type="number"
                       value={maxCount}
                       id={'inputID1'}
                />
            </div>
            <div>
                <span>Min number:</span>
                <input
                    className={(minCount >= maxCount) || minCount < 0 || maxCount < 0 ? style.errorInput : style.defaultInput}
                    onChange={onChangeMinCountHandler}
                    type="number"
                    id={'inputID2'}
                />
            </div>
        </div>
    )
}