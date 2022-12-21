import { useEffect, useReducer } from "react"
import { todoReducer } from "../08-useReducer/todoReducer"

const initialState = []

const init = () => {
    return JSON.parse(localStorage.getItem('todo')) || [] 
}

export const useTodos = () =>{

    const [todo, dispatch] = useReducer(todoReducer, initialState, init)
    
    useEffect(() => {
        localStorage.setItem('todo', JSON.stringify(todo))
    }, [todo])
    
    const handleNewTodo = (todo) => {
        const action = {
            type: '[TODO] Add todo',
            payload: todo
        }
        dispatch(action)   
    }

    const handleDeleteTodo = ( id ) => {
        const action = {
            type: '[TODO] Remove todo',
            payload: id
        }
        dispatch(action)
    }

    const handleToggleTodo = ( id ) => {
        const action = {
            type: '[TODO] Toggle todo',
            payload: id
        }
        dispatch(action)
    }
    
    return {
        todo, 
        handleNewTodo,
        handleDeleteTodo,
        handleToggleTodo
    }
}