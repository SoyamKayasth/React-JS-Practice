import React from "react";
import { deleteNote } from "./helper";

const NoteCard = ({ id, title, details, setNotes }) => {
  return (
    <div className='bg-[url("/src/assets/NoteCardBg.png")] bg-cover h-62 w-50 rounded-2xl text-black py-5 pl-6 pr-2 flex flex-col justify-between '>
      <div>
        <h3 className="leading-tight font-semibold text-olive-900">{title}</h3>
        <p className="text-sm leading-tight mt-2 text-olive-500 font-normal">
          {details}
        </p>
      </div>
      <div>
        <button type="button" className="text-white bg-red-500 font-bold w-full rounded-xl py-0.5 active:scale-95" onClick={() => setNotes((prev) => deleteNote(id, prev))}>Delete</button>
      </div>
    </div>
  );
};

export default NoteCard;
