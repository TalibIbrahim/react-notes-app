import React from "react";

import "../UI/styles.css";

const NoteToolbar = (props) => {
  // A variable that changes its state from true and false. Using this value, we can toggle the sidebar width.

  const styles = " w-full toolbar-transition flex justify-between  z-10 ";

  let btnClass =
    "button-transition text-yellow-400 material-symbols-outlined text-3xl font-normal hover:text-yellow-500";

  if (props.display === "sidebar-hidden ") {
    btnClass =
      "rotate-180 button-transition text-yellow-400 material-symbols-outlined text-3xl font-normal hover:text-yellow-500";
  }

  // let btnStyle2 = "keyboard_double_arrow_left";

  return (
    <div className={styles}>
      <div className="bg-neutral-900 w-full">
        <nav className="flex justify-between items-center p-4">
          <div className="flex space-x-4">
            <button
              onClick={props.sidebarHandler}
              title="Toggle Sidebar"
              type="button"
              className={btnClass}
            >
              keyboard_double_arrow_left
            </button>
          </div>
          <h1 className="text-white text-center pl-9 text-2xl font-semibold">
            React Notes
          </h1>
          <div className="flex space-x-4">
            <button
              onClick={props.onNewNote}
              title="Create A New Note"
              className="text-yellow-400 material-symbols-outlined text-3xl font-normal hover:text-yellow-500"
            >
              add_circle
            </button>
            <button
              onClick={() => {
                props.onDeleteNote(props.selectedNoteKey);
              }}
              title="Delete This Note"
              className=" material-symbols-outlined text-yellow-400 text-3xl font-normal hover:text-yellow-500"
            >
              delete
            </button>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default NoteToolbar;
