import styled from '@emotion/styled';
import Images from '../images/banner2.jpg';

export const Hero = styled.section`
  margin-top: ${props => props.theme.spacing.step * 4 + 2}px;
  /*max-width: 1276px;
  height: 660px;
  width: 100%;
  background-image: url(${Images});
  background-repeat: no-repeat;
  background-size: cover; */
`;

export const Box = styled.div`
  text-align: center;
  padding: 20%;
`;

export const Title = styled.h2`
  font-size: ${props => props.theme.fontSizes.xl};
  color: ${props => props.theme.colors.green};
  font-weight: ${props => props.theme.fontWeight.Medium};
  line-height: 1;
  margin: ${props => props.theme.spacing.step * 8}px 0;
`;