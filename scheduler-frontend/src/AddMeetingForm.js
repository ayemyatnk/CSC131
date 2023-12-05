// to add new meetings
import React, { useState } from "react";

const AddMeetingForm = () => {
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    // Submit form data to the Spring Boot backend
    fetch("http://localhost:8080/api/meeting", {
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
        console.log("Meeting added:", data);
        // Optionally update the local state or trigger a refetch of the meeting list
      })
      .catch((error) => console.error("Error adding meeting:", error));
  };

  return (
    <div>
      <h2>Add Meeting</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Start:
          <input type="text" value={start} onChange={(e) => setStart(e.target.value)} />
        </label>
        <label>
          End:
          <input type="text" value={end} onChange={(e) => setEnd(e.target.value)} />
        </label>
        <button type="submit">Add Meeting</button>
      </form>
    </div>
  );
};

export default AddMeetingForm;
