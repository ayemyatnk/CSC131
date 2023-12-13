import React, { useState, useEffect } from "react";
import { MEETING_API } from "../api/api";

const MeetingList = () => {
  const [meetings, setMeetings] = useState([]);

  useEffect(() => {
    // Fetch meetings from the backend
    fetch(MEETING_API.GET_MEETINGS)
      .then((response) => response.json())
      .then((data) => setMeetings(data))
      .catch((error) => console.error("Error fetching meetings:", error));
  }, []);

  return (
    <div>
      <h2>Meetings</h2>
      <ul>
        {meetings.map((meeting) => (
          <li key={meeting.meeting_id}>
            Meeting ID: {meeting.meeting_id}, Start: {meeting.start}, End: {meeting.end}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MeetingList;
