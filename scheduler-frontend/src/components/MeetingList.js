import React, { useState, useEffect } from "react";
import { MEETING_API } from "../api/api";
import DeleteMeeting from "./DeleteMeeting";

const MeetingList = ({ onMeetingDeleted }) => {
  const [meetings, setMeetings] = useState([]);

  useEffect(() => {
    const fetchMeetings = async () => {
      try {
        const response = await fetch(MEETING_API.GET_ALL_MEETINGS);
        const data = await response.json();
        setMeetings(data);
      } catch (error) {
        console.error("Error fetching meetings:", error);
      }
    };

    fetchMeetings();
  }, []);

  const handleDeleteMeeting = async (meetingId) => {
    try {
      const response = await fetch(MEETING_API.DELETE_MEETING(meetingId), {
        method: "DELETE",
      });

      if (response.ok) {
        // Update the local state or trigger a refetch of the meeting list
        setMeetings((prevMeetings) => prevMeetings.filter((meeting) => meeting.meeting_id !== meetingId));

        // Optionally, you can also notify the parent component about the deletion
        if (onMeetingDeleted) {
          onMeetingDeleted(meetingId);
        }
      } else {
        console.error(`Failed to delete meeting with ID ${meetingId}.`);
      }
    } catch (error) {
      console.error("Error deleting meeting:", error);
    }
  };

  return (
    <div>
      <h2>Meetings</h2>
      <ul>
        {meetings.map((meeting) => (
          <li key={meeting.meeting_id}>
            Meeting ID: {meeting.meeting_id}, Start: {meeting.start}, End: {meeting.end}
            <DeleteMeeting meetingId={meeting.meeting_id} onDelete={() => handleDeleteMeeting(meeting.meeting_id)} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MeetingList;
