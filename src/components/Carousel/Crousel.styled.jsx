import styled from '@emotion/styled';
import Carousel from 'react-bootstrap/Carousel';
import { theme } from 'styles';

export const CarouselStyle = styled(Carousel)`
  .carousel {
    overflow: hidden;
    width: 100%;
    height: 660px;
    display: flex;

    flex-direction: column;
    justify-content: center;
    /* z-index: 5; */
    z-index: ${theme.zIndexes.carousel};
  }

  .carousel-indicators {
    gap: 16px;
    margin-bottom: 0;
    bottom: ${props => props.theme.spacing.step * 5}px;
    /* transform: translateY(100%); */
  }

  .carousel-control-prev {
    justify-content: flex-start;
    padding-left: 16px;
  }

  .carousel-control-next {
    justify-content: flex-end;
    padding-right: 16px;
    /* display: none; */
  }

  .carousel-indicators [data-bs-target] {
    margin: 0;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    border: 0;

    background-color: #f3ecdc;
  }

  .carousel-indicators .active {
    background-color: #e68314;
  }

  .carousel-caption {
    position: absolute;
    bottom: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    gap: 24px;
    width: ${props => props.theme.spacing.step * 184}px;
    padding-bottom: ${props => props.theme.spacing.step * 28}px;
    padding-left: ${props => props.theme.spacing.step * 27}px;
  }

  .title {
    font-size: ${props => props.theme.fontSizes.xxxl};
    font-weight: ${props => props.theme.fontWeight.SemiBold};
    line-height: ${props => props.theme.lineHeight.xxxl};
  }

  .captionDescription {
    display: flex;
    flex-direction: column;
    gap: ${props => props.theme.spacing.step * 5}px;
    justify-content: start;
    text-align: start;
  }

  .discription {
    justify-content: start;
    font-size: ${props => props.theme.fontSizes.s};
    font-weight: ${props => props.theme.fontWeight.Regular};
    line-height: ${props => props.theme.lineHeight.l};
  }

  .bannerLink {
    display: block;
    width: ${props => props.theme.spacing.step * 76}px;
    background-color: ${props => props.theme.colors.orange};
    padding: ${props => props.theme.spacing.step * 4}px 0;
    border-radius: ${props => props.theme.spacing.step * 10}px;

    font-size: ${props => props.theme.fontSizes.xl};
    font-weight: ${props => props.theme.fontWeight.Medium};
    line-height: ${props => props.theme.lineHeight.xl};
    align-items: center;

    &:hover {
      background-color: ${props => props.theme.colors.green};
    }
  }
`;
