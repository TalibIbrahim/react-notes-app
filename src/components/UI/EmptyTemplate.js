import React from "react";

const EmptyTemplate = (props) => {
  return (
    <div className="w-full bg-neutral-900 text-xl flex flex-col items-center justify-center text-center h-screen">
      <h2 className="mb-4 text-white font-semibold">
        Welcome to the React Notes App!
      </h2>
      <p className="mb-4 text-neutral-400 font-normal">
        Create a new note by clicking the button below
      </p>
      <button
        onClick={props.onNewNote}
        className="px-5 py-3 rounded-3xl text-lg font-normal bg-neutral-700 text-yellow-300 hover:shadow-md hover:shadow-black hover:text-black hover:font-semibold hover:bg-yellow-500 transition ease-out backdrop-blur-xl"
      >
        New Note
      </button>
    </div>
  );
};

export default EmptyTemplate;
