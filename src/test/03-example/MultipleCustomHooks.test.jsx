import { fireEvent, render, screen} from "@testing-library/react"
import { MultipleCustomHooks } from "../../03-examples/MultipleCustomHooks"
import { useFetch } from "../../../src/hooks/useFetch"
import { useCounter } from "../../hooks"

jest.mock('../../../src/hooks/useFetch')
jest.mock('../../../src/hooks/useCounter')

describe('Pruebas en <MultiplesCustomHooks />', () => { 
    
    const mockIncrement = jest.fn()
    useCounter.mockReturnValue({
        iscounter: 1,
        increment: mockIncrement
    })

    beforeEach(()=>{
        jest.clearAllMocks()
    })

    test('debe de mostrar el componente por defecto', () => { 
        
        useFetch.mockReturnValue({
            data: null,
            isLoading: true,
            hasError: null
        })
        render(<MultipleCustomHooks />)
        
        expect(screen.getByText('Loading...'))
        expect(screen.getByText('BreakingBad Quotes'))

        const nextButton = screen.getByRole('button', {name: 'Next quotes'})
        expect(nextButton.disabled).toBeTruthy()
        
    })

    
    test('debe de llamar la funcion de incrementar', () => { 
        
        useFetch.mockReturnValue({
            data: [{characters:'BreakingBad', episodes:'1', quotes:'Pilot'}],
            isLoading: false,
            hasError: null
        })
        render(<MultipleCustomHooks />)
                
        const nextButton = screen.getByRole('button', {name: 'Next quotes'})
        fireEvent.click(nextButton)
        
        expect(mockIncrement).toHaveBeenCalled()
    })
})