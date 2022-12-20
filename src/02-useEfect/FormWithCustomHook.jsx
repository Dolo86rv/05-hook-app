import React, { useEffect } from 'react'
import { useForm } from '../hooks/useForm'

export const FormWithCustomHook = () => {
    
    const {formState, onInputChange, onResetForm, username, email, password} = useForm({
        username: '',
           email: '',
        password: ''
    })

    useEffect(()=>{
        //console.log('form state change')
    },[{formState}])

    useEffect(()=>{
        //console.log('email changed')
    },[ formState.email])

    
    return (
        <>
            <h1>Formulario con custom Hook</h1>
            <hr/>
            <div className='formulario'>
                <div>
                    <input
                        className="form-control"
                        type="text"
                        placeholder="Username"
                        name="username"
                        value={username}
                        onChange={onInputChange}

                    />
                </div>
                <div>
                    <input
                        className="form-control"
                        type="email"
                        placeholder="dolorv86@gmail.com"
                        name="email"
                        value={email}
                        onChange={onInputChange}
                    />
                </div>
                <div>
                    <input
                        className="form-control"
                        type="password"
                        placeholder="Contraseña"
                        name="password"
                        value={password}
                        onChange={onInputChange}
                    />
                </div>
                
                <button 
                    className="btn btn-primary"
                    onClick={onResetForm}
                >Borrar</button>

                    
            </div>
                
                
        </>
    )
}
