import React, { useState } from 'react';
import './Profile.css';

function ProfileScreen(props) {
  const [profilePicture, setProfilePicture] = useState(null);

  const handleProfilePictureChange = (event) => {
    const file = event.target.files[0];
    setProfilePicture(file);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // TODO: Handle profile picture submission
    console.log('Submitted profile picture:', profilePicture);
  };

  return (
    <div className="main">
    <div className="profile-container">
      <div className="profile-picture-container">
        <label htmlFor="profile-picture-upload" className="profile-picture-label">
          <img
            src={profilePicture ? URL.createObjectURL(profilePicture) : './default-profile-picture.jpg'}
            alt="Profile Picture"
            className="profile-picture"
          />
          <div className="profile-picture-text">Upload Picture</div>
        </label>
        <input
          id="profile-picture-upload"
          type="file"
          accept="image/*"
          onChange={handleProfilePictureChange}
          className="profile-picture-input"
        />
      </div>
      <div className="profile-info">
        <div className="profile-text-box">
          <h1 className="profile-name">John Doe</h1>
          <p className="profile-details">Age: 25</p>
          <p className="profile-details">Email: john.doe@example.com</p>
          <h2 className="profile-hobbies">Hobbies:</h2>
          <ul className="profile-hobbies-list">
            <li>Reading</li>
            <li>Swimming</li>
            <li>Hiking</li>
          </ul>
        </div>
      </div>
      <button className="dashboard-button" onClick={() => (window.location.href = '/')}>
        Go to Profile
      </button>
    </div>
    </div>
  );
}

export default ProfileScreen;
