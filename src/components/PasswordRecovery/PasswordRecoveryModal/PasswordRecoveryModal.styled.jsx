import styled from '@emotion/styled';

export const PasswordModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const PasswordModalContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: white;
  width: 450px;
  height: 450px;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
`;

export const Content = styled.p`
  font-size: 30px;
`;

export const CloseButton = styled.button`
  font-size: 20px;
  background: #3498db;
  color: white;
  border: none;
  padding: 8px 16px;
  margin-top: 40px;
  border-radius: 4px;
  cursor: pointer;
`;
