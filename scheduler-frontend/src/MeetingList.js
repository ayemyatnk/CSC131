// to display a list of meetings
import React, { useState, useEffect } from "react";

const MeetingList = () => {
  const [meetings, setMeetings] = useState([]);

  useEffect(() => {
    // Fetch meetings from the Spring Boot backend
    fetch("http://localhost:8080/api/meeting")
      .then((response) => response.json())
      .then((data) => setMeetings(data))
      .catch((error) => console.error("Error fetching meetings:", error));
  }, []);

  return (
    <div>
      <h2>Meetings</h2>
      <ul>
        {meetings.map((meeting) => (
          <li key={meeting.meetingId}>
            Meeting ID: {meeting.meetingId}, Start: {meeting.start}, End: {meeting.end}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MeetingList;
