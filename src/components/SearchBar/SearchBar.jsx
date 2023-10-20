import { ClearButton, SearchIcon } from 'components/Icons';
import React, { useState } from 'react';
import { SearchBox } from './SearchBar.styled';
import { Notify } from 'notiflix';
import { searchSchema } from './searchValidationSchema';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setValueSearch } from 'redux/searchSlice';

export const Search = ({ queryLink }) => {
  const [searchValue, setSearchValue] = useState(queryLink ? { query: queryLink } : { query: '' });
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChage = e => {
    setSearchValue({ query: e.currentTarget.value });
  };
  console.log('searchValue :>> ', searchValue);
  const handleSubmit = async e => {
    e.preventDefault();
    // Check the schema if form is valid:
    const isQueryValid = await searchSchema.isValid(searchValue, {
      abortEarly: false, // Prevent aborting validation after first error
    });

    if (isQueryValid) {
      //If form is valid, continue submission
      console.log('Query is legit');
      navigate('/search', { replace: false });
    }

    // If form is not valid, send error to UI:
    if (!isQueryValid) {
      searchSchema.validate(searchValue, { abortEarly: false }).catch(err => {
        console.log('err :>> ', err.inner);
        Notify.failure(`${err.message}`);
      }, {});
      return;
    }

    dispatch(setValueSearch(searchValue.query.toLowerCase()));
  };
  return (
    <>
      <SearchBox>
        <form action="/frontend/search" onSubmit={handleSubmit}>
          <input
            type="search"
            placeholder="Введіть назву товару"
            autoFocus
            value={searchValue.query}
            onChange={handleChage}
          />
          <button type="submit">
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
