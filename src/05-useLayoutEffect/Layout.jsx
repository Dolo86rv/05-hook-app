import React from 'react'
import { useFetch, useCounter } from '../hooks'
import { LoadingQuote, Quote } from '../03-examples'

export const Layout= () => {
    
    const { iscounter, increment } = useCounter()
    const { data, isLoading, hasError} = useFetch(`https://www.breakingbadapi.com/api/?=quotes/${iscounter}`)
    const { characters, episodes, quotes} = !!data && data

    return (
        <>
            <h1>BreakingBad Quotes</h1>
            <hr/>
            {
                isLoading
                ? <LoadingQuote />
                : <Quote characters={characters} episodes={episodes} quotes={quotes} />
            }
            <button 
                className="btn btn-primary"
                disabled={isLoading}
                onClick={()=> increment(1)}>
                Next quotes
            </button>
            
        </>
)
}
