import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [taskInput, setTaskInput] = useState("");
  const [tasks, setTasks] = useState([]);

  const todo = () => {
    const listItems = [];
    for (let i = 0; i < tasks.length; i++) {
      listItems.push(
        <div className="listItems">
          <span className="croix">☓</span>
          <span
            className={tasks[i].isDone === true ? "item" : "itembarre"}
            onClick={() => {
              const newTasks2 = [...tasks];
              console.log(tasks[i].isDone);
              newTasks2[i].isDone = !newTasks2[i].isDone;
              setTasks(newTasks2);
            }}
          >
            {tasks[i].name}
          </span>
        </div>
      );
    }
    return listItems;
  };

  return (
    <div className="App">
      <h1>To-Do list</h1>
      <div className="list-item"></div>
      <div>{todo()}</div>
      <form
        className="form"
        onSubmit={event => {
          event.preventDefault();
          const newTasks = [...tasks];
          newTasks.push({ name: taskInput, isDone: true });
          setTasks(newTasks);
        }}
      >
        <input
          className="task-input"
          type="text"
          name="input"
          value={taskInput}
          onChange={event => setTaskInput(event.target.value)}
        ></input>
        <input
          className="submit"
          type="submit"
          value="Ajouter une tâche"
        ></input>
      </form>
    </div>
  );
};

export default App;
