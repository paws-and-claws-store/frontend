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
  }
`;
