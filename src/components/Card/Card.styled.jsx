import styled from '@emotion/styled';

export const BoxCard = styled.div`
  width: 304px;
  height: 512px;
  border: 1px solid ${props => props.theme.colors.green};
  padding: ${props => props.theme.spacing.step * 5}px;
`;

export const BrandNameSt = styled.h3`
  margin-top: ${props => props.theme.spacing.step * 5}px;
  color: ${props => props.theme.colors.orange};
  text-transform: uppercase;
  font-weight: 600;
  font-size: ${props => props.theme.spacing.medium};
  line-height: ${props => props.theme.spacing.step * 4}px;
`;

export const ProductNameSt = styled.h2`
  margin-top: ${props => props.theme.spacing.step * 5 + 2}px;
  color: ${props => props.theme.colors.black};
  text-transform: capitalize;
  font-weight: 600;
  font-size: ${props => props.theme.spacing.large};
  line-height: ${props => props.theme.spacing.step * 5}px;
`;

export const SizeSt = styled.p`
  margin-top: ${props => props.theme.spacing.step * 3}px;
  color: ${props => props.theme.colors.green};
  text-transform: uppercase;
  font-weight: 500;
  font-size: ${props => props.theme.spacing.medium};
  line-height: ${props => props.theme.spacing.step * 4}px;
`;

export const PriceSt = styled.p`
  color: ${props => props.theme.colors.orange};
  text-transform: uppercase;
  font-weight: 500;
  font-size: ${props => props.theme.spacing.large};
  line-height: ${props => props.theme.spacing.step * 5}px;
`;

export const ShortDiscriptionSt = styled.p`
  margin-top: ${props => props.theme.spacing.step * 5 - 2}px;
  color: ${props => props.theme.colors.black};
  text-transform: capitalize;
  font-weight: 300;
  font-size: ${props => props.theme.spacing.medium};
  line-height: ${props => props.theme.spacing.step * 5 - 2}px;
`;

export const Wrapper = styled.div`
  display: flex;
  margin-top: ${props => props.theme.spacing.step * 2}px;
  gap: ${props => props.theme.spacing.step * 4 - 2}px;
`;
export const Button = styled.button`
  padding: ${props => props.theme.spacing.step * 2 + 2}px;
  width: ${props => props.theme.spacing.step * 19}px;
  height: ${props => props.theme.spacing.step * 10}px;
`;

export const Image = styled.img`
  width: ${props => props.theme.spacing.step * 58}px;
  height: ${props => props.theme.spacing.step * 58}px;
`;
