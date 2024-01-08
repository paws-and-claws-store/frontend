import { useAuth } from 'hooks/useAuth';
import { Navigate } from 'react-router-dom';
// import Loader from 'components/Loader/Loader';

const PublicRoute = ({
  children,
}) => {
  const { isLoggedIn, isRegistered } = useAuth();
  return (
    <>
      {/* {isLoading && <Loader />} */}
      {isLoggedIn || isRegistered ? children : <Navigate to='/' /> }
    </>
  );
};

export default PublicRoute;
