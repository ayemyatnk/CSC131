import React, { useState } from "react";
import { USER_API } from "../api/api";

const EditTimeForm = ({ userId, timeId, start, end, onUpdate }) => {
  const [newStart, setNewStart] = useState(start);
  const [newEnd, setNewEnd] = useState(end);

  const handleSubmit = (event) => {
    event.preventDefault();

    // Submit form data to the backend for updating the availability
    fetch(USER_API.EDIT_USER_AVAILABILITY(userId, timeId), {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        start: parseInt(newStart, 10),
        end: parseInt(newEnd, 10),
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Availability updated:", data);
        onUpdate();
      })
      .catch((error) => console.error("Error updating availability:", error));
  };

  return (
    <div>
      <h2>Edit Availability</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Start:
          <input type="text" value={newStart} onChange={(e) => setNewStart(e.target.value)} />
        </label>
        <label>
          End:
          <input type="text" value={newEnd} onChange={(e) => setNewEnd(e.target.value)} />
        </label>
        <button type="submit">Update Availability</button>
      </form>
    </div>
  );
};

export default EditTimeForm;
