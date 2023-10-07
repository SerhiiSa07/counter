import React, {useState} from 'react';
import './App.css';



/*const initialCounters = [
    {
        id: 123,
        value: 0
    },
    {
        id: 234,
        value: 110
    },
    {
        id: 1111,
        value: -50
    }
]*/

function App2 () {

    const maxNumber = 5;
    let [count, setCount] = React.useState(0);
    const [status, setStatus] = useState<boolean>(false)

/*    const [editMode, setEditMode] = useState<boolean>(false)*/


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

    }

    function onClickSave (){

    }

    function showInput(event: any) {
        setCount(event.target.value)
    }

    let numberInput = React.createRef<HTMLInputElement>();

    return(

        <div className="App">

            <h2>
                Count:
            </h2>
            <h1>
                {count}
            </h1>
            <div>
                Max number:{" "}
                <input type="number" />
            </div>
            <div>
                Min number:{" "}
                <input type="number" onInput={showInput} ref={numberInput}/>
            </div>
            <div>
                <button onClick={onClickInc}>Inc</button>
                <button onClick={onClickReset}>Reset</button>
            </div>
            <div>
                <button onClick={showInput}>Save</button>
            </div>
        </div>

    )
}

export default App2;
