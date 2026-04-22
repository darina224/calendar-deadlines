import './TaskCard.css';

function TaskCard({ task, onDelete }) {
  // Проверяем, просрочено ли задание
  const isOverdue = () => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const deadlineDate = new Date(task.deadline);
    deadlineDate.setHours(0, 0, 0, 0);
    return deadlineDate < today;
  };

  return (
    <div className={`task-card ${isOverdue() ? 'overdue' : ''}`}>
      <h3 className="task-title">{task.title}</h3>
      <p className="task-deadline">Дедлайн: {task.deadline}</p>
      <button className="delete-btn" onClick={() => onDelete(task.id)}>
        Удалить
      </button>
    </div>
  );
}

export default TaskCard;