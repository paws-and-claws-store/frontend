import { useSelector } from 'react-redux';
import {
  selectIsRegistered,
  selectIsLoggedIn,
//   selectIsRefreshing,
  selectUser,
  selectResetTokenStatus,
  selectNewPasswordStatus,
  selectShowUserMenu,
// selectIsActive,
  selectIsLoading,
  selectError
} from 'redux/selectors/auth-selectors';

export const useAuth = () => {
  const isRegistered = useSelector(selectIsRegistered);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isResetToken = useSelector(selectResetTokenStatus);
  const isNewPassStatus = useSelector(selectNewPasswordStatus);
  const isShowUserMenu = useSelector(selectShowUserMenu);
//   const isRefreshing = useSelector(selectIsRefreshing);
  const user = useSelector(selectUser);
  // const isActive = useSelector(selectIsActive);
  const isLoading = useSelector(selectIsLoading);
  const isError = useSelector(selectError)

  return {
    isRegistered,
    isLoggedIn,
    isResetToken,
    isNewPassStatus,
    isShowUserMenu,
    // isRefreshing,
    user,
    // isActive,
    isLoading,
    isError
  };
};