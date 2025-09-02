import React, { useState } from "react";
import AddNote from "./AddNote";
import Cards from "./Cards";

const Home = () => {
  const [notes, setNotes] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const [noteToDelete, setNoteToDelete] = useState(null);

  const addNewNote = (note) => {
    setNotes((prevNotes) => [...prevNotes, note]);
  };

  // delete request
  const handleDeleteRequest = (index) => {
    setNoteToDelete(index);
    setShowPopup(true);
  };

  // confirm delete
  const confirmDelete = () => {
    setNotes((prev) => prev.filter((_, i) => i !== noteToDelete));
    setShowPopup(false);
    setNoteToDelete(null);
  };

  // cancel delete
  const cancelDelete = () => {
    setShowPopup(false);
    setNoteToDelete(null);
  };

  return (
    <div className="relative h-auto bg-black p-4">
      <h1 className="text-emerald-500 text-2xl font-bold mb-4">My Notes</h1>

      <AddNote sendDataToParent={addNewNote} />

      <div className="mt-6 flex flex-wrap gap-4">
        {notes.map((note, index) => (
          <Cards
            key={index}
            reciveData={note}
            onDelete={() => handleDeleteRequest(index)}
          />
        ))}
      </div>

      {/* Popup directly in parent */}
      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white text-black p-6 rounded-xl shadow-lg w-80 text-center">
            <h2 className="text-lg font-bold mb-4">Delete Note?</h2>
            <p className="mb-6">
              Are you sure you want to delete{" "}
              <span className="font-semibold">
                {notes[noteToDelete]?.title}
              </span>
              ?
            </p>
            <div className="flex justify-center gap-4">
              <button
                onClick={confirmDelete}
                className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
              >
                Yes
              </button>
              <button
                onClick={cancelDelete}
                className="px-4 py-2 bg-gray-300 text-black rounded-lg hover:bg-gray-400"
              >
                No
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
