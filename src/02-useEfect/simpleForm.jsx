import React, { useEffect, useState } from 'react'
import { Message } from './Message'

export const SimpleForm = () => {
    const [formState, setFormState] = useState({
        username: 'strider',
        email: 'dolorv86@gmail.com'
    })

    const { username, email } = formState

    const onInputChange = ({target}) => {
        const {name, value} = target
        setFormState({
            ...formState,
            [name]: value
        })
    }

    useEffect(()=>{
        //console.log('form state change')
    },[formState])

    useEffect(()=>{
        //console.log('email changed')
    },[email])

    
    return (
        <>
            <h1>Formulario Simple</h1>
            <hr/>
            <div>
                    <input
                        type="text"
                        placeholder="UserName"
                        name="username"
                        value={username}
                        onChange={onInputChange}

                    />
                    <input
                        type="email"
                        placeholder="dolorv86@gmail.com"
                        name="email"
                        value={email}
                        onChange={onInputChange}
                    />
                </div>
                {
                    (username === 'strider2') && <Message /> 
                }
                
        </>
    )
}
