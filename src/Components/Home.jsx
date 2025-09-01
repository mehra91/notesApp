import React, { useState } from "react";
import AddNote from "./AddNote";
import Cards from "./Cards";

const Home = () => {
  const [notes, setNotes] = useState([]);

  
  const addNewNote = (note) => {
    setNotes((prevNotes) => [...prevNotes, note]);
  };

  return (
    <div className="relative h-auto bg-black p-4">
      <h1 className="text-emerald-500 text-2xl font-bold mb-4">My Notes</h1>

      
      <AddNote sendDataToParent={addNewNote} />

      
      <div className="mt-6 flex flex-wrap gap-4">
        {notes.map((note, index) => (
          <Cards key={index} reciveData={note} />
        ))}
      </div>
    </div>
  );
};

export default Home;
