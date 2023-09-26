import React from "react";

const AppContainer = (props) => {
  return <div className="flex h-screen bg-neutral-800">{props.children}</div>;
};

export default AppContainer;
