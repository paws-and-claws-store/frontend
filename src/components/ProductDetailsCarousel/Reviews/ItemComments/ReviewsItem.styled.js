import styled from '@emotion/styled';
import { theme } from 'styles';
export const Item = styled.li`
  padding: 20px;
  border: 1px solid ${theme.colors.green};
`;

export const Comment = styled.p`
  font-size: ${theme.fontSizes.s};
  font-weight: ${theme.fontWeight.Light};
  line-height: ${theme.lineHeight.l};

  color: ${theme.colors.black};
`;

export const Nickname = styled.p`
  font-size: ${theme.fontSizes.l};
  font-weight: ${theme.fontWeight.Medium};
  line-height: ${theme.lineHeight.xl};

  color: ${theme.colors.black};

  margin-top: 20px;
`;

export const DateComment = styled.p`
  font-size: 14px;
  font-weight: ${theme.fontWeight.Light};
  line-height: ${theme.lineHeight.s};

  color: ${theme.colors.black};

  margin-top: 8px;
`;
