
// Redux Steps 5: get data from Store by `useSelector`, and send/ dispatch actions using `useDispatch`.
// create a `Counter.tsx` with <Counter> Component inside. then import to `App`.


import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, changeByAmount} from './counterSlice'


import styles from './Counter.module.css'
import { useState } from 'react';
// import {
//     decrement,
//     increment,
//     incrementByAmount,
//     incrementAsync,
//     selectCount,
// } from './counterSlice';


export const  Counter = () => {
    const count = useSelector((state:any) => state.counter.value);
    const dispatch = useDispatch();

    const [changeAmount, setIncrementAmount] = useState("2");

    return (

<>


    <div className={styles.row}>
        <button
            className={styles.button}
            aria-label="Increment value"
            onClick={
                () => dispatch(increment())
            }>
            +
        </button>

        <span className={styles.value}>{count}</span>

        <button
            className={styles.button}
            aria-label="Decrement value"
            onClick={() => dispatch(decrement())}
        >
            -
        </button>
    </div>

        {/*/!*add a space*!/*/}
        {/*{'\u00A0 \u00A0' }*/}
        <div className={styles.row}>
        <input
            className={styles.textbox}
            aria-label="Set increment amount"
            value={changeAmount}
            onChange={(e) => setIncrementAmount(e.target.value)}
        />
        <button
            className={styles.button}
            onClick={() =>
                dispatch(changeByAmount(Number(changeAmount) || 0))
            }
        >
            asd
        </button>


        </div>


</>
    );
}


