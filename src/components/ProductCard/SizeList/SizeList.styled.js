import styled from '@emotion/styled';
import { theme } from 'styles';

export const SizeListLinkContainer = styled.div`
  margin-top: auto;
`;

export const ChooseSize = styled.p`
  font-size: ${theme.fontSizes.s};
  font-weight: ${theme.fontWeight.Medium};
  line-height: ${theme.lineHeight.l};
  color: ${theme.colors.black};
  /* margin-top: 1px; */
`;

export const SizeList = styled.ul`
  display: flex;
  gap: 10.6px;
  flex-wrap: wrap;

  margin-top: 10px;

  & > li {
    /* padding: 4px 24px;
    border: 1px solid ${theme.colors.green};
    border-radius: 20px;

    font-size: ${theme.fontSizes.s};
    font-weight: ${theme.fontWeight.Regular};
    line-height: ${theme.lineHeight.l};
    color: ${theme.colors.green}; */
  }
`;

export const WidthBtn = styled.button`
  display: inline-block;
  background-color: ${theme.colors.beige};
  border-radius: ${theme.spacing.step * 5}px;
  border: 1px solid ${theme.colors.green};
  padding: 4px 24px;
  color: ${theme.colors.green};
  box-sizing: border-box;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;

  &:hover,
  &:focus {
    border-color: ${theme.colors.secGreen};
    color: ${theme.colors.secGreen};
  }

  &.active,
  &:active {
    border-color: ${theme.colors.orange};
    color: ${theme.colors.orange};
  }

  &.active.unavailable {
    border-color: ${theme.colors.grey};
    background-color: ${theme.colors.grey};
    color: ${theme.colors.beige};
  }
  &.unavailable {
    border-color: ${theme.colors.secBlack};
    background-color: ${theme.colors.secGrey};
    color: ${theme.colors.secBlack};
  }
`;
