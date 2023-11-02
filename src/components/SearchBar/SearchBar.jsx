import { ClearButton, SearchIcon } from 'components/Icons';
import React from 'react';
import { SearchBox } from './SearchBar.styled';
import { Notify } from 'notiflix';
import { searchSchema } from './searchValidationSchema';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  setQuerySearch,
  setResetBoolean,
  setResetValueSearch,
  setValueSearch,
} from 'redux/searchSlice';
import { selectSearchResetBoolean, selectSearchValueStore } from 'redux/selectors';

export const SearchBar = ({ queryLink }) => {
  const searchValue = useSelector(selectSearchValueStore);
  const resetBoolean = useSelector(selectSearchResetBoolean);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChage = e => {
    dispatch(setValueSearch(e.currentTarget.value));
    if (e.currentTarget.value === '') {
      dispatch(setResetBoolean(false));
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
      navigate('/search', { replace: false });
    }

    // If form is not valid, send error to UI:
    if (!isQueryValid) {
      searchSchema.validate({ query: searchValue }, { abortEarly: false }).catch(err => {
        Notify.failure(`${err.message}`);
      }, {});
      return;
    }

    dispatch(setQuerySearch(searchValue));
  };

  return (
    <>
      <SearchBox resetBoolean={resetBoolean}>
        <form action="/frontend/search" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Введіть назву товару"
            autoFocus
            value={searchValue}
            onChange={handleChage}
          />
          <button
            type="reset"
            onClick={() => {
              dispatch(setResetValueSearch());
            }}
          >
            <ClearButton />
          </button>
          <button type="submit">
            <SearchIcon />
          </button>
        </form>
      </SearchBox>
    </>
  );
};
