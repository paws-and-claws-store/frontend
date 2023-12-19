import { useDispatch } from "react-redux";
import { UserPageContainer } from "./UserPage.styled";
import { UserInfo } from "components/UserInfo/UserInfo";
import { useEffect, useState } from "react";
import { userActivated } from "redux/slice/authSlice";
import { useAuth } from "hooks/useAuth";
import { UserModal } from "components/UserModal/UserModal";


export const UserPage = () => {
  const [showModal, setShowModal] = useState(true);
      const {isRegistered, isLoggedIn, user} = useAuth()
      const dispatch = useDispatch();

      useEffect(()=>{
        if(!isRegistered){
          dispatch(userActivated())
        }
        
      },[dispatch, isRegistered]);

    return (
      <UserPageContainer>
       {isRegistered&&showModal&&<UserModal setShowModal={setShowModal}/>}
        {isLoggedIn&&user.name&&<UserInfo/>}
      </UserPageContainer>
    );
  };