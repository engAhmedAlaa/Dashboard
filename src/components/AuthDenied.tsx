import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useAuth } from '../hooks/use-auth';

function AuthDenied() {
  const { user } = useAuth();
  const { state } = useLocation();
  const pathname = state?.pathname;

  if (user) return <Navigate to={pathname ? pathname : '/'} replace />;

  return <Outlet />;
}

export default AuthDenied;
