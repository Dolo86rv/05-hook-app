import React, { useEffect, useReducer } from 'react'
import { useTodos } from '../hooks/useTodos'
import { TodoAdd } from './TodoAdd'
import { TodoList } from './TodoList'


export const TodoApp = () => {
    
    const {todo, handleDeleteTodo, handleToggleTodo, handleNewTodo } = useTodos()
    
    return (
    <>
        <h1>TodoApp 10, <small>pendientes: 2</small> </h1>
        <hr/>
        <div  className="row">
            <div className="col-7">
                <TodoList 
                    initialState={todo} 
                    onDeleteTodos={handleDeleteTodo}
                    onToggleTodos={handleToggleTodo}
                />
            </div>
            <div  className="col-5">
                <h4>Agregar TODO</h4>
                <hr/>
                <TodoAdd onNewTodo={handleNewTodo} />            
            </div>
        </div>
    </>
    )
}
