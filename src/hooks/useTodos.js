import { useEffect, useReducer } from "react"
import { todoReducer } from "../08-useReducer/todoReducer"

const init = () => {
    return JSON.parse(localStorage.getItem('todo')) || [] 
}

export const useTodos = () =>{

    const [todo, dispatch] = useReducer(todoReducer, [], init)
    
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
    const todoCount = ( todo ) => {
        const action = {
            type: '[TODO] Counter todo',
            payload: todo
        }
        dispatch(action)
    }
    const pendingTodoCount = () => {
        //return todo.filter( todos => !todos.done).length
    }
    
    return {
        todo, 
        handleNewTodo,
        handleDeleteTodo,
        handleToggleTodo,
        todoCount, 
        pendingTodoCount
    }
}