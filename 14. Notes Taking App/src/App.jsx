import React from 'react'
import Form from './components/Form'
import ShowNotes from './components/ShowNotes'
import { useState } from 'react'
import { v4 as uuid } from 'uuid';


const App = () => {
  
  const [notes , setNotes] = useState([{
         id: uuid(),
         title: "This is 1st Note",
         isDone: false,
    }]);
   
  const addNote = (title) => {
    let newNote = {
         id: uuid(),
         title: title,
         isDone: false,
    };
    setNote((prev) => 
     [...prev , newNote]
    );
  }



  return (
    <div className='h-screen bg-black text-white lg:flex'>
          <Form  addNote = {addNote} />
          <ShowNotes notes = {notes} />        
    </div>
  )
}

export default App
