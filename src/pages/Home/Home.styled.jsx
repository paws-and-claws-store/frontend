import styled from '@emotion/styled';

import { theme } from 'styles';

export const Hero = styled.section`
  margin-top: ${theme.spacing.step * 4 + 2}px;
`;

export const Box = styled.div`
  text-align: center;
  padding: 20%;
`;

export const Title = styled.h2`
  height: 32px;
  display: flex;
  align-items: center;
  font-size: ${theme.fontSizes.xl};
  color: ${theme.colors.black};
  font-weight: ${theme.fontWeight.Medium};
  line-height: 1;
  margin-top: ${theme.spacing.step * 12}px;
  margin-bottom: ${theme.spacing.step * 12 + 3}px;
`;
