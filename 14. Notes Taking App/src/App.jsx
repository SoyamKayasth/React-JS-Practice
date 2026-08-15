import React from 'react'
import Form from './components/Form'
import ShowNotes from './components/ShowNotes'
import { useState } from 'react'
import { v4 as uuid } from 'uuid';


const App = () => {
  
 const [notes , setNotes] = useState([]);
    

  return (
    <div className='h-screen bg-black text-white lg:flex overflow-auto scrollbar-none'>
          <Form setNotes={setNotes}/>
          <ShowNotes notes = {notes} setNotes = {setNotes} />        
    </div>
  )
}


export default App
