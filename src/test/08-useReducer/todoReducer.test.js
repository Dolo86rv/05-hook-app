import { todoReducer } from "../../08-useReducer/todoReducer"


describe('pruebas en todoReducer', () => { 
    
    const initialState = [{
        id: 1,
        description:'Demo Todo',
        done: false
    },
    {
        id: 2,
        description:'Nuevo todo #2',
        done: false
    },
]
    
    test('debe regresar el estado inicial', () => { 
        const newState = todoReducer(initialState, {})
        expect(newState).toBe(initialState)

    })

    test('debe agregar un todo', () => { 
        
        const action = {
            type: '[TODO] Add todo',
            payload: {
                id: 2,
                description:'Nuevo todo #2',
                done: false
            }
        }

        const newState = todoReducer(initialState, action)
        expect(newState.length).toBe(3)
        expect(newState).toContain(action.payload)
    })

    test('debe eliminar un todo', () => { 
        
        const id = 1
        const action = {
            type: '[TODO] Remove todo',
            payload: id
        }

        const newState = todoReducer(initialState, action)
        expect(newState.length).toBe(1)
    })

    test('debe de realizar el Toggle del todo', () => { 
        
        const id = 1
        const action = {
            type: '[TODO] Toggle todo',
            payload: id
        }

        const newState = todoReducer(initialState, action)
        expect(newState[0].done).toBe(true)
    })
})