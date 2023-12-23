import { useAuth } from 'hooks/useAuth';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  const { isLoggedIn } = useAuth();

  const location = useLocation();
  console.log("location:", location)
  return (
    <>

      {isLoggedIn ? (
        children
      ) : (
        <Navigate to="/user" />
      )}
    </>
  );
};

export default PrivateRoute;