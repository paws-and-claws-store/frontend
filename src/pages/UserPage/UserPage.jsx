import { useDispatch } from 'react-redux';
import { UserPageContainer } from './UserPage.styled';
import { UserInfo } from 'components/UserInfo/UserInfo';
import { useEffect, useState } from 'react';
import { useAuth } from 'hooks/useAuth';
import { UserModal } from 'components/UserModal/UserModal';
import { getCurrentUser } from 'redux/api/auth-operations';

export const UserPage = () => {
  const [showModal, setShowModal] = useState(true);
  const { isRegistered, isLoggedIn, user } = useAuth();
  const dispatch = useDispatch();

  useEffect(() => {
      dispatch(getCurrentUser());
  }, [dispatch]);

  return (
    <UserPageContainer>
      {isRegistered && showModal && <UserModal setShowModal={setShowModal} />}
      {isLoggedIn && user?.name && <UserInfo />}
    </UserPageContainer>
  );
};
