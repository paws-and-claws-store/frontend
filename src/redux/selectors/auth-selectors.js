export const selectUser = state => state.auth.user;
export const selectIsRegistered = state => state.auth.isRegistered;
export const selectIsLoggedIn = state => state.auth.isLoggedIn;
// export const selectIsActive = state => state.auth.isActive;
// export const selectAccessToken = state => state.auth.accessToken;
export const selectIsLoading = state => state.auth.isLoading;
export const selectError = state => state.auth.error;