import React, { useState } from "react";
import { USER_API } from "../api/api";

const UserForm = ({ onSubmit, initialValues }) => {
  const [name, setName] = useState(initialValues.name || "");
  const [major, setMajor] = useState(initialValues.major || "");
  const [age, setAge] = useState(initialValues.age || "");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const userData = {
      name,
      major,
      age: parseInt(age, 10),
    };

    try {
      // If initialValues has user_id, it means we are editing an existing user
      if (initialValues.user_id) {
        const response = await fetch(USER_API.EDIT_USER(initialValues.user_id), {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userData),
        });

        if (response.ok) {
          // Call the onSubmit function with the updated user data
          onSubmit(userData);
        } else {
          console.error("Failed to edit user.");
        }
      } else {
        // Adding a new user
        const response = await fetch(USER_API.ADD_USER, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userData),
        });

        if (response.ok) {
          // Call the onSubmit function with the new user data
          onSubmit(userData);
        } else {
          console.error("Failed to add user.");
        }
      }
    } catch (error) {
      console.error("Error adding/editing user:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
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
