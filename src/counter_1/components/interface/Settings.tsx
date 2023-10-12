import React, {ChangeEvent} from "react";
import st from "./Setting.module.css";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../store/store";
import {CounterStateType, maxCountAC, minCountAC, setStatusAC} from "../../reducer/counter-reducer";

export const Settings = () => {

    const {minCount, maxCount} = useSelector<AppStateType, CounterStateType>(state => state.counter)
    const dispatch = useDispatch()

    const onChangeMaxCountHandler = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(setStatusAC(true))
        dispatch(maxCountAC(+e.currentTarget.value))
    }
    const onChangeMinCountHandler = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(setStatusAC(true))
        dispatch(minCountAC(+e.currentTarget.value))
    }

    return(
        <div className={st.wrapper}>
            <div className={st.settingsBlockInput}>
                <span>Max number:</span>
                <input className={(minCount >= maxCount) || maxCount < 0 ? st.errorInput : st.defaultInput}
                       onChange={onChangeMaxCountHandler}
                       type={"number"}
                       value={maxCount}
                />
            </div>
            <div className={st.settingsBlockInput}>
                <span>Min number:</span>
                <input
                    className={(minCount >= maxCount) || minCount < 0 || maxCount < 0 ? st.errorInput : st.defaultInput}
                    onChange={onChangeMinCountHandler}
                    type={"number"}
                    value={minCount}
                />
            </div>
        </div>
    )
}