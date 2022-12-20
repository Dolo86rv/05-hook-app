import React, {useState} from 'react'

export const CounterApp = () => {
    const [iscounter, setCounter] = useState({
        counter1: 10,
        counter2: 20,
        counter3: 30
    })

    const onHandleCounter = () =>{
        setCounter({
            ...iscounter,
            counter1: iscounter.counter1 + 1
        
        })
    }
        return (
        <>
            <h1>Counter1: {iscounter.counter1}</h1>
            <h1>Counter2: {iscounter.counter2}</h1>
            <h1>Counter3: {iscounter.counter3}</h1>

            <hr/>
            <button onClick={onHandleCounter}>+1</button>
        </>
    )
}
