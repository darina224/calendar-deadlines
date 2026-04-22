import './App.css';
import TaskCard from './TaskCard';

function App() {
  // Временные данные для проверки
  const testTasks = [
    { id: 1, title: 'Сдать проект', deadline: '2024-12-25' },
    { id: 2, title: 'Купить подарки', deadline: '2024-12-28' }
  ];

  return (
    <div className="app">
      <h1>Календарь дедлайнов</h1>
      <div className="tasks-list">
        {testTasks.map(task => (
          <TaskCard key={task.id} task={task} />
        ))}
      </div>
    </div>
  );
}

export default App;