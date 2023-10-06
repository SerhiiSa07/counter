import React from "react";
import b from "./Button2.module.css"

type OwnPropertyType = {
    count: number
    onClickInc: () => void
    onClickReset: () => void
    status: boolean
    maxNumber: number

}

export function Button2 (props: OwnPropertyType) {

    return(
        <div className={b.titleButton}>
                <div>
                    <button className={b.customBtn} disabled={props.count === props.maxNumber}
                            onClick={props.onClickInc}>inc
                    </button>
                </div>
                <div>
                    <button className={b.customL} disabled={props.count === 0} onClick={props.onClickReset}>reset
                    </button>
                </div>
        </div>
    )
}