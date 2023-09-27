import React, { useState, useEffect, useRef } from "react";
import "../UI/styles.css";

const NoteText = (props) => {
  // Create refs for the input and textarea elements. (for the function below)
  const headingInputRef = useRef(null);
  const textAreaRef = useRef(null);

  // Handle the Enter key press in the input element
  const handleInputKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault(); // Prevent the default behavior of Enter (Submitting the form)
      textAreaRef.current.focus(); // Move focus to the textarea
    }
  };

  const [userInput, setUserInput] = useState({
    heading: props.selectedNote ? props.selectedNote.heading : "",
    text: props.selectedNote ? props.selectedNote.text : "",
    key: props.selectedNote ? props.selectedNote.key : "",
  });

  useEffect(() => {
    setUserInput({
      heading: props.selectedNote ? props.selectedNote.heading : "",
      text: props.selectedNote ? props.selectedNote.text : "",
      key: props.selectedNote ? props.selectedNote.key : "",
    });
  }, [props.selectedNote]);

  const headingChangeHandler = (event) => {
    setUserInput({ ...userInput, heading: event.target.value });
  };
  const textChangeHandler = (event) => {
    setUserInput({ ...userInput, text: event.target.value });
  };

  const focusLossHandler = () => {
    if (userInput.heading !== "") {
      let key = userInput.key ? userInput.key : Math.random();
      setUserInput({ ...userInput, key });
      props.onSave({
        [key]: { heading: userInput.heading, text: userInput.text },
      });
    }
  };

  const autoSaveInterval = 2000;

  const autoSave = () => {
    if (userInput.heading !== "") {
      let key = userInput.key ? userInput.key : Math.random();
      setUserInput({ ...userInput, key });
      props.onSave({
        [key]: { heading: userInput.heading, text: userInput.text },
      });
    }
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      autoSave();
    }, autoSaveInterval);

    return () => clearInterval(intervalId);
  }, [autoSaveInterval, autoSave]);

  return (
    <div
      className={
        props.width +
        " h-full   font-sans text-xl  outline-none border-none textarea-transition"
      }
    >
      <input
        type="text"
        ref={headingInputRef}
        placeholder="Note Heading"
        maxLength="30"
        onKeyDown={handleInputKeyDown}
        onChange={headingChangeHandler}
        value={userInput.heading}
        onBlur={focusLossHandler}
        className="w-full border-b border-neutral-200 py-4  outline-none text-center  text-xl sm:text-2xl lg:text-3xl font-semibold"
      ></input>

      <textarea
        ref={textAreaRef}
        placeholder="Click here to type..."
        onChange={textChangeHandler}
        onBlur={focusLossHandler}
        value={userInput.text}
        className="w-full h-full resize-none text-lg lg:text-2xl p-4 border-none outline-none"
      />
    </div>
  );
};

export default NoteText;
