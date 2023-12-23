import { useAuth } from 'hooks/useAuth';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  const { isLoggedIn } = useAuth();

  return isLoggedIn ? children : <Navigate to="/" />;
};

export default PrivateRoute;
