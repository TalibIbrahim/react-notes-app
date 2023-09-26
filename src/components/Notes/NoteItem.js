import React from "react";

const NoteItem = (props) => {
  return (
    <div
      onClick={props.onClick}
      className="p-4 bg-neutral-900 hover:rounded-lg border-b-2 border-neutral-800 hover:bg-neutral-700 hover:cursor-pointer transition ease-in "
    >
      <h2 className="text-lg text-white font-semibold font-sans ">
        {props.heading}
      </h2>
      <p className="text-lg font-normal text-neutral-400 font-sans truncate">
        {props.text}
      </p>
    </div>
  );
};
export default NoteItem;
