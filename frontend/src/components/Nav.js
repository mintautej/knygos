import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AuthService from "../services/auth.service";

function Nav() {
  const [currentUser, setCurrentUser] = useState(undefined);

  useEffect(() => {
    const user = AuthService.getCurrentUser();
    if (user) {
      setCurrentUser(user);
    }
  }, []);

  const logOut = () => {
    AuthService.logout();
  };

  return (
    <nav className="navbar navbar-expand navbar-dark bg-warning">
      <Link to={"/"} className="navbar-brand">
        Knygų rezervacija - lengvai!
      </Link>
      {currentUser ? (
        <div className="navbar-nav ">
          <li className="nav-item">
            <Link to={"/profile"} className="nav-link">
              {currentUser.username} profilis
            </Link>
          </li>
          <li className="nav-item">
            <a href="/login" className="nav-link" onClick={logOut}>
              Atsijungti
            </a>
          </li>
          
        </div>
      ) : (
        <div className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link to={"/login"} className="nav-link">
              Prisijungti
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/register"} className="nav-link">
              Užsiregistruoti
            </Link>
          </li>
        </div>
      )}
    </nav>
  );
}

export default Nav;
