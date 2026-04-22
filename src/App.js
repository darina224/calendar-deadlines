import { useState } from 'react';
import './App.css';
import TaskCard from './TaskCard';
import AddTaskForm from './AddTaskForm';

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, title: 'Сдать проект', deadline: '2024-12-25' },
    { id: 2, title: 'Купить подарки', deadline: '2024-12-28' }
  ]);

  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  return (
    <div className="app">
      <h1>Календарь дедлайнов</h1>
      <AddTaskForm onAddTask={addTask} />
      <div className="tasks-list">
        {tasks.map(task => (
          <TaskCard key={task.id} task={task} />
        ))}
      </div>
    </div>
  );
}

export default App;