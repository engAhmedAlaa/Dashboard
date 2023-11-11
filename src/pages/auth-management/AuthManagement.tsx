import { useTitle } from 'react-use';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../../hooks/use-auth';
import ResetPassword from './reset-password/ResetPassword';
import RecoverEmail from './recover-email/RecoverEmail';
import VerifyEmail from './verify-email/VerifyEmail';
import './auth-management.scss';

function AuthManagement() {
  useTitle('Auth Management | Dashboard');
  const { user } = useAuth();
  const { search } = useLocation();
  const params = new URLSearchParams(search);
  const mode = params.get('mode');
  const oobCode = params.get('oobCode') ?? '';

  if (mode === 'resetPassword') return <ResetPassword oobCode={oobCode} />;
  else if (mode === 'recoverEmail') return <RecoverEmail oobCode={oobCode} />;
  else if (mode === 'verifyEmail') return <VerifyEmail oobCode={oobCode} />;
  return (
    <section className="section-auth-management">
      <h1 className="section-title">Error encountered</h1>
      <div className="section-content">
        <p className="section-description">
          The selected page mode is invalid.
        </p>
        {user ? (
          <Link
            to="/"
            className="return-link button-shape outline default-size"
          >
            Return to home
          </Link>
        ) : (
          <Link
            to="/signin"
            className="return-link button-shape outline default-size"
          >
            Return to sign in
          </Link>
        )}
      </div>
    </section>
  );
}

export default AuthManagement;
