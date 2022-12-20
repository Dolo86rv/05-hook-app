import React, { useLayoutEffect, useRef, useState } from 'react'

export const Quote = ({characters, episodes, quotes }) => {
  
  const pRef = useRef()
  const [boxSize, setBoxSize] = useState({
    width: 0,
    height: 0
  })
  
  useLayoutEffect(()=>{
      const {height, width} = pRef.current.getBoundingClientRect()
      setBoxSize({height, width})
  },[characters])
  
  return (
    <>
      <blockquote className="blockquote tex-end" style={{display: 'flex-column'}}>
        <p ref={pRef} className="mb-1">{characters}</p>
        <p>{episodes}</p>
        <footer>{quotes}</footer>
      </blockquote>
      <code>
        {JSON.stringify(boxSize)}
      </code>

    </>
    
  )
}
