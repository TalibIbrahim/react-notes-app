import React from "react";
import NoteToolbar from "./NoteToolbar";

import NoteText from "./NoteText";

const Note = (props) => {
  return (
    <>
      <NoteToolbar
        onNewNote={props.onNewNote}
        onDeleteNote={props.onDeleteNote}
        selectedNoteKey={props.selectedNote.key}
        sidebarHandler={props.sidebarHandler}
        display={props.display}
      />
      <NoteText
        selectedNote={props.selectedNote}
        onSave={props.onSave}
        width={props.width}
      />
    </>
  );
};

export default Note;
