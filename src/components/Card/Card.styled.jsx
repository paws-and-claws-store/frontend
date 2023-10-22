import styled from '@emotion/styled';
import { theme } from 'styles';

export const BoxCard = styled.div`
  position: relative;
  width: ${theme.spacing.step * 76}px;
  height: ${theme.spacing.step * 128}px;
  border: 1px solid ${theme.colors.green};
  padding: ${theme.spacing.step * 5}px;

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
  gap: ${theme.spacing.step}px;
`;

export const WidthLink = styled.button`
  height: 20px;
  display: flex;
  align-items: center;
  background-color: ${theme.colors.beige};
  border-radius: 10px;
  border: 1px solid ${theme.colors.green};
  padding: 0 12px;
  color: ${theme.colors.green};

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

  &.unavailable {
    border-color: ${theme.colors.grey};
    background-color: ${theme.colors.grey};
    color: ${theme.colors.beige};
  }
  &.active.unavailable {
    border-color: ${theme.colors.grey};
    color: ${theme.colors.grey};
    background-color: ${theme.colors.secGrey};
  }

  & span {
    font-size: 14px;
    font-style: normal;
    font-weight: 300;
    line-height: 16px;
  }
`;

export const WeightListItem = styled.li``;

export const BrandNameSt = styled.h3`
  margin-top: ${theme.spacing.step * 5}px;
  color: ${theme.colors.orange};
  text-transform: uppercase;
  font-weight: ${theme.fontWeight.SemiBold};
  font-size: ${theme.fontSizes.s};
  line-height: ${theme.lineHeight.s};
`;

export const ProductNameSt = styled.h2`
  height: ${theme.spacing.step * 12}px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  overflow: hidden;
  margin-top: ${theme.spacing.step}px;
  color: ${theme.colors.black};
  text-transform: capitalize;
  font-weight: ${theme.fontWeight.Medium};
  font-size: ${theme.fontSizes.l};
  line-height: ${theme.lineHeight.xl};
`;

export const ShortDiscriptionSt = styled.p`
  height: ${theme.spacing.step * 10}px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  overflow: hidden;
  margin-top: ${theme.spacing.step}px;
  margin-top: ${theme.spacing.step}px;
  color: ${theme.colors.black};
  font-weight: ${theme.fontWeight.Light};
  font-size: ${theme.fontSizes.s};
  line-height: ${theme.lineHeight.l};
`;

export const Rating = styled.p`
  display: flex;
  align-items: center;

  gap: ${theme.spacing.step * 1}px;

  height: ${theme.spacing.step * 5}px;
  margin-top: ${theme.spacing.step * 2}px;

  color: ${theme.colors.grey};
  font-weight: ${theme.fontWeight.Regular};
  font-size: ${theme.fontSizes.s};
  line-height: ${theme.lineHeight.l};

  & span {
    font-size: 14px;
    font-style: normal;
    font-weight: 300;
    line-height: 16px;
  }
`;

export const PriceBox = styled.div`
  display: grid;
  /* flex-wrap: wrap; */
  align-items: center;
  /* width: 94px; */

  & p.line-through-text {
    font-size: ${theme.fontSizes.s};
    font-weight: ${theme.fontWeight.Medium};
    line-height: 1;

    text-decoration-line: line-through;
    text-transform: uppercase;
    color: ${theme.colors.grey};
  }
`;

export const PriceSt = styled.p`
  display: flex;
  color: ${props => props.theme.colors.orange};
  /* text-transform: uppercase; */
  /* font-family: 'rawline', sans-serif; */
  font-weight: ${theme.fontWeight.SemiBold};
  font-size: ${theme.fontSizes.l};
  line-height: ${theme.lineHeight.l};
  gap: 0;
`;

export const SymbolCurrency = styled.span`
  margin-left: ${theme.spacing.step}px;
  font-weight: ${theme.fontWeight.medium};
  font-size: ${theme.fontSizes.s};
  line-height: ${theme.lineHeight.m};
  .line-through-text & {
    font-size: 12px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: ${theme.spacing.step * 2}px;
  /* gap: ${theme.spacing.step * 4 - 2}px; */
`;

export const Button = styled.button`
  display: block;
  padding: ${theme.spacing.step * 2}px 0;
  width: ${theme.spacing.step * 39}px;
  /* height: ${theme.spacing.step * 10}px; */
  background-color: ${theme.colors.orange};
  color: ${theme.colors.white};
  border-radius: ${theme.spacing.step * 10}px;

  font-weight: ${theme.fontWeight.Medium};
  font-size: ${theme.fontSizes.l};
  line-height: ${theme.lineHeight.xl};

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
