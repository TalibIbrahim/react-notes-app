import React from "react";

import "./styles.css";

const ListContainer = (props) => {
  const styles =
    props.styles +
    "  z-20 p-3 flex-shrink-0 overflow-x-hidden dark bg-neutral-800";
  const widthStyle = { width: "350px" };

  return (
    <div className={styles} style={widthStyle}>
      <div className="mt-4 p-1 bg-neutral-900  rounded-2xl">
        {props.children}
      </div>
    </div>
  );
};

export default ListContainer;
