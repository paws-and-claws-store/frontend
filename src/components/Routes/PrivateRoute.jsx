import { useAuth } from 'hooks/useAuth';
import {Navigate} from 'react-router-dom';
import Loader from 'components/Loader/Loader';

const PrivateRoute = ({ children }) => {
  const { isRegistered, isLoggedIn, isLoading } = useAuth();
  return(
    <>
      {isLoading && <Loader />}
      {isRegistered || isLoggedIn ? children : <Navigate to='/'/>}
    </>
  );
};

export default PrivateRoute;
