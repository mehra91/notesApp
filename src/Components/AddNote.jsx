import React, { useState } from "react";
import { BsPinAngle } from "react-icons/bs";

const AddNote = ({ sendDataToParent }) => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [priority, setPriority] = useState("Normal");

  const handleCreate = (e) => {
    e.preventDefault();

    
    sendDataToParent({
      title,
      body,
      priority,
 

    });
 
    setTitle("");
    setBody("");
    setPriority("Normal");
  };

  return (
    <form
      className="bg-gray-600 p-4 rounded-xl shadow-md max-w-sm mx-auto"
      onSubmit={handleCreate}
    >
      <div className="relative">
        <button
          type="button"
          className="absolute top-1 right-1 text-gray-500  "
        >
          <BsPinAngle size={20} />
        </button>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full border-b border-black py-1 mb-2 outline-none"
        />
      </div>

      <textarea
        rows="2"
        placeholder="Take a note..."required
        value={body}
        onChange={(e) => setBody(e.target.value)}
        className="w-full border-b border-black mb-2 p-1 outline-none resize-y "
      ></textarea>

      <div className="mb-2 flex gap-2 text-sm">
        <label >
          <input
            type="radio"
            value="Normal" required
            checked={priority === "Normal"}
            onChange={(e) => setPriority(e.target.value)}
          />{" "}
          Normal
        </label>
        <label>
          <input
            type="radio"
            value="Important" required
            checked={priority === "Important"}
            onChange={(e) => setPriority(e.target.value)}
          />{" "}
          Important
        </label>
        <label>
          <input
            type="radio"
            value="Most Important" required
            checked={priority === "Most Important"}
            onChange={(e) => setPriority(e.target.value)}
          />{" "}
          Most Important
        </label>
      </div>

      <button
        type="submit"
        className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
      >
        Create
      </button>
    </form>
  );
};

export default AddNote;
