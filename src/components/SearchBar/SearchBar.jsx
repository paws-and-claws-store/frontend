// this component is used to create search input, validate inputs and add search value to redux store

import { ResetButton, SearchIcon } from 'components/Icons';
import React, { useEffect, useState } from 'react';
import { SearchBox } from './SearchBar.styled';
import { Notify } from 'notiflix';
import { searchSchema } from './searchValidationSchema'; // add search schema validation
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setQuerySearch } from 'redux/slice/searchSlice';
import { selectSearchQueryStore } from 'redux/selectors/selectors';

export const SearchBar = () => {
  const value = useSelector(selectSearchQueryStore); // extract search value from the Redux store
  const [searchValue, setSearchValue] = useState(value);
  const location = useLocation();

  const [resetBoolean, setResetBoolean] = useState(false); //this state needs to reset search query and show or hide reset button
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    setSearchValue(value);

    if (value) {
      setResetBoolean(true);
    }
  }, [value]);

  const handleChage = e => {
    setSearchValue(e.currentTarget.value);
    if (e.currentTarget.value === '') {
      setResetBoolean(false); // hiding reset button
    } else {
      setResetBoolean(true); // showing reset button
    }
  };

  const handleSubmit = async e => {
    e.preventDefault();
    // Check the schema if form is valid:
    const isQueryValid = await searchSchema.isValid(
      { query: searchValue },
      {
        abortEarly: false, // Prevent aborting validation after first error
      },
    );

    if (isQueryValid) {
      //If form is valid, continue submission
      // console.log('Query is legit');
      if (location?.pathname !== 'search') {
        navigate('/search', { replace: false }); // redirect to search page after submitting and passing valiadation
      }
    }

    // If form is not valid, send error to UI:
    if (!isQueryValid) {
      searchSchema
        .validate({ query: searchValue }, { abortEarly: false })
        .catch(err => {
          Notify.failure(`${err.message}`);
        }, {});
      return;
    }

    dispatch(setQuerySearch(searchValue)); // set search query to the Redux store
  };

  return (
    <>
      <SearchBox resetBoolean={resetBoolean} searchValue={searchValue}>
        <form action="/frontend/search" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Введіть назву товару"
            // autoFocus
            value={searchValue}
            onChange={handleChage}
          />
          <button
            className="resetButton"
            type="reset"
            onClick={() => {
              setSearchValue(''); // reset search value on input field
              setResetBoolean(false); // hide reset button on input field
            }}
          >
            <ResetButton />
          </button>
          <button type="submit">
            <SearchIcon />
          </button>
        </form>
      </SearchBox>
    </>
  );
};
