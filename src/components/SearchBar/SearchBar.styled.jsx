import styled from '@emotion/styled';
import { theme } from 'styles';

export const SearchBox = styled.div`
  display: flex;

  position: relative;

  form {
    width: ${theme.spacing.step * 157}px;
    height: ${theme.spacing.step * 11}px;
  }

  input {
    width: 100%;
    height: 100%;
    outline: 0;

    border-radius: ${theme.spacing.step * 10}px;
    border: 1px solid ${theme.colors.green};
    padding: ${theme.spacing.step * 2 + 2}px ${theme.spacing.step * 4 + 15}px;
    padding-left: ${theme.spacing.step * 13}px;
    background-color: ${theme.colors.beige};

    font-size: ${theme.fontSizes.s};
    font-weight: ${theme.fontWeight.Light};
    line-height: 1.25; /* 125% */
    color: ${theme.colors.black};

    &:focus {
      border: 1px solid ${theme.colors.secGreen};
      color: ${props =>
        props.searchValue !== '' ? theme.colors.black : theme.colors.green};
    }

    &::placeholder {
      font-size: ${theme.fontSizes.s};
      font-weight: ${theme.fontWeight.Light};
      line-height: 1.25; /* 125% */
      color: ${theme.colors.green};
    }
  }

  .searchIcon {
    position: absolute;
    left: ${theme.spacing.step * 5}px;
    top: 50%;
    transform: translateY(-50%);

    .searchIcon:active {
      transform: scale(0.95);
    }
  }
  .resetButton {
    display: ${props => (props.resetBoolean ? 'block' : 'none')};
    position: absolute;
    right: 17px;
    top: 50%;
    transform: translateY(-50%);
    background-color: ${theme.colors.beige};
    width: 22px;
    height: 22px;
  }
  .resetButtonSVG {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    input:focus {
      display: block;
    }
  }
`;
