// add new availability
import React, { useState } from "react";

const AddTimeForm = () => {
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    // Submit form data to the Spring Boot backend
    fetch("http://localhost:8080/api/user/1/availability", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        start,
        end,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Availability added:", data);
        // Optionally update the local state or trigger a refetch of the availability list
      })
      .catch((error) => console.error("Error adding availability:", error));
  };

  return (
    <div>
      <h2>Add Availability</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Start:
          <input type="text" value={start} onChange={(e) => setStart(e.target.value)} />
        </label>
        <label>
          End:
          <input type="text" value={end} onChange={(e) => setEnd(e.target.value)} />
        </label>
        <button type="submit">Add Availability</button>
      </form>
    </div>
  );
};

export default AddTimeForm;
