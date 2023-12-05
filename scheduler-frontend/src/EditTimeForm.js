// to edit existing availability

import React, { useState } from "react";

const EditTimeForm = ({ timeId, start, end }) => {
  const [newStart, setNewStart] = useState(start);
  const [newEnd, setNewEnd] = useState(end);

  const handleSubmit = (event) => {
    event.preventDefault();

    // Submit form data to the Spring Boot backend for updating the availability
    fetch(`http://localhost:8080/api/user/1/availability/${timeId}?start=${newStart}&end=${newEnd}`, {
      method: "PUT",
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Availability updated:", data);
        // Optionally update the local state or trigger a refetch of the availability list
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
