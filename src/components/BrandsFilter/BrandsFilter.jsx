// this component is used for filtering by brands
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
import { useSelector } from 'react-redux';
import { selectDefaultBrands } from 'redux/selectors/selectors';
import { useSearchParams } from 'react-router-dom';

export const BrandsFilter = ({ active }) => {
  // Generates an alphabet array
  const alphabet = [...Array(26)].map((_, i) => String.fromCharCode(i + 97));
  const [searchParams, setSearchParams] = useSearchParams();
  const urlBrands = searchParams.get('brands');
  const urlCheckboxState = urlBrands
    ? urlBrands.split(',').reduce((acc, key) => {
        // Удалить пробелы вокруг ключа, если они есть
        const trimmedKey = key.trim();
        // Установить значение ключа в true
        acc[trimmedKey] = true;
        return acc;
      }, {})
    : {};

  const defaultBrands = useSelector(selectDefaultBrands);
  const [checkboxStates, setCheckboxStates] = useState(urlCheckboxState);
  const [activeLetter, setActiveLetter] = useState('');

  // Object to store refs to brands
  const brandRefs = {};

  const handleCheckboxChange = (name, checked) => {
    setCheckboxStates(prevState => {
      const newState = { ...prevState, [name]: checked };

      return newState;
    });

    const urlBrandsArray = urlBrands ? urlBrands.split(',').map(item => item.trim()) : [];

    const updatedBrands = new Set(urlBrandsArray);
    if (checked) {
      updatedBrands.add(name);
    } else {
      updatedBrands.delete(name);
    }

    updatedBrands.size !== 0
      ? setSearchParams(prevSearchParams => {
          const updatedSearchParams = new URLSearchParams(prevSearchParams);
          updatedSearchParams.set('brands', [...updatedBrands].join(','));
          return updatedSearchParams;
        })
      : setSearchParams(prevSearchParams => {
          const updatedSearchParams = new URLSearchParams(prevSearchParams);
          updatedSearchParams.delete('brands');
          return updatedSearchParams;
        });
  };

  useEffect(() => {
    // При изменении данных снова устанавливаем checkboxStates
    setCheckboxStates(urlCheckboxState);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [urlBrands]);

  return (
    <>
      {/* Render alphabet buttons */}
      <AlphabetStyled>
        {alphabet.map(item => {
          // Checks if the letter is enabled based on available brands
          const enabledLetter = Object.keys(defaultBrands)?.find(i => {
            return i[0].toUpperCase() === item.toUpperCase() && defaultBrands[i] !== 0;
          });

          return (
            <LetterStyled key={item}>
              {/* Render alphabet buttons with click functionality */}
              <ButtonLetterStyled
                disabled={!enabledLetter}
                activeLetter={activeLetter === item.toUpperCase() ? true : false}
                onClick={event => {
                  event.preventDefault();
                  const brandContainer = document.querySelector('.BrandContainer');
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

      <FilterContainer active={active} className="BrandContainer custom-scrollbar">
        {/* Render brand checkboxes */}
        <BrandsCheckBoxContainer>
          {Object.keys(defaultBrands)?.map(item => {
            // Create ref for current brand
            brandRefs[item] = React.createRef();
            if (defaultBrands[item] !== 0) {
              return (
                <BrandsCheckBoxStyled key={item + Math.random()} ref={brandRefs[item]}>
                  <CheckBoxLabelStyled>
                    {/* Render checkboxes for each brand */}
                    <CheckBoxStyled
                      type="checkbox"
                      name={item}
                      onChange={e => {
                        handleCheckboxChange(e.target.name, e.target.checked);
                      }}
                      checked={!!checkboxStates[item]} // Check if checkbox is checked
                    />
                    {item.toLowerCase()}
                    <QuantityBrands>
                      {defaultBrands[item] ? `(${defaultBrands[item]})` : '(0)'}
                    </QuantityBrands>
                  </CheckBoxLabelStyled>
                </BrandsCheckBoxStyled>
              );
            }
            return null;
          })}
        </BrandsCheckBoxContainer>
      </FilterContainer>
    </>
  );
};
