import React, { useState } from "react";
import { USER_API } from "../api/api";

const AddUserForm = ({ onUserAdded }) => {
  const [name, setName] = useState("");
  const [major, setMajor] = useState("");
  const [age, setAge] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    // Submit form data to the backend for adding a new user
    fetch(USER_API.ADD_USER, {
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
        onUserAdded(data);
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
