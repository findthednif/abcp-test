import React, { memo } from "react";
import { IUserInfoProps } from "../Services/Types/types";
import './UserInfo.css';

function UserInfo({ user }: IUserInfoProps): JSX.Element {
  if (!user) {
    return <div>No user data</div>;
  }

  return (
    <div className="container">
      <div className="header">
        <div className="cell">Username</div>
        <div className="cell">Phone number</div>
      </div>
      <div className="row">
        <div className="cell">{user.name}</div>
        <div className="cell">{user.phone}</div>
      </div>
    </div>
  );
}

export default memo(UserInfo);
