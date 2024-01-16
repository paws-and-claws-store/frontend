import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { theme } from 'styles';
import TRAVEL_BAG from '../../svg/Travel_bag.svg';

export const SearchContainer = styled.div`
  /* display: grid;
  grid-template-columns: 1fr 3fr;
  grid-column-gap: 20px; */
  display: flex;
  gap: 20px;
`;
export const UpsideSearchContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 628px 1fr;
  grid-column-gap: 20px;
  margin-bottom: 20px;
  margin-top: 16px;
  height: 96px;
`;

export const TitleSearch = styled.h2`
  width: 304px;
  height: 32px;
  display: flex;
  align-items: center;
  font-size: ${theme.fontSizes.xl};
  color: ${theme.colors.black};
  font-weight: ${theme.fontWeight.Medium};
  font-size: ${theme.lineHeight.xl};
  margin-top: auto;
  margin-bottom: auto;
`;

export const SearchDesriptionResults = styled.div`
  margin-top: auto;
  margin-bottom: auto;

  color: ${theme.colors.black};
  font-variant-numeric: lining-nums proportional-nums;
  font-feature-settings: 'ss09' on;
  word-wrap: break-word;
  /* banner content */
  font-family: Inter;
  font-size: ${theme.fontSizes.s};
  font-style: normal;
  font-weight: ${theme.fontWeight.Medium};
  line-height: 32px; /* 133.333% */
`;
export const SearchDesriptionResultsSuccess = styled.div`
  margin-top: 40px;
  margin-bottom: auto;

  color: ${theme.colors.black};
  font-variant-numeric: lining-nums proportional-nums;
  font-feature-settings: 'ss09' on;
  word-wrap: break-word;
  /* banner content */
  font-family: Inter;
  font-size: ${theme.fontSizes.s};
  font-style: normal;
  font-weight: ${theme.fontWeight.Medium};

  line-height: 20px; /* 125% */
`;

export const SearchQuery = styled.span`
  color: ${theme.colors.green};
`;
export const SearchDescriptionSpan = styled.span``;

export const SortingContainer = styled.div`
  position: relative;
  width: 304px;
  height: 40px;
  margin-top: auto;
  display: flex;
  align-items: end;
  justify-content: space-between;
`;

export const SearchCategoryList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 304px;
`;

export const SearchAsideCatalog = styled.aside`
  /* width: ${theme.spacing.step * 76}px; */
`;

export const SearchClearFilter = styled.button`
  margin-bottom: 8px;
  color: ${theme.colors.green};
  font-variant-numeric: lining-nums proportional-nums;
  font-feature-settings: 'ss09' on;
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: ${theme.fontWeight.Light};
  line-height: ${theme.lineHeight.s}; /* 114.286% */
  text-decoration: underline;
  text-decoration-skip-ink: auto;
  text-underline-offset: 4px;

  &:hover,
  &:active {
    color: ${theme.colors.orange};
  }
`;

export const SearchFilter = styled.div`
  overflow: hidden;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: start;

  /* width: 100%; */
  width: ${theme.spacing.step * 76}px;
  min-height: 44px;
  max-height: ${props => (props.active ? '44px' : '116px')};
  transition-property: max-height, background-color;
  transition-duration: ${theme.animations.transitionDuration};
  transition-timing-function: ${props => props.theme.animations.cubicBezier};
  background-color: ${props => (props.active ? theme.colors.secGreen : theme.colors.beige)};

  border: 1px solid ${theme.colors.green};
`;
export const SearchBrands = styled.div`
  overflow: hidden;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: start;

  width: 100%;
  min-height: 44px;
  max-height: ${props => (props.activeBrands ? '44px' : '500px')};
  transition-property: max-height, background-color;
  transition-duration: ${theme.animations.transitionDuration};
  transition-timing-function: ${props => props.theme.animations.cubicBezier};
  background-color: ${props => (props.activeBrands ? theme.colors.secGreen : theme.colors.beige)};

  border: 1px solid ${theme.colors.green};
`;

export const SearchWrapperCatalog = styled.div`
  /* display: grid; */
  width: 100%;
`;

export const SearchCategory = styled(Link)`
  font-size: ${theme.fontSizes.s};
  font-weight: ${theme.fontWeight.Medium};
  line-height: ${theme.lineHeight.l}; /* 125% */
`;

export const SearchFoodTypeList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.step * 2}px;
`;

export const SearchFoodType = styled(Link)`
  font-size: ${theme.fontSizes.s};
  font-weight: ${theme.fontWeight.Light};
  line-height: ${theme.lineHeight.l};
`;

export const FoldedContainer = styled.div`
  z-index: ${theme.zIndexes.foldedContainer};
  width: 100%;
  display: flex;
  align-items: center;
  transition: background-color 0.5s;
  justify-content: space-between;
  padding: ${theme.spacing.step + 1}px ${theme.spacing.step * 2 - 1}px;
  cursor: pointer;
  &:hover {
    fill: ${theme.colors.green};
  }

  & span {
    font-family: Inter;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 20px; /* 125% */
  }
`;

export const SearchTravelBag = styled.svg`
  width: 572px;
  height: 572px;
  background-image: url(${TRAVEL_BAG});
  fill: aqua;
`;

export const SearchCallToAction = styled.div`
  margin-top: 80px;
  width: 520px;
  font-size: ${theme.fontSizes.l};
  font-style: normal;
  font-weight: ${theme.fontWeight.Medium};
  line-height: ${theme.lineHeight.xl}; /* 120% */
`;

export const SearchCheckBoxLabelStyled = styled.label`
  display: inline-grid;
  grid-template-columns: auto auto;
  grid-column-gap: 6px;

  font-variant-numeric: lining-nums proportional-nums;
  font-feature-settings: 'ss09' on;

  /* content card */
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 300;
  line-height: 20px; /* 125% */
`;

export const SearchCheckBoxStyled = styled.input`
  display: grid;
  place-content: center;
  appearance: none;
  background-color: inherit;
  margin: 0;
  color: currentColor;
  width: 16px;
  height: 16px;
  border: 1px solid ${props => (props.checked ? `${theme.colors.black}` : `${theme.colors.green}`)};
  border-radius: 0.1em;
  transform: translateY(2px);

  &::before {
    content: '';
    width: 0.65em;
    height: 0.65em;
    //transform: scale(0);

    transform: ${props => (props.checked ? 'scale(1)' : 'scale(0)')};
    // transition: 120ms transform ${theme.animations.cubicBezier};
    box-shadow: inset 1em 1em ${theme.colors.black};
    transform-origin: bottom left;
    /* clip-path: polygon(14% 44%, 0 65%, 50% 100%, 100% 16%, 80% 0%, 43% 62%); */
    clip-path: polygon(38% 70%, 90% 20%, 100% 24%, 38% 90%, 10% 60%, 18% 51%);
  }

  &:hover {
    cursor: pointer;

    border: 1px solid
      ${props => (props.disabled ? `${theme.colors.green}` : `${theme.colors.black}`)};
  }
`;
