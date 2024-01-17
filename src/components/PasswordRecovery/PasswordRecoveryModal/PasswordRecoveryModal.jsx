import React, { useEffect, useRef } from 'react';
import { showUserMenu } from 'redux/slice/authSlice';
import {
  PasswordModalOverlay,
  PasswordModalContent,
  Content,
  CloseButton,
} from './PasswordRecoveryModal.styled';
import { useNavigate } from 'react-router';
import { useDispatch } from 'react-redux';

export const PasswordRecoveryModal = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const modalRef = useRef(null);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    document.addEventListener('mousedown', handleKeyDown);
    localStorage.setItem('changePassword', JSON.stringify({isChanged: true}));
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousedown', handleKeyDown);
      localStorage.removeItem('changePassword');
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
    dispatch(showUserMenu())
    navigate('/');
  };
  return (
    <PasswordModalOverlay onClick={closeModal}>
      <PasswordModalContent ref={modalRef}>
        <Content>Ваш пароль відновлено!</Content>
        <CloseButton onClick={closeModal}>Увійти з новим паролем</CloseButton>
      </PasswordModalContent>
    </PasswordModalOverlay>
  );
};
