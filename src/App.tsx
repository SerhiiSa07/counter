import React from 'react';
import './App.css';
import {Counter2} from "./counter_2/components/counter/Counter2";
import {Counter} from "./counter_1/components/counter/Counter";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "./bll/store";
import {incValueAC, incValuesTC} from "./bll/counter-reducer";

function App() {

    const value = useSelector<AppStateType, number>( state => state.counter.value)
    const dispatch = useDispatch()

    const incHandler = () => {
    dispatch(incValuesTC(value))
    }

    return (
        <div className='App'>
            <h1>{value}</h1>
            <button onClick={incHandler}>inc</button>

            {/*<Counter/>*/}
            {/*<Counter2/>*/}
        </div>
    );
}

export default App;