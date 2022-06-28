import React from "react";
import AuthService from "../services/auth.service";

const Profile = () => {
  const currentUser = AuthService.getCurrentUser();
  return (
    <div className="profile-container">
      <header className="jumbotron">
        <h3>
          <strong>{currentUser.username}</strong> profilis
        </h3>
      </header>
      <p>
        <strong>Vartotojo numeris:</strong> {currentUser.id}
      </p>
      <p>
        <strong>Vartotojo registracijos paštas:</strong> {currentUser.email}
      </p>
    </div>
  );
};
export default Profile;