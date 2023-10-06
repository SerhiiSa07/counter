import React from "react";
import style from "./Counter2.module.css";

type PropsType = {
    count: number
    onClickInc: () => void
    onClickReset: () => void
    status: boolean
    maxNumber: number

}

export function Counter2 (props: PropsType) {

    return(
            <div className={style.titleCounter}>
            <h1 className={props.status ? style.active : style.counter }>{props.count}</h1>
            </div>
    )

}

