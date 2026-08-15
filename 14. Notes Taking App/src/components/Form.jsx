import React from "react";
import { useState } from "react";
import { addNote } from "./helper";

const Form = ({setNotes}) => {
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setNotes((prev) => addNote(title, details, prev));
    setTitle("");
    setDetails("");
  };

  return (
    <form
      action=""
      onSubmit={handleSubmit}
      className="flex flex-col gap-6  items-start lg:w-1/2 p-10"
    >
      <h1 className="text-4xl font-bold mb-6">Add Notes</h1>

      <input
        type="text"
        name="title"
        id="title"
        placeholder="Enter Notes Title"
        className="px-5 w-full font-medium py-2 border-white outline-none border-2 rounded"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />

      <textarea
        name="details"
        id="details"
        cols="30"
        placeholder="Enter the details here"
        className="px-5 w-full font-medium h-32 border-2 py-2 flex items-start flex-row outline-none rounded"
        value={details}
        onChange={(e) => setDetails(e.target.value)}
        required
      ></textarea>

      <button
        type="submit"
        className="bg-white py-2 text-black font-medium w-full outline-none rounded active:scale-95"
      >
        Add Note
      </button>
    </form>
  );
};

export default Form;
