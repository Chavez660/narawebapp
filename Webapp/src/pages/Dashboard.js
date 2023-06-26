import React, { useState } from 'react';
import './Dashboard.css';

function Dashboard() {
  const [searchTerm, setSearchTerm] = useState("");
  const [jobs, setJobs] = useState([

    {
      id: 1,
      title: "Mason",
      company: "Semael",
      location: "Mindanao Cagayan de Oro",
      description: "We are looking for Muscle Men",
    },

    {
      id: 2,
      title: "Ocean cleaning",
      company: "Team Seas",
      location: "Luzon",
      description: "We are looking for people to join us to clean the seas",
    },
    
    {
      id: 3,
      title: "Baby sitting my baby",
      company: "Gonzales Family",
      location: "Visaya",
      description: "We are looking for people to baby sit my child negotiate the pay in chat.",
    },

    {
      id: 4,
      title: "Car Electrician",
      company: "Allision Corp.",
      location: "Mindanao, Cagayan de Oro",
      description: "I am looking for fixing wirings in Jeepneys",
    },

    {
      id: 5,
      title: "Plant Manager",
      company: "Regent Corp.",
      location: "Visayas",
      description: "We are looking for people to hire in our company!",
    },
    
    {
      id: 6,
      title: "Please do my Homework",
      company: "Pachecho",
      location: "Mindanao",
      description: "we can negotiate the price in chat",
    },

    // add more jobs here
  ]);
  const [isHidden, setIsHidden] = useState(false);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredJobs = jobs.filter((job) => {
    return (
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.location.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  const handleLogout = () => {
    window.location.href = '/logout'; // replace with your actual logout logic
  };
  return (
    <div className="dashboard-container">
      <div className="sidebar">
        <button className="dashboard-button" onClick={() => window.location.href = '/Profile'} type="text">Profile</button>
        <button className="dashboard-button" onClick={() => window.location.href = '/Messages'} type="text">Messages</button>
        <button className="dashboard-button" onClick={() => window.location.href = '/StatusScreen'} type="text">Status</button>
        <button className="dashboard-button" onClick={() => window.location.href = '/ReviewScreen'} type="text">Review</button>
        <button className="dashboard-button" onClick={handleLogout} type="text">Logout</button>
      </div>
      <div className={`main-content ${isHidden ? 'hidden' : ''}`}>
        <div className="job-board">
          <h2>Job Board</h2>
          <input type="text" placeholder="Search jobs" onChange={handleSearch} value={searchTerm} />
          <ul>
            {filteredJobs.map((job) => (
              <li key={job.id}>
                <h3>{job.title}</h3>
                <p>{job.company}</p>
                <p>{job.location}</p>
                <p>{job.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;

