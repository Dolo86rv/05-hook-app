import React, { useMemo, useState } from 'react'
import { useCounter } from '../hooks'

const heavyStuff = (iterartionNumber = 100) => {
    for( let i = 0; i < iterartionNumber; i++){
        console.log('Ahi vamos ....')
    }

    return `${iterartionNumber} iteraciones realizadas`
}

export const MemoHook = () => {
    
    const [show, setShow] = useState(true)
    const {iscounter, increment} = useCounter(4000)

    const messageMemorize = useMemo(() => heavyStuff(iscounter), [iscounter])
        
    return (
        <>
            <h1>Counter:  <small>{iscounter}</small></h1>
            <hr/>
            <h4>{messageMemorize}</h4>
            <button 
                className="btn btn-primary"
                onClick={()=>increment()}
            >
                +1
            </button>
            <button 
                className="btn btn-outline-primary"
                onClick={()=>setShow(!show)}
            >
                Show/Hide {JSON.stringify(show)}
            </button>

        </>
    )
}
