import React, { useState, useEffect } from "react";
import { USER_API } from "../api/api";

const TimeList = ({ userId }) => {
  const [userAvailability, setUserAvailability] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserAvailability = async () => {
      try {
        // Fetch user availability from the backend
        const response = await fetch(USER_API.GET_USER_AVAILABILITY(userId));
        const data = await response.json();
        setUserAvailability(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching user availability:", error);
        setLoading(false);
      }
    };

    fetchUserAvailability();
  }, [userId]);

  return (
    <div>
      <h2>User Availability</h2>
      {loading ? (
        <p>Loading user availability...</p>
      ) : (
        <ul>
          {userAvailability.map((time) => (
            <li key={time.time_id}>
              Time ID: {time.time_id}, Start: {time.start}, End: {time.end}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TimeList;
