import React, { useEffect, useRef } from 'react';

import {
  PasswordModalOverlay,
  PasswordModalContent,
  CloseButton,
} from './PasswordRecoveryModal.styled';
import { useNavigate } from 'react-router';
// import { useDispatch } from 'react-redux';

export const PasswordRecoveryModal = ({ setShowPasswordModal }) => {
  // const dispatch = useDispatch();
  const navigate = useNavigate();

  const modalRef = useRef(null);

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
      closeModal();
    }
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      closeModal();
    }
  };

  const closeModal = () => {
    setShowPasswordModal(false);
    // dispatch(showUserPage())
    navigate('/');
  };
  return (
    <PasswordModalOverlay onClick={closeModal}>
      <PasswordModalContent ref={modalRef}>
        <p>Ваш пароль відновлено!</p>
        <CloseButton onClick={closeModal}>Увійти з новим паролем</CloseButton>
      </PasswordModalContent>
    </PasswordModalOverlay>
  );
};
