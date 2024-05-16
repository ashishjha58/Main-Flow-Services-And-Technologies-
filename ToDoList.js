import React, { useState } from 'react';
import './ToDoList.css';  //Import css  for styling

// State for managing tasks
const TodoList = () => {
const [tasks, setTasks] = useState([]);
const [inputValue, setInputValue] = useState('');

  //Event handler for adding tasks
const handleAddTask = () => {
    if (inputValue.trim() !== '') {
        setTasks([...tasks, { id: Date.now(),text: inputValue, completed: false }]);
        setInputValue('');
    }
};
  //Event handler for completing tasks
const handleCompleteTask = (taskId) => {
    const updatedTasks = tasks.map(task => 
        task.id === taskId ? { ...task, completed: !task.completed}:task
    );
    setTasks(updatedTasks);
};

//Event handler for deleting tasks
    const handleDeleteTask = (taskId) => {
        const filteredTask = tasks.filter((task => task.id !== taskId));
        setTasks(filteredTask);
    };

    return (
        <div className='todo-list'>
            <h1>TO-DO List</h1>
            <inputcs
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Add a new task"/>

    <button onClick={handleAddTask}>Add Task</button>
    <ul>
        {tasks.map(task => (
        <li key={task.id} className= {task.completed ? 'completed' : '' }>
            <span>{task.text}</span>
            <div>
                <button onClick={() => handleCompleteTask(task.id)}>
                {task.completed ? 'Undo' : 'Completed'}
                </button>
                <button onClick={() => handleDeleteTask(task.id)}>Delete</button>
            </div>
        </li>
        ))}
    </ul>
    </div>
);
};

export default TodoList;
