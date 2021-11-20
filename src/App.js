import React, { createContext, useState } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useRouteMatch,
  useParams,
} from "react-router-dom";
import Home from "./components/Home/Home/Home";
import Appointment from "./components/Appointment/Appointment/Appointment";
import Login from "./components/Login/Login/Login";
import Dashboard from "./components/Dashboard/Dashboard/Dashboard";
import AllPatients from "./components/AllPatients/AllPatients/AllPatients";
import AddDoctor from "./components/AddDoctor/AddDoctor";
import NotFound from "./components/Shared/NotFound/NotFound";
import PrivateRoute from "./components/Login/PrivateRoute/PrivateRoute";
import Contact from "./components/Home/Contact/Contact";
import Blogs from "./components/Home/Blogs/Blogs";
import Doctor from "./components/Home/Doctor/Doctor";
import MakeAdmin from "./components/Dashboard/MakeAdmin/MakeAdmin";

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/appointment">
            <Appointment></Appointment>
          </Route>
          <Route path="/MakeAppointment">
            <MakeAdmin></MakeAdmin>
          </Route>
          <Route path="/doctor/dashboard">
            <Dashboard></Dashboard>
          </Route>
          <Route path="/doctor/allPatients">
            <AllPatients></AllPatients>
          </Route>
          <Route path="/doctor/AddDoctor">
            <AddDoctor></AddDoctor>
          </Route>
          <Route path="/contact">
            <Contact></Contact>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
