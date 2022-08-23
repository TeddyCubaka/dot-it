import UserInfo from "./account-info";
import React from "react";

export default function Header() {
  return (
    <header>
      <div className="logo">
        <div className="logo-illustration">
          <div>
            <div></div>
          </div>
        </div>
        <span>Dot It</span>
      </div>
      <UserInfo />
    </header>
  );
}
