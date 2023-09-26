import { useState, useEffect } from "react";
import "./App.css";
import NotesList from "./components/Notes/NotesList";
import EmptyTemplate from "./components/UI/EmptyTemplate";
import AppContainer from "./components/UI/AppContainer";
import Note from "./components/Notes/Note";

function App() {
  const [isSidebarVisible, setSidebarVisible] = useState(true);
  const toggleSidebarHandler = () => {
    setSidebarVisible(!isSidebarVisible);
  };

  // const widthClass = isSidebarVisible ? "w-full" : "w-full";
  const displayClass = isSidebarVisible ? "sidebar-show " : "sidebar-hidden ";

  // Load notes from localStorage when the app loads
  useEffect(() => {
    const storedNotes = JSON.parse(localStorage.getItem("notesData")) || {};
    setNotesData(storedNotes);
  }, []);

  const [notesData, setNotesData] = useState({});

  // const saveNoteHandler = (newNote) => {
  //   setNotesData((prevNotes) => {
  //     return { ...prevNotes, ...newNote };
  //   });
  // };

  const saveNoteHandler = (newNote) => {
    // Update the state
    setNotesData((prevNotes) => {
      const updatedNotes = { ...prevNotes, ...newNote };
      // Save the updated notes to localStorage
      localStorage.setItem("notesData", JSON.stringify(updatedNotes));
      return updatedNotes;
    });
  };

  const [selectedNote, setSelectedNote] = useState(null);

  const handleNoteSelect = (note) => {
    setSelectedNote(note);
  };

  const newNoteHandler = () => {
    const newNoteData = { key: Math.random(), heading: "", text: "" };
    setSelectedNote(newNoteData);
  };

  // const deleteNoteHandler = (noteKey) => {
  //   if (notesData.hasOwnProperty(noteKey)) {
  //     delete notesData[noteKey];
  //     setSelectedNote(null);
  //   }
  // };

  const deleteNoteHandler = (noteKey) => {
    if (notesData.hasOwnProperty(noteKey)) {
      // Delete from state
      const updatedNotesData = { ...notesData };
      delete updatedNotesData[noteKey];
      setNotesData(updatedNotesData);

      // Delete from localStorage
      const localStorageData =
        JSON.parse(localStorage.getItem("notesData")) || {};
      delete localStorageData[noteKey];
      localStorage.setItem("notesData", JSON.stringify(localStorageData));

      setSelectedNote(null);
    }
  };

  return (
    <AppContainer>
      <NotesList
        onSelect={handleNoteSelect}
        notes={notesData}
        display={displayClass}
      />

      {selectedNote ? (
        <div className="relative flex h-full max-w-full flex-1 overflow-y-scroll">
          <div className="flex h-full max-w-full flex-1 flex-col">
            <Note
              onNewNote={newNoteHandler}
              onDeleteNote={deleteNoteHandler}
              selectedNote={selectedNote}
              sidebarHandler={toggleSidebarHandler}
              onSave={saveNoteHandler}
              display={displayClass}
            />
          </div>
        </div>
      ) : (
        <EmptyTemplate onNewNote={newNoteHandler} />
      )}
    </AppContainer>
  );
}

export default App;
