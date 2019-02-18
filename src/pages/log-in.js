import React from "react";
import { PrivateRoute } from "../components";
import { Router } from "@reach/router";
import Login from "../components/Private/Login";
import Dashboard from "../components/Private/pages/Dashboard.js";
import Personal from "../components/Private/pages/Personal.js";
import {
  handleLogin,
  handleLogout,
  isLoggedIn
} from "../services/authentication/auth.js";
import { navigate } from "gatsby";
import styles from "../styles/pages/private.module.css";

const Logout = () => (
  <a
    href="/"
    onClick={event => {
      event.preventDefault();
      handleLogout();
      navigate("/log-in");
    }}
    className={styles.Logout}
  >
    Logout
  </a>
);

export default () => (
  <>
    {isLoggedIn() ? (
      <Logout />
    ) : (
      <>
        <h1>Private</h1>
        <Login private="/log-in/dashboard" handleLogin={handleLogin} />
      </>
    )}

    <Router>
      <PrivateRoute
        path="/log-in/dashboard"
        render={Dashboard}
        redirect={"/log-in"}
      />

      <PrivateRoute
        path="/log-in/personal"
        render={Personal}
        redirect={"/log-in"}
      />
    </Router>
  </>
);
