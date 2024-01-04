import { useSelector } from 'react-redux';
import {
  selectIsRegistered,
  selectIsLoggedIn,
//   selectIsRefreshing,
  selectUser,
// selectIsActive,
  selectIsLoading,
  selectError
} from 'redux/selectors/auth-selectors';

export const useAuth = () => {
  const isRegistered = useSelector(selectIsRegistered);
  const isLoggedIn = useSelector(selectIsLoggedIn);
//   const isRefreshing = useSelector(selectIsRefreshing);
  const user = useSelector(selectUser);
  // const isActive = useSelector(selectIsActive);
  const isLoading = useSelector(selectIsLoading);
  const isError = useSelector(selectError)

  return {
    isRegistered,
    isLoggedIn,
    // isRefreshing,
    user,
    // isActive,
    isLoading,
    isError
  };
};