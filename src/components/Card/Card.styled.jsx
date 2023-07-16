import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const BoxCard = styled.div`
  position: relative;
  width: ${props => props.theme.spacing.step * 76}px;
  height: ${props => props.theme.spacing.step * 128}px;
  border: 1px solid ${props => props.theme.colors.green};
  padding: ${props => props.theme.spacing.step * 5}px;

  .heartIcon {
    position: absolute;
    top: 20px;
    right: 20px;
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
  border-radius: ${props => props.theme.spacing.step * 2 + 2}px;
  border: 1px solid ${props => props.theme.colors.green};
  padding: 2px 12px;

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

export const Reiting = styled.p`
  display: flex;

  gap: ${props => props.theme.spacing.step * 1}px;

  height: ${props => props.theme.spacing.step * 5}px;
  margin-top: ${props => props.theme.spacing.step * 2}px;

  color: ${props => props.theme.colors.green};
  font-weight: ${props => props.theme.fontWeight.Regular};
  font-size: ${props => props.theme.fontSizes.s};
  line-height: ${props => props.theme.lineHeight.l};
`;

export const PriceSt = styled.p`
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
  gap: ${props => props.theme.spacing.step * 4 - 2}px;
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
`;

export const Image = styled.img`
  width: ${props => props.theme.spacing.step * 66}px;
  height: ${props => props.theme.spacing.step * 66}px;
  object-fit: cover;
`;

export const HeartBox = styled.div``;
