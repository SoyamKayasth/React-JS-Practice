import React from 'react'

const Form = () => {

     const handleSubmit = (e) => {
         e.preventDefault();
     } 


    return (
        <form action="" onSubmit={handleSubmit} className='flex flex-col gap-4 items-start lg:w-1/2 p-10'>

            <h1 className='text-4xl font-bold mb-6'>Add Notes</h1>

            <input type="text" name="title" id="title" placeholder='Enter Notes Title' className='px-5 w-full font-medium py-2 border-2 outline-none rounded' />

            <textarea name="details" id="details" cols="30" placeholder='Enter the details here' className='px-5 w-full font-medium h-32 border-2 py-2 
                flex items-start flex-row outline-none rounded 
                '></textarea>


            <button type="submit" className='bg-white py-2 text-black font-medium w-full outline-none rounded active:scale-95'>
                Add Note
            </button>



        </form>
    )
}

export default Form
