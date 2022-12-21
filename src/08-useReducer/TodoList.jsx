import React from 'react'
import { TodoItem } from './TodoItem'

export const TodoList = ({initialState =[], onDeleteTodos, onToggleTodos}) => {
    

    return (
        <ul className="list-group">
            {
                initialState.map((todos)=>(
                    <TodoItem key={todos.id} todo={todos} onDeleteTodo={onDeleteTodos} onToggleTodo={onToggleTodos} />
                ))
            }      
        </ul>
    )
}
