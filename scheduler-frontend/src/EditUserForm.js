// to edit existing users
import React, { useState } from "react";

const EditUserForm = ({ userId, name: initialName, major: initialMajor, age: initialAge, onUpdate }) => {
  const [name, setName] = useState(initialName);
  const [major, setMajor] = useState(initialMajor);
  const [age, setAge] = useState(initialAge);

  const handleSubmit = (event) => {
    event.preventDefault();

    // Submit form data to the Spring Boot backend for updating the user
    fetch(`http://localhost:8080/api/user/${userId}?name=${name}&major=${major}&age=${parseInt(age, 10)}`, {
      method: "PUT",
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("User updated:", data);
        // Optionally update the local state or trigger a refetch of the user list
        onUpdate();
      })
      .catch((error) => console.error("Error updating user:", error));
  };

  return (
    <div>
      <h2>Edit User</h2>
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
        <button type="submit">Update User</button>
      </form>
    </div>
  );
};

export default EditUserForm;
