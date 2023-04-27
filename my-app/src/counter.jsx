import './App.css';
import React, { useState } from 'react';

let Counter = function(){
    let [count, setCount] = useState('0');

    let increment = function(){
        setCount(++count)
        }

    let decrement = function(){
        setCount(--count)
    }

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={() => increment()}>Add</button>
            <button onClick={() => decrement()}>Subtract</button>
        </div>
    )
}

export default Counter;
