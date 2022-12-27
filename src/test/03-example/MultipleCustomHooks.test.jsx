import { render, screen} from "@testing-library/react"
import { MultipleCustomHooks } from "../../03-examples/MultipleCustomHooks"
import { useFetch } from "../../../src/hooks/useFetch"

jest.mock('../../../src/hooks/useFetch')

describe('Pruebas en <MultiplesCustomHooks />', () => { 
    
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

    test('debe de mostrar un Quote', () => { 
        
        useFetch.mockReturnValue({
            data: [{characters:'BreakingBad', episodes:'1', quotes:'Pilot'}],
            isLoading: false,
            hasError: null
        })
        render(<MultipleCustomHooks />)
        expect(screen.getByText('Pilot')).toBeTruthy()
        expect(screen.getByText('BreakingBad')).toBeTruthy()
        
        const nextButton = screen.getByRole('button', {name: 'Next quotes'})
        expect(nextButton.disabled).toBeFalsy()
        //expect(screen.getByText('BreakingBad')).toBeTruthy()
        

    })
})