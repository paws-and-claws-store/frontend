import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { theme } from 'styles';

export const BoxCard = styled.div`
  position: relative;
  width: ${props => props.theme.spacing.step * 76}px;
  height: ${props => props.theme.spacing.step * 128}px;
  border: 1px solid ${props => props.theme.colors.green};
  padding: ${props => props.theme.spacing.step * 5}px;

  .heartIcon svg {
    position: absolute;
    top: 20px;
    right: 20px;
    fill: ${theme.colors.orange};

    /* & .active {
      fill: ${theme.colors.orange};
    } */
  }
`;

export const WeightList = styled.ul`
  position: absolute;
  top: 20px;
  left: 20px;
  display: flex;
  flex-direction: column;
  gap: ${props => props.theme.spacing.step * 1}px;

  font-size: 14px;
  font-style: normal;
  font-weight: 300;
  line-height: 16px;
`;

export const WidthLink = styled(Link)`
  display: inline-block;
  background-color: ${theme.colors.beige};
  border-radius: ${props => props.theme.spacing.step * 2 + 2}px;
  border: 1px solid ${props => props.theme.colors.green};
  padding: 2px 12px;
  color: ${theme.colors.green};

  &.active {
    border-color: ${props => props.theme.colors.orange};
    color: ${props => props.theme.colors.orange};
  }
`;

export const WeightListItem = styled.li``;

export const BrandNameSt = styled.h3`
  margin-top: ${props => props.theme.spacing.step * 5}px;
  color: ${props => props.theme.colors.orange};
  text-transform: uppercase;
  font-weight: ${props => props.theme.fontWeight.SemiBold};
  font-size: ${props => props.theme.fontSizes.s};
  line-height: ${props => props.theme.lineHeight.s};
`;

export const ProductNameSt = styled.h2`
  height: ${props => props.theme.spacing.step * 12}px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  overflow: hidden;
  margin-top: ${props => props.theme.spacing.step}px;
  color: ${props => props.theme.colors.black};
  text-transform: capitalize;
  font-weight: ${props => props.theme.fontWeight.Medium};
  font-size: ${props => props.theme.fontSizes.l};
  line-height: ${props => props.theme.lineHeight.xl};
`;

export const ShortDiscriptionSt = styled.p`
  height: ${props => props.theme.spacing.step * 10}px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  overflow: hidden;
  margin-top: ${props => props.theme.spacing.step}px;
  margin-top: ${props => props.theme.spacing.step}px;
  color: ${props => props.theme.colors.black};
  font-weight: ${props => props.theme.fontWeight.Light};
  font-size: ${props => props.theme.fontSizes.s};
  line-height: ${props => props.theme.lineHeight.l};
`;

export const Rating = styled.p`
  display: flex;

  gap: ${props => props.theme.spacing.step * 1}px;

  height: ${props => props.theme.spacing.step * 5}px;
  margin-top: ${props => props.theme.spacing.step * 2}px;

  color: ${props => props.theme.colors.green};
  font-weight: ${props => props.theme.fontWeight.Regular};
  font-size: ${props => props.theme.fontSizes.s};
  line-height: ${props => props.theme.lineHeight.l};
`;

export const PriceBox = styled.div`
  display: grid;
  /* flex-wrap: wrap; */
  align-items: center;
  /* width: 94px; */

  & .line-through-text {
    font-size: ${theme.fontSizes.s};
    font-weight: ${theme.fontWeight.Medium};
    line-height: 1;

    text-decoration-line: line-through;
    text-transform: uppercase;
    color: ${theme.colors.grey};
  }
`;

export const PriceSt = styled.span`
  color: ${props => props.theme.colors.orange};
  /* text-transform: uppercase; */
  /* font-family: 'rawline', sans-serif; */
  font-weight: ${props => props.theme.fontWeight.SemiBold};
  font-size: ${props => props.theme.fontSizes.l};
  line-height: ${props => props.theme.lineHeight.l};
`;

export const SymbolCurrency = styled.span`
  margin-left: ${props => props.theme.spacing.step}px;
  font-weight: ${props => props.theme.fontWeight.medium};
  font-size: ${props => props.theme.fontSizes.s};
  line-height: ${props => props.theme.lineHeight.m};
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: ${props => props.theme.spacing.step * 2}px;
  /* gap: ${props => props.theme.spacing.step * 4 - 2}px; */
`;

export const Button = styled.button`
  display: block;
  padding: ${props => props.theme.spacing.step * 2}px 0;
  width: ${props => props.theme.spacing.step * 39}px;
  /* height: ${props => props.theme.spacing.step * 10}px; */
  background-color: ${props => props.theme.colors.orange};
  color: ${props => props.theme.colors.white};
  border-radius: ${props => props.theme.spacing.step * 10}px;

  font-weight: ${props => props.theme.fontWeight.medium};
  font-size: ${props => props.theme.fontSizes.l};
  line-height: ${props => props.theme.lineHeight.xl};

  &:hover {
    background-color: ${props => props.theme.colors.green};
  }

  &:active {
    transform: scale(0.98);
  }

  &:disabled {
    background-color: ${theme.colors.grey};
    color: ${theme.colors.beige};
    cursor: auto;
    transform: scale(1);
  }
`;

export const QTYBox = styled.form`
  display: flex;
  gap: 2px;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px; /* 120% */

  & input {
    width: 50px;
    background-color: ${theme.colors.orange};
    color: ${theme.colors.white};
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px; /* 120% */
    text-align: center;
    outline: none;
    border: none;
  }
  & input:focus,
  & input:active {
    outline: none;
    border: none;
  }

  & button {
    display: flex;
    width: 52px;
    height: 40px;
    justify-content: center;
    align-items: center;
    text-align: center;
    gap: 10px;
    flex-shrink: 0;
    background-color: ${theme.colors.orange};
    color: ${theme.colors.white};
  }
  & button:hover,
  & button:focus {
    background-color: ${theme.colors.green};
  }

  & button:active {
    background-color: ${theme.colors.secGreen};
  }
`;

export const BTNDec = styled.button`
  border-radius: 20px 0px 0px 20px;
`;
export const BTNInc = styled.button`
  border-radius: 0px 20px 20px 0px;
`;

export const Image = styled.img`
  width: ${props => props.theme.spacing.step * 66}px;
  height: ${props => props.theme.spacing.step * 66}px;
  object-fit: cover;
`;

export const HeartBox = styled.div``;
