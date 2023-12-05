import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import UserForm from "./components/UserForm";
import UserList from "./components/UserList";
import UserPage from "./components/UserPage";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/user-form" component={UserForm} />
          <Route path="/user-list" component={UserList} />
          <Route path="/user-page/:userId" component={UserPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
