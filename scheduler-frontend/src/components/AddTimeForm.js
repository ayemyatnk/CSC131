import React, { useState } from "react";
import { USER_API } from "../api/api";

const AddTimeForm = ({ onAvailabilityAdded }) => {
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    // Submit form data to the backend for adding a new availability
    fetch(USER_API.ADD_USER_AVAILABILITY(1), {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        start: parseInt(start, 10),
        end: parseInt(end, 10),
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Availability added:", data);
        onAvailabilityAdded(data);
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
