import React, { useState } from 'react'
import { UserContext } from './UserContext'

/*const user ={
    id: 123,
    nombre: 'Dolores Rodriguez',
    email: 'dolorv86@gmail.com'
}*/

export const UserProvider = ({ children }) => {
    
    const [user, setUser] = useState()

    return (
        <UserContext.Provider value={{ user, setUser }}>
            { children }
        </UserContext.Provider>
    )
}
