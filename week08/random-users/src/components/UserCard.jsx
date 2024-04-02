import React from 'react';

import './styles.css';

const UserItem = ({ user }) => {
  const { name, email, location, phone, dob, picture } = user;

  const formattedDob = new Date(dob.date).toLocaleDateString();

  return (
    <div className="user-card">
      <img src={picture.large} alt={`${name.title} ${name.first} ${name.last}`} />
      <div>
        <h2>
          {name.title} {name.first} {name.last}
        </h2>
        <p>Email: {email}</p>
        <p>
          Location: {location.city}, {location.country}
        </p>
        <p>Phone: {phone}</p>
        <p>Date of Birth: {formattedDob}</p>
      </div>
    </div>
  );
};

export default UserItem;