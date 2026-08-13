import React from 'react'

const RightCardContent = (props) => {
  return (
    <div className="absolute top-0 left-0 h-full w-full p-8 flex flex-col justify-between">
      <h2 className="bg-white rounded-full h-12 w-12 text-center text-2xl flex items-center justify-center font-bold">
        {props.id + 1}
      </h2>
      <div className=" text-white">
        <p className="mb-15 text-lg leading-relaxed">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi
          recusandae magnam quam impedit assumenda provident.
        </p>

        <div className="flex justify-between font-medium">
          <button type="button" className="bg-blue-600 px-8 py-2 rounded-full">
            {props.tag}
          </button>
          <button type="button" className="bg-blue-600 rounded-full px-3 py-2">
            <i className="ri-arrow-right-line"></i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default RightCardContent
