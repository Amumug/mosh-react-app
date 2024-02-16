import React, { useState } from 'react';
import { isValid } from 'zod';

export default function ExpenseTracker() {
  const [users, setUsers] = useState([]);
  const [totalAge, setTotalAge] = useState(0);
  const [formData, setFormData] = useState({ name: '', age: '', category: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, age, category } = formData;
    const newUser = { name, age, category };
    setUsers([...users, newUser]);
    setTotalAge(totalAge + parseInt(age));
    setFormData({ name: '', age: '', category: '' }); // Clear form fields after submission
    if (!categories.includes(category)) {
      setCategories([...categories, category]);
    }
  };
  const handleDelete = (index) => {
    const updatedUsers = [...users];
    const deletedUser = updatedUsers.splice(index, 1)[0];
    setUsers(updatedUsers);
    setTotalAge(totalAge - parseInt(deletedUser.age));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Description
          </label>
          <input
            id="name"
            name="name"
            type="text"
            className="form-control"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="age" className="form-label">
            Amount
          </label>
          <input
            id="age"
            name="age"
            type="number"
            className="form-control"
            value={formData.age}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="category" className="form-label">
            Category
          </label>
          <select
            id="category"
            name="category"
            className="form-control"
            value={formData.category}
            onChange={handleChange}
          >
            <option value="">Select Category</option>
            <option value="Groceries">Groceries</option>
            <option value="Utilities">Utilities</option>
            <option value="Entertainment">Entertainment</option>
          </select>
        </div>
        <button disabled={!isValid} type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
      

      <div className="container">
        <div className="table-responsive">
          
          <table className="table pt-6">
            <thead className="bg-light">
              <tr>
                <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">
                  Description
                </th>
                <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">
                  Amount
                </th>
                <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">
                  Category
                </th>
                <th scope="col" className="px-6 py-3 text-end text-xs font-medium text-gray-500 uppercase"></th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={index}>
                <td className="px-6 py-4">{user.name}</td>
                <td className="px-6 py-4">{user.age}</td>
                <td className="px-6 py-4">{user.category}</td>
                <td className="px-6 py-4">
                  <button
                    type="button"
                    className="btn btn-outline-danger"
                    onClick={() => handleDelete(index)} // Bind handleDelete function here
                  >
                    Delete
                  </button>
                </td>
              </tr>
              
              ))}
              <tr>
                <td className="px-6 py-4 fw-bolder">Total</td>
                <td className="px-6 py-4 font-bold">{totalAge}</td>
                <td className="px-6 py-4"></td>
                <td className="px-6 py-4"></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
