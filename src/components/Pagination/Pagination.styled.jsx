import styled from '@emotion/styled';
import { theme } from 'styles';

export const BoxPagination = styled.div`
  margin: ${theme.spacing.step * 7}px auto 0;
  outline: 1px solid green;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: ${theme.spacing.step * 7}px;

  & svg {
    color: red;
    width: 32px;
    height: 32px;
  }
`;

export const BtnLoadMore = styled.button`
  width: ${theme.spacing.step * 76}px;
  color: ${theme.colors.orange};
  padding: ${theme.spacing.step * 4}px ${theme.spacing.step * 2 + 2}px;
  border: 1px solid ${theme.colors.orange};
  border-radius: ${theme.spacing.step * 10}px;

  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px; /* 100% */

  &:hover {
    color: ${theme.colors.green};
    border-color: ${theme.colors.green};
  }

  &:active {
    color: ${theme.colors.secGreen};
    border-color: ${theme.colors.secGreen};
  }
`;

export const NavPagination = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
`;
