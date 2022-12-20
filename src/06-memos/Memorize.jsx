import React, { useState } from 'react'
import { useCounter } from '../hooks'
import { Small } from './Small'

export const Memorize = () => {
    
    const [show, setShow] = useState(true)
    const {iscounter, increment} = useCounter(10)
        
    return (
        <>
            <h1>Counter:  <Small value = {iscounter} /> </h1>
            <hr/>
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
