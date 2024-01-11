import styled from '@emotion/styled';
import { theme } from 'styles';

export const ViewedProductsContainer = styled.div`
  width: 100%;
`;

export const ViewedProductsTitel = styled.p`
  margin-top: 48px;
  margin-bottom: 4px;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
`;

export const ViewedProductsItem = styled.div``;

export const PrevBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 32px;
  height: 32px;
  border: 1px solid
    ${props => (props.disabled ? 'lightgray' : theme.colors.green)};
  border-radius: 50px;
  margin-left: auto;
  margin-top: auto;
  margin-right: 16px;
  margin-bottom: 17px;
  cursor: ${props => (props.disabled ? 'auto' : 'pointer')};
  &:hover {
    border-color: ${props =>
      props.disabled ? 'lightgray' : theme.colors.secGreen};
    > svg {
      fill: ${props => (props.disabled ? 'lightgray' : theme.colors.secGreen)};
    }
  }

  &:active {
    border-color: ${props =>
      props.disabled ? 'lightgray' : theme.colors.orange};
    > svg {
      fill: ${props => (props.disabled ? 'lightgray' : theme.colors.orange)};
    }
  }
  > svg {
    fill: ${props => (props.disabled ? 'lightgray' : theme.colors.green)};
  }
`;

export const NextBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 32px;
  height: 32px;
  border: 1px solid
    ${props => (props.disabled ? 'lightgray' : theme.colors.green)};
  border-radius: 50px;
  margin-bottom: 17px;
  margin-top: auto;
  cursor: ${props => (props.disabled ? 'auto' : 'pointer')};
  &:hover {
    border-color: ${props =>
      props.disabled ? 'lightgray' : theme.colors.secGreen};
    > svg {
      fill: ${props => (props.disabled ? 'lightgray' : theme.colors.secGreen)};
    }
  }

  &:active {
    border-color: ${props =>
      props.disabled ? 'lightgray' : theme.colors.orange};
    > svg {
      fill: ${props => (props.disabled ? 'lightgray' : theme.colors.orange)};
    }
  }

  > svg {
    fill: ${props => (props.disabled ? 'lightgray' : theme.colors.green)};
  }
`;
