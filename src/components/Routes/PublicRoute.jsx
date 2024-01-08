import { useAuth } from 'hooks/useAuth';
import { Navigate } from 'react-router-dom';
import Loader from 'components/Loader/Loader';

const PublicRoute = ({
  redirectTo = '/user',
  children,
  restricted = false,
}) => {
  const { isLoggedIn, isRegistered, isLoading } = useAuth();
  const shouldRedirect = `${isLoggedIn || isRegistered}` && restricted;
  return (
    <>
      {isLoading && <Loader />}
      {shouldRedirect ? <Navigate to={redirectTo} /> : children}
    </>
  );
};

export default PublicRoute;
