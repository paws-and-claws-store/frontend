import { ClearButton, SearchIcon } from 'components/Icons';
import React, { useState } from 'react';
import { SearchBox } from './SearchBar.styled';
import { Notify } from 'notiflix';
import { searchSchema } from './searchValidationSchema';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { resetValueSearch, setResetBoolean, setValueSearch } from 'redux/searchSlice';
import { selectSearchResetBoolean } from 'redux/selectors';

export const Search = ({ queryLink }) => {
  const [searchValue, setSearchValue] = useState(queryLink ? { query: queryLink } : { query: '' });
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChage = e => {
    setSearchValue({ query: e.currentTarget.value });
    dispatch(setResetBoolean(true));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    console.log('e :>> ', e);
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
      <SearchBox resetBoolean={useSelector(selectSearchResetBoolean)}>
        <form action="/frontend/search" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Введіть назву товару"
            autoFocus
            value={searchValue.query}
            onChange={handleChage}
          />
          <button
            type="reset"
            onClick={() => {
              dispatch(resetValueSearch());
              setSearchValue({ query: '' });
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
