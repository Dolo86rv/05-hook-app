import { renderHook, act } from "@testing-library/react"
import { useCounter } from "../../hooks/useCounter"


describe('Pruebas en el useCounter', () => { 
    
    test('debe de retornar los valores por defecto', () => { 
        
        const { result } = renderHook( () => useCounter())
        const { iscounter, decrement, increment, reset} = result.current

        expect(iscounter).toBe(10)
        expect(decrement).toEqual(expect.any(Function))
        expect(increment).toEqual(expect.any(Function))
        expect(reset).toEqual(expect.any(Function))
        
    })
    test('debe de generar el counter con el valor de 100', () => {
        
        const { result } = renderHook(() => useCounter(100))
        const { iscounter } = result.current
        
        expect(iscounter).toBe(100)  
    })

    test('debe resetear el counter a su valor inicial', () => {
        
        const { result } = renderHook(() => useCounter(100))
        const { reset, decrement } = result.current

        act(() => {
            decrement()
            reset()
        })        
        expect(result.current.iscounter).toBe(100)
    })
    

})