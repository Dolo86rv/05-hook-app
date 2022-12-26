import { renderHook } from "@testing-library/react"
import { useCounter } from "../hooks/useCounter"


describe('Pruebas en el useCouter', () => { 
    
    test('debe de retornar los valores por defecto', () => { 
        
        const { result } = renderHook( () => useCounter())
        const { iscounter, decrement, increment, reset} = result.current

        expect(iscounter).toBe(10)
        expect(decrement).toEqual(expect.any(Function))
        expect(increment).toEqual(expect.any(Function))
        expect(reset).toEqual(expect.any(Function))
        
    })

})