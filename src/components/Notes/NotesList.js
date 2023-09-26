import React from "react";
import ListContainer from "../UI/ListContainer";
import ListHeader from "../UI/ListHeader";
import NoteItem from "./NoteItem";

const NotesList = (props) => {
  return (
    <ListContainer styles={props.display}>
      <ListHeader />
      {/* Rendering the list dynamically */}
      {Object.entries(props.notes).map((note) => {
        return (
          <NoteItem
            key={note[0]}
            heading={note[1].heading}
            text={note[1].text}
            onClick={() => props.onSelect({ key: note[0], ...note[1] })}
          />
        );
      })}
    </ListContainer>
  );
};

export default NotesList;
