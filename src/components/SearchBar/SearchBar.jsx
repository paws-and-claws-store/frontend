import { ResetButton, SearchIcon } from 'components/Icons';
import React, { useEffect, useState } from 'react';
import { SearchBox } from './SearchBar.styled';
import { Notify } from 'notiflix';
import { searchSchema } from './searchValidationSchema';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setQuerySearch } from 'redux/searchSlice';
import { selectSearchQueryStore, selectValueSearchStatusRedux } from 'redux/selectors';

export const SearchBar = () => {
  const status = useSelector(selectValueSearchStatusRedux);
  const value = useSelector(selectSearchQueryStore);
  const [searchValue, setSearchValue] = useState(status === 'fulfilled' ? value : '');

  useEffect(() => {
    setSearchValue(value);
  }, [value]);

  const [resetBoolean, setResetBoolean] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChage = e => {
    // dispatch(setValueSearch(e.currentTarget.value));

    setSearchValue(e.currentTarget.value);
    if (e.currentTarget.value === '') {
      setResetBoolean(false);
    } else {
      setResetBoolean(true);
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
              setSearchValue('');
              setResetBoolean(false);
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
