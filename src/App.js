import { useState, useEffect } from 'react';
import './App.css';
import TaskCard from './TaskCard';
import AddTaskForm from './AddTaskForm';

function App() {
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem('tasks');
    if (saved) {
      return JSON.parse(saved);
    }
    return [];
  });

  // Сохраняем в localStorage при каждом изменении tasks
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

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