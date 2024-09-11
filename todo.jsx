import React, { useState } from 'react';

function TodoList() {
  const [tasks, setTasks] = useState(["eat", "bathe", "sleep"]);
  const [newTask, setNewTask] = useState("");

  function handleInputChange(event) {
    setNewTask(event.target.value);
  }

  function addTask() {
    if (newTask.trim() !== "") {
      setTasks(t => [...t, newTask]);
      setNewTask("");
    }
  }

  function deleteTask(index) {
    setTasks(tasks.filter((_, i) => i !== index));
  }

  function moveUp(index) {
    if (index > 0) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index - 1]] = [updatedTasks[index - 1], updatedTasks[index]];
      setTasks(updatedTasks);
    }
  }

  function moveDown(index) {
    if (index < tasks.length - 1) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index + 1]] = [updatedTasks[index + 1], updatedTasks[index]];
      setTasks(updatedTasks);
    }
  }

  return (
    <div className="todo">
      <h2>Todo List</h2>
      <input
        type="text"
        placeholder="Enter a task"
        value={newTask}
        onChange={handleInputChange}
      />
      <button
        className="add-button"
        onClick={addTask}
      >
        Add
      </button>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            <span className="text">{task}</span>
            <button 
              className="delete-button"
              onClick={() => deleteTask(index)}
            >
              Delete
            </button>
            <button 
              className="move-up"
              onClick={() => moveUp(index)}
            >
              Move Up
            </button>
            <button 
              className="move-down"
              onClick={() => moveDown(index)}
            >
              Move Down
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;