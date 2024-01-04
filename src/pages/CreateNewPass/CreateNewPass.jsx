import React, { useState } from 'react';
import { NewPassForm } from 'components/PasswordRecovery/NewPassForm/NewPassForm';
import { CreateNewPassContainer } from './CreateNewPass.styled';
import { PasswordRecoveryModal } from 'components/PasswordRecovery/PasswordRecoveryModal/PasswordRecoveryModal';

export const CreateNewPass = () => {
  const [showPasswordModal, setShowPasswordModal] = useState(false);

  return <CreateNewPassContainer>
    {!showPasswordModal
    ?<NewPassForm setShowPasswordModal={setShowPasswordModal}/>
    :<PasswordRecoveryModal setShowPasswordModal={setShowPasswordModal}/>
  }</CreateNewPassContainer>;
};
