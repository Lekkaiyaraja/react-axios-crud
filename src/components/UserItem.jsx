// src/components/UserItem.js
import React from 'react';

const UserItem = ({ user, deleteUser, setEditingUser }) => {
  return (
    <li>
      <h2>{user.name} ({user.username})</h2>
      <p>Email: {user.email}</p>
      <p>Phone: {user.phone}</p>
      <p>Website: <a href={`http://${user.website}`} target="_blank" rel="noopener noreferrer">{user.website}</a></p>
      <p>Address: {user.address.suite}, {user.address.street}, {user.address.city}, {user.address.zipcode}</p>
      <p>Company: {user.company.name}</p>
      <p>Catch Phrase: {user.company.catchPhrase}</p>
      <p>Business: {user.company.bs}</p>
      <button onClick={() => setEditingUser(user)}>Edit</button>
      <button onClick={() => deleteUser(user.id)}>Delete</button>
    </li>
  );
};

export default UserItem;
