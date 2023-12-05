// to display user availability

import React, { useState, useEffect } from "react";

const TimeList = () => {
  const [times, setTimes] = useState([]);

  useEffect(() => {
    // Fetch user availability from the Spring Boot backend
    fetch("http://localhost:8080/api/user/1/availability") // Update user_id as needed
      .then((response) => response.json())
      .then((data) => setTimes(data))
      .catch((error) => console.error("Error fetching user availability:", error));
  }, []);

  return (
    <div>
      <h2>User Availability</h2>
      <ul>
        {times.map((time) => (
          <li key={time.time_id}>
            Time ID: {time.time_id}, Start: {time.start}, End: {time.end}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TimeList;
