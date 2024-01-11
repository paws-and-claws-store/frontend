import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
import { theme } from 'styles';

export const QuntityContainer = styled.div`
  margin-top: 20px;
`;

export const QuintityInputWrapper = styled.div`
  position: relative;
  width: 156px;

  margin-top: 11px;
`;

export const ChangeQuntityLabel = styled.p`
  font-size: ${theme.fontSizes.s};
  font-weight: ${theme.fontWeight.Medium};
  line-height: ${theme.lineHeight.l};
  color: ${theme.colors.black};
`;

export const QuintityInput = styled.input`
  box-sizing: border-box;
  width: 156px;
  padding: 5px 22px;
  border: 1px solid ${theme.colors.green};

  transition: border-color 0.3s;
  border-radius: 40px;
  background-color: ${theme.colors.mainBackground};

  text-align: center;
  outline: none;
  font-size: ${theme.fontSizes.xl};
  font-weight: ${theme.fontWeight.Medium};
  line-height: ${theme.lineHeight.xxl};
  color: ${theme.colors.green};
  &:focus {
    border-color: ${theme.colors.orange};
    color: ${theme.colors.orange};
  }
`;

export const BtnDecrement = styled.button`
  position: absolute;
  top: 50%;
  left: 24px;
  transform: translatey(-50%);

  font-size: ${theme.fontSizes.xl};
  font-weight: ${theme.fontWeight.Medium};
  line-height: ${theme.lineHeight.xxl};
  color: ${theme.colors.green};
  &:hover {
    color: ${theme.colors.orange};
  }

  &:disabled {
    color: ${theme.colors.secGreen};
    cursor: default;
  }
`;

export const BtnIncrement = styled.button`
  position: absolute;
  top: 50%;
  right: 23px;
  transform: translateY(-50%);

  font-size: ${theme.fontSizes.xl};
  font-weight: ${theme.fontWeight.Medium};
  line-height: ${theme.lineHeight.xxl};
  color: ${theme.colors.green};
  &:hover {
    color: ${theme.colors.orange};
  }

  &:disabled {
    color: ${theme.colors.secGreen};
    cursor: default;
  }
`;

export const CountContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 72px;
  margin-top: 18px;
`;

export const CountSum = styled.p`
  font-size: ${props => (props.inStock ? '40px' : `${theme.fontSizes.xl}`)};
  font-weight: ${theme.fontWeight.SemiBold};
  line-height: ${props => (props.inStock ? '48px' : `${theme.lineHeight.xl}`)};
  color: ${props =>
    props.inStock ? `${theme.colors.orange}` : `${theme.colors.grey}`};
`;

export const SubmitButton = styled.button`
  padding: 16px 58px;
  background-color: ${theme.colors.orange};
  border-radius: 40px;
  font-size: ${theme.fontSizes.xl};
  font-weight: ${theme.fontWeight.Medium};
  line-height: ${theme.lineHeight.xl};
  color: ${theme.colors.beige};
  transition: background-color 0.3s;

  &:hover,
  &:focus {
    background-color: ${theme.colors.green};
  }

  &:active {
    background-color: ${theme.colors.secGreen};
  }

  &:disabled {
    background-color: ${theme.colors.grey};
    cursor: default;
  }
`;

export const InCartLink = styled(NavLink)`
  padding: 16px 58px;
  background-color: ${theme.colors.green};
  border-radius: 40px;
  font-size: ${theme.fontSizes.xl};
  font-weight: ${theme.fontWeight.Medium};
  line-height: ${theme.lineHeight.xl};
  color: ${theme.colors.beige};
  transition: background-color 0.3s;
`;

export const PriceBox = styled.div`
  display: grid;
  /* flex-wrap: wrap; */
  align-items: center;
  /* width: 94px; */

  & .line-through-text {
    font-size: ${theme.fontSizes.xl};
    font-weight: ${theme.fontWeight.SemiBold};
    line-height: 1;
    color: ${theme.colors.grey};
  }
`;

export const OldPrice = styled.span`
  text-decoration-line: line-through;
  text-transform: uppercase;
`;

export const PriceSt = styled.p`
  display: flex;
  color: ${props =>
    props.count === 0 ? `${theme.colors.grey}` : `${theme.colors.orange}`};
  /* text-transform: uppercase; */
  /* font-family: 'rawline', sans-serif; */
  font-weight: ${props => props.theme.fontWeight.SemiBold};
  font-size: 40px;
  line-height: normal;
  align-items: baseline;
  gap: 0;
`;

export const SymbolCurrency = styled.span`
  margin-left: ${props => props.theme.spacing.step}px;
  font-weight: ${theme.fontWeight.Medium};
  font-size: 28px;
  line-height: 40px;
`;
