import React, { useEffect } from 'react';
import Loader from 'components/Loader/Loader';
import { NewPassForm } from 'components/PasswordRecovery/NewPassForm/NewPassForm';
import { CreateNewPassContainer } from './CreateNewPass.styled';
import { PasswordRecoveryModal } from 'components/PasswordRecovery/PasswordRecoveryModal/PasswordRecoveryModal';
import { useLocation, useNavigate } from 'react-router';
import { verifyResetToken } from 'redux/api/auth-operations';
import { useDispatch } from 'react-redux';
import { useAuth } from 'hooks/useAuth';
import { LinkInvalidModal } from 'components/PasswordRecovery/LinkInvalidModal/LinkInvalidModal';

export const CreateNewPass = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const searchParams = new URLSearchParams(location.search);
  const resetPasswordToken = searchParams.get('token');
  const { isResetToken, isNewPassStatus, isLoading } = useAuth();

  useEffect(() => {
    if (resetPasswordToken) {
      dispatch(verifyResetToken(resetPasswordToken));
    } else if(isResetToken && isResetToken === 400) {
      navigate('/');
    }else{
      navigate('/');
    }
  }, [navigate, dispatch, resetPasswordToken, isResetToken]);

  return isLoading && !isResetToken ? (
    <Loader/>
  ) : (
    <CreateNewPassContainer>
      {isResetToken === 401 && <LinkInvalidModal />}
      {isResetToken === 200 ? (
        isNewPassStatus !== 200 ? (
          <NewPassForm resetPasswordToken={resetPasswordToken} />
        ) : (
          <PasswordRecoveryModal />
        )
      ) : null}
    </CreateNewPassContainer>
  );
};
