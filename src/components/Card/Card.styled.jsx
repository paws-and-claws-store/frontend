import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { theme } from 'styles';

export const BoxCard = styled.div`
  position: relative;
  width: ${theme.spacing.step * 76}px;
  height: ${theme.spacing.step * 128}px;
  border: 1px solid ${theme.colors.green};
  padding: ${theme.spacing.step * 5 - 1}px;

  .heartIcon svg {
    position: absolute;
    top: 19px;
    right: 19px;
    fill: ${theme.colors.orange};
  }

  &:hover {
    /* transform: ${props => (props.offScale ? 'scale(1)' : 'scale(1.01)')}; */
    /* box-shadow: ${props =>
      props.offScale ? null : '0px 16px 48px 0px rgba(0, 0, 0, 0.176)'}; */

    /* box-shadow: 0 7px 30px -10px rgba(150, 170, 180, 0.5); */
    /* box-shadow: 0px -25px 20px -20px rgba(0, 0, 0, 0.45),
      0px 25px 20px -20px rgba(0, 0, 0, 0.45); */
    box-shadow: 0px -21px 20px -20px rgba(0, 0, 0, 0.3),
      0px 23px 20px -20px rgba(0, 0, 0, 0.3);
  }
`;

export const WeightList = styled.ul`
  position: absolute;
  top: 19px;
  left: 19px;
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
    border-color: ${theme.colors.secBlack};
    background-color: ${theme.colors.secGrey};
    color: ${theme.colors.secBlack};
  }
  &.active.unavailable,
  &.unavailable:hover {
    border-color: ${theme.colors.grey};
    color: ${theme.colors.beige};
    background-color: ${theme.colors.grey};
  }

  & span {
    font-size: 14px;
    font-style: normal;
    font-weight: 300;
    line-height: 16px;
  }
`;

export const WeightListItem = styled.li``;

export const BrandNameSt = styled(Link)`
  display: block;
  margin-top: ${theme.spacing.step * 5}px;
  color: ${theme.colors.orange};
  text-transform: uppercase;
  font-weight: ${theme.fontWeight.SemiBold};
  font-size: ${theme.fontSizes.s};
  line-height: ${theme.lineHeight.s};

  &:hover {
    text-decoration: underline;
  }

  &:active {
    color: ${theme.colors.green};
    text-decoration: none;
  }
`;

export const FixedBlock = styled.div`
  overflow: hidden;
  display: flex;
  align-items: center;
  white-space: wrap;
  margin-top: ${theme.spacing.step}px;
`;

export const ProductNameSt = styled.div`
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  color: ${theme.colors.black};
  text-transform: capitalize;
  font-weight: ${theme.fontWeight.Medium};
  font-size: ${theme.fontSizes.l};
  line-height: ${theme.lineHeight.xl};
`;

export const ShortDiscriptionSt = styled.p`
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;

  color: ${theme.colors.black};
  font-weight: ${theme.fontWeight.Light};
  font-size: ${theme.fontSizes.s};
  line-height: ${theme.lineHeight.l};
`;

export const Rating = styled.p`
  display: flex;
  align-items: baseline;

  gap: ${theme.spacing.step * 1}px;

  height: ${theme.spacing.step * 5}px;
  margin-top: ${theme.spacing.step * 2 + 1}px;

  color: ${theme.colors.grey};
  font-weight: ${theme.fontWeight.Regular};
  font-size: ${theme.fontSizes.s};
  line-height: ${theme.lineHeight.l};

  & span:last-child {
    font-size: 14px;
    font-style: normal;
    font-weight: 300;
    line-height: 16px;
  }
`;

export const PriceBox = styled.div`
  display: flex;
  align-items: baseline;
  flex-direction: column;
  /* margin-top: 8px; */
  /* flex-wrap: wrap; */

  /* width: 94px; */

  & span.line-through-text {
    font-size: ${theme.fontSizes.s};
    font-weight: ${theme.fontWeight.Medium};

    text-decoration-line: line-through;
    text-transform: uppercase;
    color: ${theme.colors.grey};
  }
`;

export const PriceSt = styled.div`
  display: flex;
  align-items: baseline;
  /* color: ${theme.colors.orange}; */
  color: ${props =>
    props.count === 0 ? `${theme.colors.grey}` : `${theme.colors.orange}`};
  /* text-transform: uppercase; */
  /* font-family: 'rawline', sans-serif; */

  font-weight: ${theme.fontWeight.Medium};
  font-size: ${theme.fontSizes.l};
  line-height: ${theme.lineHeight.l};
`;

export const SymbolCurrency = styled.span`
  margin-left: ${theme.spacing.step}px;
  font-weight: ${theme.fontWeight.medium};
  font-size: ${theme.fontSizes.s};
  line-height: ${theme.lineHeight.s};
  /* align-self: flex-end; */
  .line-through-text & {
    color: ${theme.colors.grey};
    font-size: 12px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: ${theme.spacing.step * 2}px;
`;

export const Button = styled.button`
  display: block;
  height: 40px;
  /* padding: ${theme.spacing.step * 2}px 0; */
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
    cursor: default;
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
  & button:hover {
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
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const ImageBox = styled.div`
  /* filter: ${props => (props.count === 0 ? 'grayscale(100%)' : 'none')};. */
  background: ${props =>
    props.count === 0
      ? 'url(<path-to-image>) lightgray 50% / cover no-repeat'
      : 'none'};
  mix-blend-mode: ${props => (props.count === 0 ? 'luminosity' : 'normal')};

  position: relative;
  z-index: -1;
  width: ${theme.spacing.step * 66}px;
  height: ${theme.spacing.step * 66}px;
  overflow: hidden;

  /* &:hover {
    background: ${props =>
    props.count === 0
      ? 'url(<path-to-image>) lightgray 50% / cover no-repeat'
      : 'none'};
    mix-blend-mode: ${props => (props.count === 0 ? 'luminosity' : 'normal')};
  } */
`;

export const NotAvailableText = styled.span`
  position: absolute;
  top: 263px;
  left: 19px;

  display: block;
  padding: 2px 12px;
  border-radius: 10px;
  background-color: ${theme.colors.grey};
  color: ${theme.colors.beige};
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 300;
  line-height: 16px; /* 114.286% */
`;

export const HeartBox = styled.div``;
