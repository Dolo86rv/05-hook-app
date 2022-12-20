import React from 'react'
import { useCounter } from '../hooks/useCounter'

export const CounterWithCustomHooks = () => {
    
    const {iscounter, increment, decrement, reset} = useCounter()

    return (
        <>
            <h1>Counter With Hooks: {iscounter}</h1>
            <hr/>

            <button onClick={()=>increment(2)}>+1</button>
            <button onClick={reset}>Reset</button>
            <button onClick={()=>decrement(2)}>-1</button>
        </>
    )
}
