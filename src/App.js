import { useState, useEffect } from 'react';
import './App.css';
import Filter from './Filter';
import TaskCard from './TaskCard';
import AddTaskForm from './AddTaskForm';
import CurrentDate from './CurrentDate';

function App() {
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem('tasks');
    return saved ? JSON.parse(saved) : [];
  });
  const [filter, setFilter] = useState('all');

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
  const getSortedTasks = () => {
  return [...tasks].sort((a, b) => {
    return new Date(a.deadline) - new Date(b.deadline);
  });
  };
  const getFilteredTasks = () => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    const weekFromNow = new Date(today);
    weekFromNow.setDate(today.getDate() + 7);

    let filtered = [...tasks];

    if (filter === 'week') {
      filtered = filtered.filter(task => {
        const deadlineDate = new Date(task.deadline);
        deadlineDate.setHours(0, 0, 0, 0);
        return deadlineDate >= today && deadlineDate <= weekFromNow;
      });
    } else if (filter === 'overdue') {
      filtered = filtered.filter(task => {
        const deadlineDate = new Date(task.deadline);
        deadlineDate.setHours(0, 0, 0, 0);
        return deadlineDate < today;
      });
    }

    // Сортируем отфильтрованные задачи
    return filtered.sort((a, b) => new Date(a.deadline) - new Date(b.deadline));
    
    // После фильтрации и сортировки
    if (filtered.length === 0) {
      return []; // или можешь вернуть пустой массив
    }
  };

  return (
    <div className="app">
      <h1>Календарь дедлайнов</h1>
      <CurrentDate />
      <AddTaskForm onAddTask={addTask} />
      <Filter filter={filter} setFilter={setFilter} />
      <div className="tasks-list">
        {getFilteredTasks().length === 0 ? (
          <div className="empty-message">Нет заданий</div>
        ) : (
          getFilteredTasks().map(task => (
            <TaskCard key={task.id} task={task} onDelete={deleteTask} />
          ))
        )}
      </div>
    </div>
  );
}
export default App;