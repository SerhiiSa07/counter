import React, { useRef, useState} from "react";
import style from "./Counter2.module.css";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../store/store";
import {CounterStateType} from "../../store/counter-reducer";

export function Counter2() {

    const maxNumber = 5;

    let minNumberInput = useRef<HTMLInputElement>(null);
    let maxNumberInput = useRef<HTMLInputElement>(null);

    let [count, setCount] = useState(0)
    const [status, setStatus] = useState<boolean>(false)

    let {minValue, maxValue} = useSelector<AppStateType, CounterStateType>(state => state.counter)
    const dispatch = useDispatch()

    function onClickInc() {
        if (count < maxNumber) {
            setCount(count + 1)
        }
        if (count === 4) {
            setStatus(true)
        }
    }

    function onClickReset() {
        setCount(0)
        setStatus(false)
    }

    const onClickSave = () => {
        const el =
            minNumberInput.current as HTMLInputElement;

        setCount(el.valueAsNumber)
    }

    /*    const onChangeMaxValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
            dispatch(isStatusAC(true))
            dispatch(setMaxValueAC(+e.currentTarget.value))
        }
        const onChangeStartValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
            dispatch(isStatusAC(true))
            dispatch(setMinValueAC(+e.currentTarget.value))
        }*/

    return (
        <div className={style.wrapper}>
            <h2>
                Count:
            </h2>
            <h1>
                {count}
            </h1>
            <div>
                Max number:
                <br/>
                <input className={(minValue >= maxValue) || maxValue < 0 ? style.errorInput : style.defaultInput}
                       type="number"
                       ref={maxNumberInput}
                       value={maxValue}
                />
            </div>
            <div>
                Min number:
                <div>
                    <input
                        className={(minValue >= maxValue) || minValue < 0 || maxValue < 0 ? style.errorInput : style.defaultInput}
                        type="number" ref={minNumberInput} id={'inputID5'}
                    />
                </div>
                <br/>
            </div>
            <div>
                <button onClick={onClickInc}>Inc</button>
                <button onClick={onClickReset}>Reset</button>
            </div>
            <div>
                <button onClick={onClickSave}>Save</button>
            </div>
        </div>
    )
}

