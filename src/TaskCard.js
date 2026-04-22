import './TaskCard.css';

function TaskCard({ task, onDelete }) {
  return (
    <div className="task-card">
      <h3 className="task-title">{task.title}</h3>
      <p className="task-deadline">Дедлайн: {task.deadline}</p>
      <button className="delete-btn" onClick={() => onDelete(task.id)}>
        Удалить
      </button>
    </div>
  );
}

export default TaskCard;