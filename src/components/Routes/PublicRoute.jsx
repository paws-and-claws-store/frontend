import { useAuth } from "hooks/useAuth";
import { Navigate, useLocation } from 'react-router-dom';

const PublicRoute = ({ children }) => {
  const { isLoggedIn } = useAuth();
  const {state}  = useLocation();
  console.log("state:", state)

  return (
    <>
{!isLoggedIn ? children : <Navigate to={state ? state : '/'} />} </>
  );
};

export default PublicRoute;