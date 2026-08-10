import React from 'react'
import LeftContent from "./LeftContent"
import RightContent from "./RightContent"


function Page1Content() {
  return (
    <div className='flex items-center justify-between bg-blue-400 flex-1 py-6 px-12 gap-4'>
       <LeftContent />
       <RightContent />
    </div>
  )
}

export default Page1Content