// src/components/UserForm.js
import React, { useState, useEffect } from 'react';

const UserForm = ({ addUser, updateUser, editingUser, setEditingUser }) => {
  const [user, setUser] = useState({
    name: '',
    username: '',
    email: '',
    phone: '',
    website: '',
    address: {
      street: '',
      suite: '',
      city: '',
      zipcode: ''
    },
    company: {
      name: '',
      catchPhrase: '',
      bs: ''
    }
  });

  useEffect(() => {
    if (editingUser) {
      setUser(editingUser);
    } else {
      setUser({
        name: '',
        username: '',
        email: '',
        phone: '',
        website: '',
        address: {
          street: '',
          suite: '',
          city: '',
          zipcode: ''
        },
        company: {
          name: '',
          catchPhrase: '',
          bs: ''
        }
      });
    }
  }, [editingUser]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name.includes('address')) {
      setUser({ ...user, address: { ...user.address, [name.split('.')[1]]: value } });
    } else if (name.includes('company')) {
      setUser({ ...user, company: { ...user.company, [name.split('.')[1]]: value } });
    } else {
      setUser({ ...user, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingUser) {
      updateUser(user);
    } else {
      addUser(user);
    }
    setUser({
      name: '',
      username: '',
      email: '',
      phone: '',
      website: '',
      address: {
        street: '',
        suite: '',
        city: '',
        zipcode: ''
      },
      company: {
        name: '',
        catchPhrase: '',
        bs: ''
      }
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" value={user.name} onChange={handleChange} placeholder="Name" required />
      <input type="text" name="username" value={user.username} onChange={handleChange} placeholder="Username" required />
      <input type="email" name="email" value={user.email} onChange={handleChange} placeholder="Email" required />
      <input type="text" name="phone" value={user.phone} onChange={handleChange} placeholder="Phone" required />
      <input type="text" name="website" value={user.website} onChange={handleChange} placeholder="Website" required />
      <input type="text" name="address.street" value={user.address.street} onChange={handleChange} placeholder="Street" required />
      <input type="text" name="address.suite" value={user.address.suite} onChange={handleChange} placeholder="Suite" required />
      <input type="text" name="address.city" value={user.address.city} onChange={handleChange} placeholder="City" required />
      <input type="text" name="address.zipcode" value={user.address.zipcode} onChange={handleChange} placeholder="Zipcode" required />
      <input type="text" name="company.name" value={user.company.name} onChange={handleChange} placeholder="Company Name" required />
      <input type="text" name="company.catchPhrase" value={user.company.catchPhrase} onChange={handleChange} placeholder="Catch Phrase" required />
      <input type="text" name="company.bs" value={user.company.bs} onChange={handleChange} placeholder="Business" required />
      <button type="submit">{editingUser ? 'Update' : 'Add'}</button>
      {editingUser && <button type="button" onClick={() => setEditingUser(null)}>Cancel</button>}
    </form>
  );
};

export default UserForm;
