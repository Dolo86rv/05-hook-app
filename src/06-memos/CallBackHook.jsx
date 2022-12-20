import React, { useCallback, useEffect, useState } from 'react'
import { ShowIncrement } from './ShowIncrement'

export const CallBackHook = () => {
    
    const [iscounter, setCounter] = useState(10)
    
    const incrementFather = useCallback(
        (value) => {
            setCounter((c) => c + value)
        },[],
    )

    return (
        <>
            <h1>useCallback Hook: {iscounter }</h1>
            <hr/>
            <ShowIncrement increment={incrementFather} />
        </>
    )
}
