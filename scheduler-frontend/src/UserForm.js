import React, { useState } from "react";
import axios from "axios";

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
      // Send the user data to the backend
      const response = await axios.post("http://localhost:8080/api/user", userData);

      // Call the onSubmit function with the new user data
      onSubmit(response.data);
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
