import { fireEvent, render, screen } from '@testing-library/react'
import { TodoItem } from '../../08-useReducer/TodoItem'

describe('pruebas en <TodoItem />', () => { 
    
    const todo = {
        id: 1,
        description: 'Piedra del Alma',
        done: false
    }

    const onDeleteTodoMock = jest.fn()
    const onToggleTodoMock = jest.fn()
    
    beforeEach(()=> jest.clearAllMocks())

    test('debe de mostrar el Todo Pendiente de completar', () => { 
        
        render(<TodoItem todo={todo} onToggleTodo={onToggleTodoMock} onDeleteTodo={onDeleteTodoMock} />)
        
        const liElement = screen.getByRole('listitem')
        //console.log(liElement.innerHTML)
        expect(liElement.className).toBe('list-group-item d-flex justify-content-between')
        const spanElement = screen.getByLabelText('span')
        expect(spanElement.className).toContain('align-self-center')
        expect(spanElement.className).not.toContain('text-decoration-line-through')

    })

    test('debe de mostrar el todo completado', () => { 
        
        todo.done = true

        render(<TodoItem todo={todo} onToggleTodo={onToggleTodoMock} onDeleteTodo={onDeleteTodoMock} />)
        
        const spanElement = screen.getByLabelText('span')
        expect(spanElement.className).toContain('text-decoration-line-through')

    })

    test('span debe llamar el ToggleTodo', () => { 
        
        render(<TodoItem todo={todo} onToggleTodo={onToggleTodoMock} onDeleteTodo={onDeleteTodoMock} />)
        
        const spanElement = screen.getByLabelText('span')
        fireEvent.click(spanElement)
        expect(onToggleTodoMock).toHaveBeenCalledWith(todo.id)
    })

    test('span debe llamar el DeleteTodo', () => { 
        
        render(<TodoItem todo={todo} onToggleTodo={onToggleTodoMock} onDeleteTodo={onDeleteTodoMock} />)
        
        const buttonElement = screen.getByRole('button')
        fireEvent.click(buttonElement)
        expect(onDeleteTodoMock).toHaveBeenCalledWith(todo.id)
    })
})