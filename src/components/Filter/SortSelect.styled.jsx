import styled from '@emotion/styled';
import Select from 'react-select';
import { theme } from 'styles';

export const SelectStyled = styled(Select)`
  .react-select__indicator-separator {
    display: none;
  }
  .react-select__menu {
    border-radius: 0;
    background-color: ${theme.colors.mainBackground};
    margin: 0;
    width: 198px;
    transform: translate(-1px, -41px);
    box-shadow: none;
    border: 1px solid #d8d4b8;
  }

  .react-select__placeholder {
    color: ${theme.colors.green};
  }
  .react-select__value-container {
    /* padding-left: 8px; */
    /* padding-right: 8px; */
  }

  .react-select__indicator {
    padding: 0;
    padding-right: 8px;
    z-index: 77;
  }
`;
