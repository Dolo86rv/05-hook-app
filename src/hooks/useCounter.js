import { useState } from "react"

export const useCounter =(initialValue = 1 ) =>{
    
    const [iscounter, setCounter] = useState(initialValue)

    const increment = ( value = 1) => {
        setCounter(iscounter + value)
    }

    const decrement = (value = 1) => {
        if(iscounter === 0) return
        
        setCounter(iscounter - value)
    }

    const reset = () => {
        setCounter(initialValue)
    }
    
    return {
        iscounter, 
        increment, 
        decrement,
        reset
    }
}