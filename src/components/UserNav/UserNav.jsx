import React from "react";
import { logout } from "redux/api/auth-operations";
import { UserNavContainer, UserPageLink, LogOutBtn } from "./UserNav.styled";
import { useDispatch } from "react-redux";

export const UserNav = ({setUserMenuTogle}) => {

    // const {isRegistered, isLoggedIn} = useAuth()
    const dispatch = useDispatch();

    const onLogout = () => {
        dispatch(logout());
        setUserMenuTogle(false)
    }
        return (
          <UserNavContainer>
            <UserPageLink to='/user' onClick={()=>setUserMenuTogle(false)}>Мій профіль</UserPageLink>
            <LogOutBtn onClick={onLogout}>Вихід</LogOutBtn>
          </UserNavContainer>
        );
      };