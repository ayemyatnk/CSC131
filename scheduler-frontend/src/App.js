import React from "react";
import MeetingList from "./components/MeetingList";
import AddMeetingForm from "./components/AddMeetingForm";
import EditMeetingForm from "./components/EditMeetingForm";
import TimeList from "./components/TimeList";
import AddTimeForm from "./components/AddTimeForm";
import UserList from "./components/UserList";
import AddUserForm from "./components/AddUserForm";
import EditUserForm from "./components/EditUserForm";
import EditTimeForm from "./components/EditTimeForm";

function App() {
  return (
    <div className="App">
      <div>
        <h1>Meeting Scheduler App</h1>
        {/* Meeting components */}
        <MeetingList />
        <AddMeetingForm />
        <EditMeetingForm />
      </div>

      <div>
        <h1>Availability Scheduler</h1>
        {/* Time components */}
        <TimeList />
        <AddTimeForm />
        <EditTimeForm />
      </div>

      <div>
        <h1>User Management</h1>
        {/* User components */}
        <UserList />
        <AddUserForm />
        <EditUserForm />
      </div>
    </div>
  );
}

export default App;
