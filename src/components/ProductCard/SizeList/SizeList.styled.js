import styled from '@emotion/styled';
import { theme } from 'styles';

export const ChooseSize = styled.p`
  font-size: ${theme.fontSizes.s};
  font-weight: ${theme.fontWeight.Medium};
  line-height: ${theme.lineHeight.l};
  color: ${theme.colors.black};
`;

export const SizeList = styled.ul`
  display: flex;
  gap: 12px;
  flex-wrap: wrap;

  margin-top: 12px;

  & > li {
    padding: 4px 24px;
    border: 1px solid ${theme.colors.green};
    border-radius: 20px;

    font-size: ${theme.fontSizes.s};
    font-weight: ${theme.fontWeight.Regular};
    line-height: ${theme.lineHeight.l};
    color: ${theme.colors.green};
  }
`;
