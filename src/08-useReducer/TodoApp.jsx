import React from 'react'
import { useTodos } from '../hooks'
import { TodoAdd } from './TodoAdd'
import { TodoList } from './TodoList'


export const TodoApp = () => {
    //todoCounter, todoPendientes
    const {todo, todoCount, pendingTodoCount, handleDeleteTodo, handleToggleTodo, handleNewTodo } = useTodos()
    
    const count = todoCount()

    const countPending = pendingTodoCount()
    
    return (
    <>
        <h1>TodoApp {count}, <small>pendientes: {countPending} </small> </h1>
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
