// src/components/UserList.js
import React, { useEffect, useState } from 'react';
import axios from '../axiosInstance';
import UserItem from './UserItem';
import UserForm from './UserForm';

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [editingUser, setEditingUser] = useState(null);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await axios.get('/users');
      setUsers(response.data);
    } catch (error) {
      console.error('Error fetching users', error);
    }
  };

  const addUser = async (user) => {
    try {
      const response = await axios.post('/users', user);
      setUsers([...users, response.data]);
    } catch (error) {
      console.error('Error adding user', error);
    }
  };

  const updateUser = async (user) => {
    try {
      const response = await axios.put(`/users/${user.id}`, user);
      setUsers(users.map((u) => (u.id === user.id ? response.data : u)));
      setEditingUser(null);
    } catch (error) {
      console.error('Error updating user', error);
    }
  };

  const deleteUser = async (userId) => {
    try {
      await axios.delete(`/users/${userId}`);
      setUsers(users.filter((user) => user.id !== userId));
    } catch (error) {
      console.error('Error deleting user', error);
    }
  };

  return (
    <div>
      <h1>User Management</h1>
      <UserForm addUser={addUser} updateUser={updateUser} editingUser={editingUser} setEditingUser={setEditingUser} />
      <ul>
        {users.map((user) => (
          <UserItem key={user.id} user={user} deleteUser={deleteUser} setEditingUser={setEditingUser} />
        ))}
      </ul>
    </div>
  );
};

export default UserList;
