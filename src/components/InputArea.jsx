import React, { useState } from "react";

const InputArea = (props) => {
  const [toDo, setToDo] = useState("");

  const handleChange = (event) => {
    const newValue = event.target.value;
    setToDo(newValue);
  };

  return (
    <div>
      <div className="form">
        <input onChange={handleChange} name="toDo" type="text" value={toDo} />
        <button
          onClick={() => {
            props.addItem(toDo);
            setToDo("");
          }}
        >
          <span>Add</span>
        </button>
      </div>
    </div>
  );
};

export default InputArea;
