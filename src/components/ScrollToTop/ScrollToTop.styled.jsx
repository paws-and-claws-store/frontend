import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';

const movebtn = keyframes`  0%{
    transform: translateY(0px);
  }
  25%{
    transform: translateY(20px);
  }
  50%{
    transform: translateY(0px);
  }
  75%{
    transform: translateY(-20px);
  }
  100%{
    transform: translateY(0px);
  }`;

export const ScrollToTopIconStyled = styled.svg`
  width: 42px;
  height: 42px;
  fill: #b2ab73;
`;

export const ScrollToTopStyled = styled.div`
  position: fixed;

  display: inline-flex;
  padding: 10px;
  justify-content: center;
  align-items: center;
  gap: 10px;

  bottom: 23px;
  right: 15px;
  z-index: 20;
  background-color: #f3ecdc;
  border: 1px solid #e68314;
  border-radius: 50%;
  height: 50px;
  width: 50px;
  cursor: pointer;
  ${'' /* animation: movebtn 3s ease-in-out infinite; */}
  transition: all 0.5s ease-in-out;
  animation-name: ${movebtn};
  ${
    '' /* &:hover {
    animation: none;
    background: #fff;
    color: #551b54;
    border: 2px solid #551b54;
  } */
  }
`;
