// this component is used for filtering by brands
// import { useFetchBrandsQuery } from 'redux/api/operations';
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
} from './BrandsFilter.styled';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setBrands, setResetBrands } from 'redux/slice/brandsFilterSlice';
import {
  selectCheckboxStates,
  selectDefaultBrands,
  selectIsClearSetBrandsFilter,
} from 'redux/selectors/selectors';

export const BrandsFilter = ({ active }) => {
  // Generates an alphabet array
  const alphabet = [...Array(26)].map((_, i) => String.fromCharCode(i + 97));
  const dispatch = useDispatch();

  const defaultBrands = useSelector(selectDefaultBrands);
  const checkboxStates = useSelector(selectCheckboxStates);
  const resetStatus = useSelector(selectIsClearSetBrandsFilter);
  const [activeLetter, setActiveLetter] = useState('');

  // Fetches brands using a custom hook
  //const { data: brands } = useFetchBrandsQuery();

  // Object to store refs to brands
  const brandRefs = {};

  const handleCheckboxChange = (name, checked) => {
    dispatch(setBrands({ name, checked }));
  };

  useEffect(() => {
    if (resetStatus === true) {
      // setCheckboxStates({}); // flush checkbox status state for render on curent page
      dispatch(setResetBrands()); // flush checkbox status at redux store for coorect query
    }
  }, [dispatch, resetStatus]);

  return (
    <>
      {/* Render alphabet buttons */}
      <AlphabetStyled>
        {alphabet.map(item => {
          // Checks if the letter is enabled based on available brands
          const enabledLetter = Object.keys(defaultBrands)?.find(
            i => i[0].toUpperCase() === item.toUpperCase(),
          );

          return (
            <LetterStyled key={item}>
              {/* Render alphabet buttons with click functionality */}
              <ButtonLetterStyled
                disabled={!enabledLetter}
                activeLetter={
                  activeLetter === item.toUpperCase() ? true : false
                }
                onClick={event => {
                  event.preventDefault();
                  const brandContainer =
                    document.querySelector('.BrandContainer');
                  const offsetTop = brandContainer.offsetTop;

                  // Scrolls to the first brand starting with the clicked letter
                  if (enabledLetter) {
                    const firstBrandRef = brandRefs[enabledLetter];
                    if (firstBrandRef) {
                      // Calculate the offset from the top of the container
                      const offsetFromTop = firstBrandRef.current.offsetTop;
                      // Scroll to the calculated offset with delay for acting code brandContainer.scrollIntoView first if container with brands is not visible
                      brandContainer.scrollTo({
                        top: -offsetTop + offsetFromTop,
                        behavior: 'smooth',
                      });

                      // Scroll to the calculated offset with delay for acting code brandContainer.scrollIntoView first if container with brands is not visible
                      // setTimeout(() => {
                      //   brandContainer.scrollTo({
                      //     top: -offsetTop + offsetFromTop,
                      //     behavior: 'smooth',
                      //   });
                      // }, 300);

                      // Check if the container is not fully visible and scroll it into view
                      // const containerRect = brandContainer.getBoundingClientRect();
                      // const isContainerVisible =
                      //   containerRect.top >= 0 &&
                      //   containerRect.bottom <=
                      //     (window.innerHeight || document.documentElement.clientHeight);
                      // console.log(isContainerVisible);

                      // if (!isContainerVisible) {
                      //   brandContainer.scrollIntoView({
                      //     behavior: 'smooth',
                      //     block: 'start',
                      //   });
                      // }
                    }

                    setActiveLetter(item.toUpperCase());
                  }
                }}
              >
                {item.toUpperCase()}
              </ButtonLetterStyled>
            </LetterStyled>
          );
        })}
      </AlphabetStyled>

      <FilterContainer
        active={active}
        className="BrandContainer custom-scrollbar"
      >
        {/* Render brand checkboxes */}
        <BrandsCheckBoxContainer>
          {Object.keys(defaultBrands)?.map(item => {
            // Create ref for current brand
            brandRefs[item] = React.createRef();
            return (
              <BrandsCheckBoxStyled
                key={item + Math.random()}
                ref={brandRefs[item]}
                //    disabled={defaultBrands[item] === undefined ? true : false}
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
                    //disabled={brandsCount[item] === undefined ? true : false}
                  />
                  {item.toLowerCase()}
                  <QuantityBrands>
                    {defaultBrands[item] ? `(${defaultBrands[item]})` : '(0)'}
                  </QuantityBrands>
                </CheckBoxLabelStyled>
              </BrandsCheckBoxStyled>
            );
          })}
        </BrandsCheckBoxContainer>
      </FilterContainer>
    </>
  );
};
