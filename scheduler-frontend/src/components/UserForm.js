import React, { useState } from "react";
import { USER_API } from "../api/api";

const UserForm = ({ onSubmit, initialValues }) => {
  const [name, setName] = useState(initialValues.name || "");
  const [major, setMajor] = useState(initialValues.major || "");
  const [age, setAge] = useState(initialValues.age || "");
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const userData = {
      name,
      major,
      age: parseInt(age, 10),
    };

    try {
      let response;

      // If initialValues has user_id, it means we are editing an existing user
      if (initialValues.user_id) {
        response = await fetch(USER_API.EDIT_USER(initialValues.user_id), {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userData),
        });
      } else {
        // Adding a new user
        response = await fetch(USER_API.ADD_USER, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userData),
        });
      }

      if (!response.ok) {
        throw new Error(`Failed to ${initialValues.user_id ? "edit" : "add"} user.`);
      }

      // Call the onSubmit function with the new/updated user data
      onSubmit(userData);
    } catch (error) {
      console.error(`Error ${initialValues.user_id ? "editing" : "adding"} user:`, error.message);
      setError(`Failed to ${initialValues.user_id ? "edit" : "add"} user. Please try again.`);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {error && <div style={{ color: "red" }}>{error}</div>}

      <label>Name:</label>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />

      <label>Major:</label>
      <input type="text" value={major} onChange={(e) => setMajor(e.target.value)} required />

      <label>Age:</label>
      <input type="number" value={age} onChange={(e) => setAge(e.target.value)} required />

      <button type="submit">Submit</button>
    </form>
  );
};

export default UserForm;
