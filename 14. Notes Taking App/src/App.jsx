import React from 'react'
import Form from './components/Form'
import ShowNotes from './components/ShowNotes'

const App = () => {
  return (
    <div className='h-screen bg-black text-white lg:flex'>
         <Form />
          <ShowNotes />        
    </div>
  )
}

export default App
