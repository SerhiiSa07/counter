import React from 'react';
import './App.css';
import {Counter2} from "./counter_2/components/counter/Counter2";
import {Counter} from "./counter_1/components/counter/Counter";

function App() {
    return (
        <div className='App'>
            {/*<Counter/>*/}
            <Counter2/>
        </div>
    );
}

export default App;