import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const ToDoItem = (props) => {
  const [isDone, setIsDone] = useState(false);
  const [done, setDone] = useState("Completed");

  const buttonChange = () => {
    setDone((prev) => {
      return prev === "Completed" ? "Not Completed" : "Completed";
    });
  };

  const strike = () => {
    setIsDone((prev) => {
      return !prev;
    });
  };

  const handleButtonClick = () => {
    buttonChange();
    strike();
  };

  return (
    <div>
      <li style={{ textDecoration: isDone && "line-through" }}>
        {props.text} <button onClick={handleButtonClick}>{done}</button>{" "}
        <FontAwesomeIcon icon={faTrash} style={{color: "#e73718",}} onClick={() => {
            props.onChecked(props.id);
          }} />
      </li>
    </div>
  );
};

export default ToDoItem;
