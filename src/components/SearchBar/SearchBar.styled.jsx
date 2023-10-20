import styled from '@emotion/styled';

export const SearchBox = styled.div`
  display: flex;

  position: relative;

  form {
    width: ${props => props.theme.spacing.step * 157}px;
    height: ${props => props.theme.spacing.step * 11}px;
  }

  input {
    width: 100%;
    height: 100%;
    outline: 0;

    border-radius: ${props => props.theme.spacing.step * 10}px;
    border: 1px solid ${props => props.theme.colors.green};
    padding: ${props => props.theme.spacing.step * 2 + 2}px
      ${props => props.theme.spacing.step * 4}px;
    padding-left: ${props => props.theme.spacing.step * 13}px;
    background-color: ${props => props.theme.colors.beige};

    font-size: ${props => props.theme.fontSizes.m};
    font-weight: ${props => props.theme.fontWeight.Light};
    line-height: 1.25; /* 125% */
    color: ${props => props.theme.colors.green};

    /* border-radius: ${props => props.theme.spacing.step * 10}px;
    border: 1px solid ${props => props.theme.colors.green}; */

    &::placeholder {
      font-size: ${props => props.theme.fontSizes.s};
      font-weight: ${props => props.theme.fontWeight.Light};
      line-height: 1.25; /* 125% */
      color: ${props => props.theme.colors.secGreen};
    }
  }

  .searchIcon {
    position: absolute;
    left: ${props => props.theme.spacing.step * 5}px;
    top: 50%;
    transform: translateY(-50%);

    .searchIcon:active {
      transform: scale(0.95);
    }
  }

  /* #Search::-webkit-search-cancel-button {
    position: relative;
    right: 20px;

    -webkit-appearance: none;
    height: 20px;
    width: 20px;
    border-radius: 10px;
    background: red;
  } */

  .clearButton {
    /* display: none; */
    position: absolute;
    right: ${props => props.theme.spacing.step * 5}px;
    top: 50%;
    transform: translateY(-50%);

    input:focus {
      display: block;
    }
  }
`;
