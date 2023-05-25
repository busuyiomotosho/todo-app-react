import React, { useState } from "react";
import InputArea from "./InputArea";
import ToDoItem from "./ToDoItem";

function App() {
  const [addedToDo, setAddedTodo] = useState([]);

  const addToDo = (toDo) => {
    setAddedTodo((prev) => {
      return [...prev, toDo];
    });
  };

  const deleteToDo = (id) => {
    setAddedTodo((prev) => {
      return prev.filter((addedToDo, index) => {
        return index !== id;
      });
    });
  };

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <InputArea addItem={addToDo} />
      <div>
          {addedToDo.map((toDoItem, index) => (
            <ToDoItem
              key={index}
              id={index}
              text={toDoItem}
              onChecked={deleteToDo}
            />
          ))}
      </div>
    </div>
  );
}

export default App;
