import React from "react";
import m from "./CounterSetUp.module.css";

type PropsType = {
    count: number
    onClickInc: () => void
    onClickReset: () => void
    status: boolean
    maxNumber: number

}

export function CounterSetUp (props: PropsType) {

    return(
        <div className={m.box_size}>
            <div className={m.box_flex}>
                <span>max number: </span>
                <input type="number"/>
            </div>
            <div>
                <span>min number: </span>
                <input type="number"/>
            </div>
            <div>
                <button>save</button>
            </div>
        </div>
    )

}