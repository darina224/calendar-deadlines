import { useState, useEffect } from 'react';
import './CurrentDate.css';

function CurrentDate() {
  const [currentDate, setCurrentDate] = useState('');

  useEffect(() => {
    const today = new Date();
    const formattedDate = today.toLocaleDateString('ru-RU', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
    setCurrentDate(formattedDate);
  }, []);

  return (
    <div className="current-date">
      <span className="date-label">Текущая дата:</span>
      <span className="date-value">{currentDate}</span>
    </div>
  );
}

export default CurrentDate;