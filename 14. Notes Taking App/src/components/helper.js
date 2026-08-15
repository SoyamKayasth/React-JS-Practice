 import { v4 as uuid } from 'uuid';
 

  export const addNote = (title , details, prev) => {
    const newNote = {
         id: uuid(),
         title: title,
         details: details,
         isDone: false,
    };

     return [...prev , newNote]

  }
  
  export const deleteNote = (id, prevNotes) => {
        return prevNotes.filter((note) => note.id != id)
  }

