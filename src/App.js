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
  const deleteTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  return (
    <div className="app">
      <h1>Календарь дедлайнов</h1>
      <AddTaskForm onAddTask={addTask} />
      <div className="tasks-list">
        {tasks.map(task => (
          <TaskCard key={task.id} task={task} onDelete={deleteTask}/>
        ))}
      </div>
    </div>
  );
}
export default App;