import React from "react";

import "./styles.css";

const ListContainer = (props) => {
  const styles =
    props.styles +
    "  z-20 p-1 sm:p-3 flex-shrink-0  overflow-x-hidden dark bg-neutral-800";
  return (
    <div className={styles}>
      <div className="mt-4 list-container p-1 bg-neutral-900  rounded-2xl">
        {props.children}
      </div>
    </div>
  );
};

export default ListContainer;
