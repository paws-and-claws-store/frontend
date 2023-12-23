import React from 'react';

import { ModalOverlay, ModalContent, CloseButton } from './UserModal.styled';
import { useAuth } from 'hooks/useAuth';
import { showUserPage } from 'redux/slice/authSlice';
import { useDispatch } from 'react-redux';

export const UserModal = ({ setShowModal }) => {
    const dispatch = useDispatch();
    const { user } = useAuth();
    
const closeModal = () =>{
    setShowModal(false)
    dispatch(showUserPage())
}
  return (
    <ModalOverlay onClick={closeModal}>
      <ModalContent>
        <p>Вітаємо, {user?.name}!</p>
        <p>Ваш обліковий запис успішно створено.</p>
        <p> Тепер ви можете</p>
        <p>- переглядати історію своїх замовлень</p>
        <p>- додавати товари до списку улюблених</p>
        <p>- отримувати інші переваги постійного користувача нашого магазину</p>
        <CloseButton onClick={closeModal}>{'>'}</CloseButton>
      </ModalContent>
    </ModalOverlay>
  );
};
