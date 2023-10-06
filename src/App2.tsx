import React, {useState} from 'react';
import './App.css';
import {Counter} from "./components/counter/Counter";
import {Button} from "./components/interface/Button";
import {Counter2} from "./components/counter/Counter2";
import {Button2} from "./components/interface/Button2";
import {CounterSetUp} from "./components/counterSetUp/CounterSetUp";
import d from "./app.module.css"

function App2 () {

    const maxNumber = 5;
    let [count, setCount] = useState(0)
    const [status, setStatus] = useState<boolean>(false)
    let [maxValue, setMaxValue] = useState(1000)
    let [startValue, setStartValue] = useState(0)
    const [disable, setDisable] = useState<boolean>(false)

    const [editMode, setEditMode] = useState<boolean>(false)

    function onClickInc () {
        if (count < maxNumber) {
            setCount(count + 1 )
        }
        if (count === 4) {
            setStatus(true)
        }
    }

    function onClickReset () {
        setCount(0)
        setStatus(false)
    }

    function errorMin () {

    }

    function errorMax () {
        setMaxValue(0)
        setStatus(true)
    }

    function onClickSave (){

    }

    return(

        <div className="App">
            <div className={d.background}>
            <Counter2 count={count} onClickInc={onClickInc} onClickReset={onClickReset} status={status} maxNumber={maxNumber}/>
            <Button2 count={count} onClickInc={onClickInc} onClickReset={onClickReset} status={status}  maxNumber={maxNumber}/>
            </div>
            <CounterSetUp count={count} onClickInc={onClickInc} onClickReset={onClickReset} status={status} maxNumber={maxNumber}/>
        </div>

    )
}

export default App2;
