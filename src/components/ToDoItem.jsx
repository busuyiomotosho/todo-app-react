import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const ToDoItem = (props) => {
  const [isDone, setIsDone] = useState(false);
  const [done, setDone] = useState(false);

  const buttonChange = () => {
    setDone((prev) => {
      // return prev === "Completed" ? "Not Completed" : "Completed";
      return !prev;
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
    <div className="item">
      <input type="checkbox" name="checkbox" value={done} onChange= {handleButtonClick}/>
      <p style={{ textDecoration: isDone && "line-through" }}>{props.text}</p>
      {/* <button onClick={handleButtonClick}>{done}</button> */}
        <FontAwesomeIcon icon={faTrash} style={{color: "#7E1717",}} onClick={() => {
            props.onChecked(props.id);
          }} />
    </div>
  );
};

export default ToDoItem;
