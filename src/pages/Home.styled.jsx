import styled from '@emotion/styled';
import Images from '../images/banner2.jpg';

export const Hero = styled.section`
  margin-top: ${props => props.theme.spacing.step * 22}px;
  max-width: 1276px;
  height: 660px;
  width: 100%;
  background-image: url(${Images});
`;

export const Box = styled.div`
  padding-top: 90px;
`;
