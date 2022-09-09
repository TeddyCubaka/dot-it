import UserInfo from "./account-info";
import React from "react";

export default function Header() {
  return (
    <header className="header">
      {localStorage.getItem("token") !== "" ? 
      <>
      <div className="logo">
        <div className="logo-illustration">
          <div>
            <div></div>
          </div>
        </div>
        <span>Dot It</span>
      </div>
      {localStorage.getItem("token") ? <UserInfo />: false}
      {window.location.pathname !=="/" && localStorage.getItem("token") == false ? <UserInfo />: false}
      </>
      : <h2 className="text-center">Le token a expiré, veuillez vous reconnectez</h2>
      }
    </header>
  );
}
