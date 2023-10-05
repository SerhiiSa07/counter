import React, {useState} from 'react';
import './App.css';
import {Counter} from "./components/counter/Counter";
import {Button} from "./components/interface/Button";


function App () {

    const maxNumber = 5;
    let [count, setCount] = useState(0)
    let [maxValue, setMaxValue] = useState(5)
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

    return(

        <div className="App">
            <Counter count={count} onClickInc={onClickInc} onClickReset={onClickReset} status={status} maxNumber={maxNumber}/>
            <Button count={count} onClickInc={onClickInc} onClickReset={onClickReset} status={status}  maxNumber={maxNumber}/>
        </div>

    )
}

export default App;
