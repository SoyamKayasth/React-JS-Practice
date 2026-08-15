import React from 'react'
import Form from './components/Form'
import ShowNotes from './components/ShowNotes'
import { useState } from 'react'
import { v4 as uuid } from 'uuid';


const App = () => {
  
  const [notes , setNotes] = useState([]);
   
  const addNote = (title , details) => {
    let newNote = {
         id: uuid(),
         title: title,
         details: details,
         isDone: false,
    };
    setNotes((prev) => 
     [...prev , newNote]
    );
  }



  return (
    <div className='h-screen bg-black text-white lg:flex overflow-auto scrollbar-none'>
          <Form  addNote = {addNote} />
          <ShowNotes notes = {notes} />        
    </div>
  )
}

export default App
