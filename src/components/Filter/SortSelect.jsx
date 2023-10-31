import React from 'react';
import { components } from 'react-select';
import { SelectStyled } from './SortSelect.styled';
import { RightArrow } from 'components/Icons';
import { theme } from 'styles';

export const SortSelect = () => {
  const options = [
    { value: 'спочатку дешеві', label: 'спочатку дешеві' },
    { value: 'спочатку дорогі', label: 'спочатку дорогі' },
    { value: 'за рейтингом', label: 'за рейтингом' },
  ];

  const DropdownIndicator = props => {
    return (
      <components.DropdownIndicator {...props}>
        <RightArrow direction="rotate(90)" />
      </components.DropdownIndicator>
    );
  };

  const styles = {
    fontFamily: 'Inter',
    fontSize: '14px',
    fontStyle: 'normal',
    fontWeight: '300',
    lineHeight: '16px',
    fontVariantNumeric: 'lining-nums proportional-nums',
    fontFeatureSettings: '"ss09" on',
    cursor: 'pointer',
  };

  return (
    <SelectStyled
      className="react-select-container"
      classNamePrefix="react-select"
      options={options}
      placeholder="обрати"
      //   defaultInputValue="за рейтингом"
      components={{ DropdownIndicator }}
      styles={{
        control: (baseStyles, state) => ({
          ...baseStyles,
          borderColor: state.isFocused ? theme.colors.green : theme.colors.secGreen,
          borderRadius: '0',
          backgroundColor: theme.colors.mainBackground,
          width: '196px',
          height: '40px',
          ...styles,
        }),
        option: (baseStyles, state) =>
          //   console.log(baseStyles),
          //   console.log(state),
          ({
            ...baseStyles,
            backgroundColor: state.isFocused ? theme.colors.secGreen : theme.colors.mainBackground,
            color: state.isSelected ? theme.colors.black : theme.colors.black,
            ...styles,
          }),
      }}
    />
  );
};
