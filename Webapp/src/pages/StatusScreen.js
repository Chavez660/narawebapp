import React, { useState } from 'react';
import './StatusScreen.css';

const statusOptions = [
  { value: 'in-progress', label: 'In Progress' },
  { value: 'completed', label: 'Completed' },
  { value: 'delayed', label: 'Delayed' },
];

function StatusScreen() {
  const [selectedStatus, setSelectedStatus] = useState('in-progress');

  const handleStatusChange = (event) => {
    setSelectedStatus(event.target.value);
  };

  return (
    <div className="status-screen">
      <h1 className="status-screen__title">Service Project Status</h1>
      <div className="status-screen__form">
        <label className="status-screen__label" htmlFor="status-select">
          Status:
        </label>
        <select
          className="status-screen__select"
          id="status-select"
          value={selectedStatus}
          onChange={handleStatusChange}
        >
          {statusOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <p className="status-screen__current-status">Current status: {selectedStatus}</p>
      </div>
    </div>
  );
}

export default StatusScreen;