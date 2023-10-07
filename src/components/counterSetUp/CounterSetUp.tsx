import React, {ChangeEvent, useState} from 'react';
import m from "./CounterSetUp.module.css";


type FullInputPropsType ={
    onClickSave: (startValue: string) => void

}

export function CounterSetUp (props: FullInputPropsType) {

    const [startValue, setStartValue] = useState('')

    const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setStartValue(event.currentTarget.value)
    }


    const onclickButtonHandler = () => {
        props.onClickSave(startValue)
        setStartValue('')
    }

    return(
        <div className={m.box_size}>
            <div className={m.box_flex}>
                <span>max number: </span>
                <input type="number" />
            </div>
            <div>
                <span>min number: </span>
                <input type="number" onChange={onChangeInputHandler}/>
            </div>
            <div>
                <button onClick={onclickButtonHandler}>save</button>
            </div>
        </div>
    )

}