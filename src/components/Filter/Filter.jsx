// this component is used for filtering by brands
import { useFetchBrandsQuery } from 'redux/operations';
import {
  AlphabetStyled,
  BrandsCheckBoxContainer,
  BrandsCheckBoxStyled,
  ButtonLetterStyled,
  CheckBoxLabelStyled,
  CheckBoxStyled,
  FilterContainer,
  LetterStyled,
  QuantityBrands,
} from './Filter.styled';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setBrands, setResetBrands } from 'redux/slice/brandsFilterSlice';
import { selectIsClearSetBrandsFilter } from 'redux/selectors';

export const Filter = ({ active, brandsCount }) => {
  // Generates an alphabet array
  const alphabet = [...Array(26)].map((_, i) => String.fromCharCode(i + 97));
  const dispatch = useDispatch();
  const [checkedBrands, setCheckedBrands] = useState([]);
  const [checkboxStates, setCheckboxStates] = useState({});
  const resetStatus = useSelector(selectIsClearSetBrandsFilter);

  // Fetches brands using a custom hook
  const { data: brands } = useFetchBrandsQuery();

  // Object to store refs to brands
  const brandRefs = {};

  const handleCheckboxChange = (name, checked) => {
    setCheckboxStates(prevState => ({
      ...prevState,
      [name]: checked, // Update checkbox state by name
    }));

    setCheckedBrands(prevBrands => {
      const updatedBrands = new Set(prevBrands);
      if (checked) {
        updatedBrands.add(name);
      } else {
        updatedBrands.delete(name);
      }
      return [...updatedBrands];
    });
  };

  useEffect(() => {
    dispatch(setBrands(checkedBrands.toString()));
  }, [checkedBrands, dispatch]);

  useEffect(() => {
    if (resetStatus === true) {
      setCheckboxStates({}); // flush checkbox status state for render on curent page
      dispatch(setResetBrands()); // flush checkbox status at redux store for coorect query
    }
  }, [dispatch, resetStatus]);

  return (
    <FilterContainer active={active}>
      {/* Render alphabet buttons */}
      <AlphabetStyled>
        {alphabet.map(item => {
          // Checks if the letter is enabled based on available brands
          const enabledLetter = brands?.find(i => i[0].toUpperCase() === item.toUpperCase());
          const activeLetter = checkedBrands.some(i => i[0].toUpperCase() === item.toUpperCase());

          return (
            <LetterStyled key={item}>
              {/* Render alphabet buttons with click functionality */}
              <ButtonLetterStyled
                disabled={!enabledLetter}
                activeLetter={activeLetter}
                onClick={() => {
                  // Scrolls to the first brand starting with the clicked letter
                  if (enabledLetter) {
                    const firstBrandRef = brandRefs[enabledLetter];
                    if (firstBrandRef) {
                      firstBrandRef.current.scrollIntoView({
                        behavior: 'smooth',
                        block: 'center',
                      });
                    }
                  }
                }}
              >
                {item.toUpperCase()}
              </ButtonLetterStyled>
            </LetterStyled>
          );
        })}
      </AlphabetStyled>
      {/* Render brand checkboxes */}
      <BrandsCheckBoxContainer>
        {brands?.map(item => {
          // Create ref for current brand
          brandRefs[item] = React.createRef();
          return (
            <BrandsCheckBoxStyled
              key={item + Math.random()}
              ref={brandRefs[item]}
              disabled={brandsCount[item] === undefined ? true : false}
            >
              <CheckBoxLabelStyled>
                {/* Render checkboxes for each brand */}
                <CheckBoxStyled
                  type="checkbox"
                  name={item}
                  onChange={e => {
                    handleCheckboxChange(e.target.name, e.target.checked);

                    // const { name, checked } = e.target;

                    // setCheckboxStates(prevState => ({
                    //   ...prevState,
                    //   [name]: checked, // Обновление состояния чекбокса по имени
                    // }));

                    // if (checked) {
                    //   setCheckedBrands(prevState => [...prevState, name]);
                    // } else {
                    //   const indexBrand = checkedBrands.findIndex(item => item === name);
                    //   const spliceBrands = [...checkedBrands];
                    //   spliceBrands.splice(indexBrand, 1);
                    //   setCheckedBrands(spliceBrands);
                    // }
                  }}
                  checked={!!checkboxStates[item]} // Отмечен ли чекбокс
                  disabled={brandsCount[item] === undefined ? true : false}
                />
                {item}
                <QuantityBrands>
                  {brandsCount[item] ? `(${brandsCount[item]})` : '(0)'}
                </QuantityBrands>
              </CheckBoxLabelStyled>
            </BrandsCheckBoxStyled>
          );
        })}
      </BrandsCheckBoxContainer>
    </FilterContainer>
  );
};
