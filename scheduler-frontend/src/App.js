import MeetingList from "./MeetingList";
import AddMeetingForm from "./AddMeetingForm";
import EditMeetingForm from "./EditMeetingForm";
import TimeList from "./TimeList";
import AddTimeForm from "./AddTimeForm";
import UserList from "./UserList";
import AddUserForm from "./AddUserForm";
import EditUserForm from "./EditUserForm";
import EditTimeForm from "./EditTimeForm";

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
