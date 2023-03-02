
// Redux Steps 5: get data from Store by `useSelector`, and send/ dispatch actions using `useDispatch`.
// create a `Counter.tsx` with <Counter> Component inside. then import to `App`.
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
    decrement,
    increment,
    changeByAmount,
    selectCount,
    // incrementAsync,
} from './counterSlice'

import styles from './Counter.module.css'
import { useState } from 'react';

export const Counter = () => {
    // const count = useSelector((state:any) => state.counter.value);
    const count = useSelector(selectCount);

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
                {/*<span className={styles.value}> count not working</span>*/}

                <button
                    className={styles.button}
                    aria-label="Decrement value"
                    onClick={() => dispatch(decrement())}
                >
                    -
                </button>

                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
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
                    Change Amount
                </button>
            </div>

            <div className={styles.row}>


            </div>
        </>
    );
}
