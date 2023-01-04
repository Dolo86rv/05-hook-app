import { fireEvent, render, screen } from '@testing-library/react'
import { UserContext } from '../../09-useContext/context/UserContext'
import { LoginPage } from '../../09-useContext/LoginPage'

jest.mock()
describe('prueba en <LoginPage />', () => { 
    
    test('debe de mostrar el usuario Null en el componente', () => { 

        render( 
            <UserContext.Provider  value={{user: null}}>
                <LoginPage />
            </UserContext.Provider>
        )

        const tagPre = screen.getByLabelText('pre')
        expect(tagPre.innerHTML).toBe('null')
    })

    test('debe de mostrar el usuario en el componente', () => { 
        
        const setUserMock = jest.fn()
        render( 
            <UserContext.Provider  value={{user: null, setUser: setUserMock }}>
                <LoginPage />
            </UserContext.Provider>
        )

        const button = screen.getByRole('button')
        fireEvent.click(button)
        
        expect(setUserMock).toHaveBeenCalledWith({id: 123, nombre: 'Dolores', email: 'dolorv86@gmail.com'})
    })
})