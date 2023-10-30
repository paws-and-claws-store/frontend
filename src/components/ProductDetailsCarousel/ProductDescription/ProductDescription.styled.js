import styled from '@emotion/styled';
import { theme } from 'styles';

export const DescriptionContainer = styled.div`
  margin-top: 28px;
`;

export const ReadAllBtn = styled.button`
  font-size: ${theme.fontSizes.s};
  font-weight: ${theme.fontWeight.Medium};
  line-height: ${theme.lineHeight.l};
  color: ${theme.colors.orange};
`;


export const DescriptionWrapper = styled.div`

`;

export const DescriptionText = styled.p`
color: ${theme.colors.black};
font-size: ${theme.fontSizes.s};
  overflow: ${({readAll}) =>readAll? 'auto' : `hidden`};
  height: ${({readAll}) =>readAll? '100%' : `120px`};
  font-weight: ${theme.fontWeight.Light};
  line-height: ${theme.lineHeight.l};
  background-image: linear-gradient(to bottom, #000000, transparent );
  -webkit-background-clip: text;
  background-clip: text;
  color: ${({readAll}) =>readAll? `${theme.colors.black}` : `transparent`};;
`;