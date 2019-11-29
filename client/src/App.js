import React, { useEffect, Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";
import "./App.css";
import store from "./store";
import { Provider } from "react-redux";

//Components
import Login from "./components/auth/Login";
import Navbar from "./components/layout/Navbar";
import Dashboard from "./components/pages/Dashboard";
import Seasons from "./components/seasons/Seasons";
import AddTournamentModal from "./components/tournaments/AddTournamentModal";

const App = () => {
  useEffect(() => {
    M.AutoInit();
  });
  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Login />
          <Navbar />
          <div className="container">
            <Switch>
              <Route exact path="/" component={Login} />
              <Route exact path="/seasons" component={Seasons} />
            </Switch>
            <AddTournamentModal />
          </div>
        </Fragment>
      </Router>
    </Provider>
  );
};

export default App;
