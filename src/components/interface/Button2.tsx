import React from "react";
import b from "./Button.module.css"

type OwnPropertyType = {
    count: number
    onClickInc: () => void
    onClickReset: () => void
    status: boolean
    maxNumber: number
    onClickSave: () => void
    minValue: number
    maxValue: number
    setStatus: boolean
}

export function Button2 (props: OwnPropertyType) {

    return(
        <div className={b.titleButton}>
            <button className={b.customBtn} disabled={props.count === props.maxNumber} onClick={props.onClickInc}>inc</button>
            <button className={b.customL} disabled={props.count === 0} onClick={props.onClickReset}>reset</button>
            <button className={b.customSave} disabled={props.minValue >= props.maxValue || props.minValue < 0 || !props.setStatus} onClick={props.onClickSave}>save</button>
        </div>
    )
}