import React, { useEffect, useRef } from 'react';

import {
  LinkInvalidModalOverlay,
  LinkInvalidModalContent,
  CloseButton,
} from './LinkInvalidModal.styled';
import { useNavigate } from 'react-router';


export const LinkInvalidModal = () => {
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
    navigate('/');
  };
  return (
    <LinkInvalidModalOverlay onClick={closeModal}>
      <LinkInvalidModalContent ref={modalRef}>
        <p>На жаль посилання більше не дійсне Спробуйте ще раз відновити пароль!</p>
        <CloseButton onClick={closeModal}>Перейти на головну сторінку</CloseButton>
      </LinkInvalidModalContent>
    </LinkInvalidModalOverlay>
  );
};
