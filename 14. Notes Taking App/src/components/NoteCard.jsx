import React from 'react'

const NoteCard = ({title, details}) => {
  return (
    <div className='bg-[url("/src/assets/NoteCardBg.png")] bg-cover h-52 w-40 rounded-2xl text-black pt-5 pl-6 pr-2'>

        <h3 className='leading-tight font-semibold text-olive-900'>{title}</h3>
        <p className='text-sm leading-tight mt-2 text-olive-500 font-normal'>{details}</p>
    </div>
  )
}

export default NoteCard
