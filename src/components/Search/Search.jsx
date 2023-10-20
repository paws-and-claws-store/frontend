import { ClearButton, SearchIcon } from 'components/Icons';
import React, { memo, useCallback, useState } from 'react';
import { SearchBox } from './Search.styled';
import { Notify } from 'notiflix';
import { searchSchema } from './searchValidationSchema';

export const Search = ({ onSubmit, queryLink }) => {
  const [searchValue, setSearchValue] = useState(queryLink ? { query: queryLink } : { query: '' });
  const handleChage = e => {
    setSearchValue({ query: e.currentTarget.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    // Check the schema if form is valid:
    const isQueryValid = await searchSchema.isValid(searchValue, {
      abortEarly: false, // Prevent aborting validation after first error
    });

    if (isQueryValid) {
      //If form is valid, continue submission
      console.log('Query is legit');
      return;
    }

    // If form is not valid, send error to UI:
    if (!isQueryValid) {
      searchSchema.validate(searchValue, { abortEarly: false }).catch(err => {
        console.log('err :>> ', err.inner);
        Notify.failure(`${err.message}`);
      }, {});
    }
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
