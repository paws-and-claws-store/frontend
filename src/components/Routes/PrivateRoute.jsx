import { useAuth } from 'hooks/useAuth';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  const {isRegistered, isLoggedIn } = useAuth();
  return isRegistered || isLoggedIn ? children : <Navigate to={isRegistered || isLoggedIn ? '/user' : '/'} />;
};

export default PrivateRoute;
