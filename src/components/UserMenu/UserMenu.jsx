import { useAuth } from "hooks/useAuth";
import { UserMenuContainer } from "./UserMenu.styled";
import { LoginForm } from 'components/LoginForm/LoginForm';
import { UserNav } from "components/UserNav/UserNav";
import { useEffect, useRef } from "react";


export const UserMenu = ({setUserMenuTogle}) => {

    const {isLoggedIn} = useAuth();

    const userMenuRef = useRef(null);


    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown);
        document.addEventListener('mousedown', handleKeyDown);
        return () => {
          window.removeEventListener('keydown', handleKeyDown);
          document.removeEventListener('mousedown', handleKeyDown);
        };
      });
    
      const handleKeyDown = e => {
        if (e.code === 'Escape') {
          setUserMenuTogle(false);
        }
        if (userMenuRef.current && !userMenuRef.current.contains(e.target)) {
          setUserMenuTogle(false);
        }
      };
    
        return (
          <UserMenuContainer ref={userMenuRef}>
            {isLoggedIn 
            ? <UserNav setUserMenuTogle={setUserMenuTogle}/>
            : <LoginForm setUserMenuTogle={setUserMenuTogle}/>
            }
          </UserMenuContainer>
        );
      };