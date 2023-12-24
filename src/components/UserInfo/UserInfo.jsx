import React from "react";
import { useAuth } from "hooks/useAuth";
import { UserInfoContainer } from "./UserInfo.styled";

export const UserInfo = () => {

const {user} = useAuth()

    return (
      <UserInfoContainer>
        <div>{user.name}</div>
        <div>{user.email}</div>
      </UserInfoContainer>
    );
  };