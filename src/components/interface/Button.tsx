import React from "react";
import b from "./Button.module.css"

type OwnPropertyType = {
    count: number
    onClickInc: () => void
    onClickReset: () => void
    status: boolean
    maxNumber: number

}

export function Button (props: OwnPropertyType) {

    return(
        <div className={b.titleButton}>

            <button className={b.customBtn} disabled={props.count === props.maxNumber} onClick={props.onClickInc}>inc</button>

                <button className={b.customL} disabled={props.count === 0} onClick={props.onClickReset}>reset</button>
        </div>
    )


}