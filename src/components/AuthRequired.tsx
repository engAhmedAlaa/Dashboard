import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useAuth } from '../hooks/use-auth';

function AuthRequired() {
  const { user } = useAuth();
  const { pathname } = useLocation();

  if (!user) return <Navigate to="/signin" state={{ pathname }} replace />;

  return <Outlet />;
}

export default AuthRequired;
