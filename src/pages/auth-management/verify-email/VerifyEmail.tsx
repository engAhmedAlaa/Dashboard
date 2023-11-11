import { useEffect, useRef, useState } from 'react';
import { useTitle } from 'react-use';
import { Link } from 'react-router-dom';
import { applyActionCode } from 'firebase/auth';
import { useAuth } from '../../../hooks/use-auth';
import { auth } from '../../../firebase/authentication';
import Loading from '../../../components/loading-component/LoadingComponent';
import './verify-email.scss';

type Props = {
  oobCode: string;
};

function VerifyEmail({ oobCode }: Props) {
  useTitle('Verify email | Dashboard');
  const { user } = useAuth();
  const [status, setStatus] = useState<'loading' | 'error' | 'success'>(
    'loading'
  );
  const firstMount = useRef(true);

  useEffect(() => {
    async function handleVerifyEmail() {
      try {
        await applyActionCode(auth, oobCode);
        setStatus('success');
      } catch (error) {
        setStatus('error');
      }
    }

    if (firstMount.current) handleVerifyEmail();

    return () => {
      firstMount.current = false;
    };
  }, [oobCode]);

  if (status === 'loading')
    return (
      <section className="section-verify-email">
        <h1 className="section-title">Checking Link</h1>
        <div className="section-content">
          <Loading size="sm" />
        </div>
      </section>
    );
  else if (status === 'error')
    return (
      <section className="section-verify-email">
        <h1 className="section-title">Try verifying your email again</h1>
        <div className="section-content">
          <p className="section-description">
            Your request to verify your email has expired or the link has
            already been used
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
  return (
    <section className="section-verify-email">
      <h1 className="section-title">Your email has been verified</h1>
      <div className="section-content">
        <p className="section-description">
          You can now sign in with your new account
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

export default VerifyEmail;
