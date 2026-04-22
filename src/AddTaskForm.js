import { useState } from 'react';
import './AddTaskForm.css';

function AddTaskForm({ onAddTask }) {
  const [title, setTitle] = useState('');
  const [deadline, setDeadline] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim() && deadline) {
      onAddTask({
        id: Date.now(),
        title: title.trim(),
        deadline: deadline
      });
      setTitle('');
      setDeadline('');
    }
  };

  return (
    <form className="add-task-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Название задания"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <input
        type="date"
        value={deadline}
        onChange={(e) => setDeadline(e.target.value)}
        required
      />
      <button type="submit">Добавить задание</button>
    </form>
  );
}

export default AddTaskForm;