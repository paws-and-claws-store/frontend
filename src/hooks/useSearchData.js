import { useFetchSearchQuery } from 'redux/operations';

// Custom hook for fetching search query data
export const useSearchData = ({ signal, params }) => {
  return useFetchSearchQuery({ signal, params });
};
