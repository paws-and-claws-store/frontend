import { useAuth } from "hooks/useAuth";
import { Navigate } from 'react-router-dom';

const PublicRoute = ({ children }) => {
  const { isLoggedIn } = useAuth();
//   const {state}  = useLocation();

  return (
    <>
{!isLoggedIn ? children : <Navigate to={'/'} />} </>
  );
};

export default PublicRoute;