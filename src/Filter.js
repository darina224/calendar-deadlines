import './Filter.css';

function Filter({ filter, setFilter }) {
  return (
    <div className="filter">
      <label>Фильтр: </label>
      <select value={filter} onChange={(e) => setFilter(e.target.value)}>
        <option value="all">Все задания</option>
        <option value="week">Задания на текущей неделе</option>
        <option value="overdue">Просроченные</option>
      </select>
    </div>
  );
}

export default Filter;