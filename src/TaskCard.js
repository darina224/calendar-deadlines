import './TaskCard.css';

function TaskCard({ task }) {
  return (
    <div className="task-card">
      <h3 className="task-title">{task.title}</h3>
      <p className="task-deadline">Дедлайн: {task.deadline}</p>
    </div>
  );
}

export default TaskCard;