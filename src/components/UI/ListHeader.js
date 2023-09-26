import React from "react";

const ListHeader = (props) => {
  return (
    <div className="p-8 transition ease-in mb-2 bg-neutral-900 border-b-2 rounded-t-xl hover:cursor-default border-neutral-700 ">
      <h2 className="text-xl text-yellow-400 font-semibold font-sans text-center ">
        Your Notes
      </h2>
    </div>
  );
};
export default ListHeader;
