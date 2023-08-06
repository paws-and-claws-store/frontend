import styled from '@emotion/styled';
import { theme } from 'styles';

export const ProductContainer = styled.div`
  margin-top: 55px;
  display: flex;
  justify-content: space-between;
  gap: 20px;

  .prodName {
    padding-bottom: 16px;
    border-bottom: 1px solid ${theme.colors.secGreen};
  }
`;
export const FlexBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ImageContainer = styled.div`
  width: 768px;
  /* height: 628px; */
`;

export const CardContainer = styled.div`
  width: 520px;
  height: 628px;
`;
