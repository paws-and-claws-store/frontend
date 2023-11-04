import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';
import { theme } from 'styles';

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
  /* width: 52px; */
  width: ${theme.spacing.step * 13}px;
  /* height: 52px; */
  height: ${theme.spacing.step * 13}px;
  /* fill: #b2ab73; */
  fill: ${theme.colors.green};
  background-color: ${theme.colors.beige};

  padding: 10px;

  border-radius: 50%;
  border: 1px solid ${theme.colors.green};

  transition: all 0.25s ease-in-out;
  animation-name: ${movebtn};

  &:hover,
  &:focus {
    fill: ${theme.colors.secGreen};
    border: 1px solid ${theme.colors.secGreen};
  }

  &:active {
    fill: ${theme.colors.orange};
    border: 1px solid ${theme.colors.orange};
  }
`;

export const ScrollToTopStyled = styled.div`
  position: fixed;

  display: inline-flex;
  /* padding: 10px; */
  /* padding: ${theme.spacing.step * 2 + 2}px; */
  justify-content: center;
  align-items: center;
  /* gap: 10px; */
  gap: ${theme.spacing.step * 2 + 2}px;

  /* bottom: 23px; */
  bottom: ${theme.spacing.step * 5 + 3}px;

  /* right: 15px; */
  right: ${theme.spacing.step * 4 - 1}px;

  /* z-index: 20; */
  z-index: ${theme.zIndexes.foldedContainer};
  /* background-color: #f3ecdc; */
  /* background-color: ${theme.colors.beige}; */

  /* border: 1px solid #b2ab73; */
  /* border: 1px solid ${theme.colors.green}; */

  /* border-radius: 50%; */
  /* height: 52px; */
  height: ${theme.spacing.step * 13}px;

  /* width: 52px; */
  width: ${theme.spacing.step * 13}px;

  cursor: pointer;
  ${'' /* animation: movebtn 3s ease-in-out infinite; */}
  transition: all 0.25s ease-in-out;
  animation-name: ${movebtn};
  ${
    '' /* &:hover {
    animation: none;
    background: #fff;
    color: #551b54;
    border: 2px solid #551b54;
  } */
  }/* &:hover, &:focus {
    border: 1px solid ${theme.colors.secGreen};
  }

  &:active {
    border: 1px solid ${theme.colors.orange};
  } */
`;
