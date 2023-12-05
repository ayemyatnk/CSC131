// to add new users

import React, { useState } from "react";

const AddUserForm = () => {
  const [name, setName] = useState("");
  const [major, setMajor] = useState("");
  const [age, setAge] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    // Submit form data to the Spring Boot backend
    fetch("http://localhost:8080/api/user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        major,
        age: parseInt(age, 10), // Convert age to an integer
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("User added:", data);
        // Optionally update the local state or trigger a refetch of the user list
      })
      .catch((error) => console.error("Error adding user:", error));
  };

  return (
    <div>
      <h2>Add User</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <label>
          Major:
          <input type="text" value={major} onChange={(e) => setMajor(e.target.value)} />
        </label>
        <label>
          Age:
          <input type="text" value={age} onChange={(e) => setAge(e.target.value)} />
        </label>
        <button type="submit">Add User</button>
      </form>
    </div>
  );
};

export default AddUserForm;
