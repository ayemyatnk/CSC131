import React from "react";
import MeetingList from "./components/MeetingList";
import AddMeetingForm from "./components/AddMeetingForm";
import EditMeetingForm from "./components/EditMeetingForm";
import DeleteMeeting from "./components/DeleteMeeting"; // Import DeleteMeeting component

import TimeList from "./components/TimeList";
import AddTimeForm from "./components/AddTimeForm";
import EditTimeForm from "./components/EditTimeForm";
import DeleteTime from "./components/DeleteTime"; // Import DeleteTime component

import UserList from "./components/UserList";
import AddUserForm from "./components/AddUserForm";
import EditUserForm from "./components/EditUserForm";
import DeleteUser from "./components/DeleteUser"; // Import DeleteUser component

function App() {
  return (
    <div className="App">
      <div>
        <h1>Meeting Scheduler App</h1>
        {/* Meeting components */}
        <MeetingList />
        <AddMeetingForm />
        <EditMeetingForm />
        <DeleteMeeting />
      </div>

      <div>
        <h1>Availability Scheduler</h1>
        {/* Time components */}
        <TimeList />
        <AddTimeForm />
        <EditTimeForm />
        <DeleteTime />
      </div>

      <div>
        <h1>User Management</h1>
        {/* User components */}
        <UserList />
        <AddUserForm />
        <EditUserForm />
        <DeleteUser />
      </div>
    </div>
  );
}

export default App;
