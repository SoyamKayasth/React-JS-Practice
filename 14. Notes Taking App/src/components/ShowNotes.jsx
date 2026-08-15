import React from 'react'
import NoteCard from './NoteCard'

const ShowNotes = ({notes}) => {
  return (
    <div className='lg:w-1/2 lg:border-l-2 md:p-10 p-5 bg-black flex flex-col flex-nowrap'> 

      <h1 className='text-4xl font-bold'>Recent Notes</h1>
        
        <div className="flex flex-wrap 
         lg:gap-10 gap-5 mt-6 overflow-auto scrollbar-none">
       
        {notes.map((note) => 
           <NoteCard key = {note.id} title = {note.title} details = {note.details}/>
        )}
  
           
        </div>

    </div>
  )
}

export default ShowNotes
