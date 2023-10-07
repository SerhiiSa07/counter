import React, {useState} from 'react';
import './App.css';



const initialCounters = [
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
]

function App2 () {

    const maxNumber = 5;
    let [count, setCount] = useState(initialCounters);
    const [status, setStatus] = useState<boolean>(false)

/*    const [editMode, setEditMode] = useState<boolean>(false)*/

    const onClickInc = (id: number) => {
        const updatedCounts = count.map(el => el.id === id ? {...el, value: el.value + 1} : el)
        setCount(updatedCounts)
    }
    function onClickReset () {
        /*setCount(0)
        setStatus(false)*/
    }

    function errorMin () {

    }

    function errorMax () {

    }

    function onClickSave (){

    }

    return(

        <div className="App">
            {count.map(el => (
                <li key={el.id}>
                    <button onClick={() => onClickInc(el.id)}>Inc</button>
                        {el.value}
                    <button onClick={onClickReset}>Reset</button>
                        {el.value}
                </li>
            ))}
        </div>

    )
}

export default App2;
