import styled from '@emotion/styled';
import { theme } from 'styles';
// import { NavLink } from 'react-router-dom';

export const DetailsListContainer = styled.div``;

export const InfoButtonList = styled.div`
  display: flex;
  gap: 48px;
`;

export const CustomNavLink = styled.button`
  position: relative;
  color: ${({ isActiveDescription, isActiveComposition, isActiveComments }) =>
    isActiveDescription || isActiveComposition || isActiveComments
      ? `${theme.colors.black}`
      : `${theme.colors.green}`};
  font-size: ${theme.fontSizes.xl};
  font-weight: ${theme.fontWeight.Medium};
  line-height: ${theme.lineHeight.xxl};
  cursor: pointer;
  &::after {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 1px;
    background-color: ${theme.colors.green};
    transform: scaleX(0);
    transition: transform 0.3s ease;
  }
  &:hover::after {
    transform: ${({
      isActiveDescription,
      isActiveComposition,
      isActiveComments,
    }) =>
      isActiveDescription || isActiveComposition || isActiveComments
        ? 'scaleX(0)'
        : 'scaleX(1)'};
  }
`;
