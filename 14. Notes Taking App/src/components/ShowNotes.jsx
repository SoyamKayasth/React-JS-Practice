import React from 'react'
import NoteCard from './NoteCard'

const ShowNotes = () => {
  return (
    <div className='lg:w-1/2 lg:border-l-2 p-10 bg-black'>
      <h1 className='text-4xl font-bold'>Recent Notes</h1>
        
        <div className="flex flex-wrap items-start justify-start gap-5 mt-6 h-3/4 overflow-auto">
          
           <NoteCard/>

        </div>

    </div>
  )
}

export default ShowNotes
