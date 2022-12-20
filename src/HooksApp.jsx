import React from 'react'
import { CounterApp } from './01-useState/CounterApp'
import { CounterWithCustomHooks } from './01-useState/CounterWithCustomHooks'
import { FormWithCustomHook } from './02-useEfect/FormWithCustomHook'
import { SimpleForm } from './02-useEfect/simpleForm'
import { MultipleCustomHooks } from './03-examples/MultipleCustomHooks'
import { FocusScreen } from './04-useRef/FocusScreen'
import { Layout } from './05-useLayoutEffect/Layout'
import { CallBackHook } from './06-memos/CallBackHook'
import { MemoHook } from './06-memos/MemoHook'
import { Memorize } from './06-memos/Memorize'
import { Padre } from './07-tarea-memo/Padre'

export const HooksApp = () => {
  return (
    <>
      <CounterApp />
      <hr/>
      <hr/>
      <CounterWithCustomHooks />
      <hr/>
      <hr/>
      <SimpleForm />
      <hr/>
      <hr/>
      <FormWithCustomHook />
      <hr/>
      <hr/>
      <MultipleCustomHooks />
      <hr/>
      <hr/>
      <FocusScreen />
      <hr/>
      <hr/>
      <Layout />
      <hr/>
      <hr/>
      <Memorize />
      <hr/>
      <hr/>
      <MemoHook />
      <hr/>
      <hr/>
      <CallBackHook />
      <hr/>
      <hr/>
      <Padre />
    </>
    
  )
}
