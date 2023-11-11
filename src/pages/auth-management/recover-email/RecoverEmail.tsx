import { useEffect, useRef, useState } from 'react';
import { useTitle } from 'react-use';
import { Link } from 'react-router-dom';
import {
  applyActionCode,
  checkActionCode,
  sendPasswordResetEmail,
} from 'firebase/auth';
import { useAuth } from '../../../hooks/use-auth';
import { auth } from '../../../firebase/authentication';
import Loading from '../../../components/loading-component/LoadingComponent';
import './recover-email.scss';
import { toast } from 'react-toastify';
import { ToastMessage } from '../../../components/toast/Toast';
import { ErrorIcon, LoadingIcon } from '../../../components/Icons';
import { getErrorMessage } from '../../../utils/getErrorMessage';
import { Form, Formik } from 'formik';
import Button from '../../../components/ui/button/Button';

type Props = {
  oobCode: string;
};

function RecoverEmail({ oobCode }: Props) {
  useTitle('Recover email | Dashboard');
  const { user } = useAuth();
  const [status, setStatus] = useState<'loading' | 'error' | 'success'>(
    'loading'
  );
  const [success, setSuccess] = useState(false);
  const [email, setEmail] = useState('');
  const firstMount = useRef(true);

  useEffect(() => {
    async function handleRecoverEmail() {
      try {
        const info = await checkActionCode(auth, oobCode);
        const email = info.data.email!;
        await applyActionCode(auth, oobCode);
        setStatus('success');
        setEmail(email);
      } catch (error) {
        setStatus('error');
      }
    }

    if (firstMount.current) handleRecoverEmail();

    return () => {
      firstMount.current = false;
    };
  }, [oobCode]);

  function handleRetry() {
    setSuccess(false);
  }

  async function handleSendPasswordResetEmail() {
    try {
      await sendPasswordResetEmail(auth, email);
      setSuccess(true);
    } catch (error) {
      const message = getErrorMessage(error);
      toast.error(
        <ToastMessage
          title="Oops! Something went wrong"
          description={message}
        />,
        {
          icon: ErrorIcon,
        }
      );
    }
  }

  if (status === 'loading')
    return (
      <section className="section-recover-email">
        <h1 className="section-title">Checking Link</h1>
        <div className="section-content">
          <Loading size="sm" />
        </div>
      </section>
    );
  else if (status === 'error')
    return (
      <section className="section-recover-email">
        <h1 className="section-title">Unable to update your email address</h1>
        <div className="section-content">
          <p className="section-description">
            There was a problem changing your sign-in email back. If you try
            again and still can't reset your email, try asking your
            administrator for help.
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

  if (success)
    return (
      <section className="section-recover-email">
        <h1 className="section-title">Check your email</h1>
        <div className="section-content">
          <p className="section-description">
            Check your email: <span className="email">{email}</span> for a link
            to reset your password. If it doesn't appear within a few minutes,
            check your spam folder.
          </p>
          <p className="section-description">
            No email received?{' '}
            <Button variant="link" size="link-size" onClick={handleRetry}>
              Retry
            </Button>
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
    <section className="section-recover-email">
      <h1 className="section-title">Updated email address</h1>
      <div className="section-content">
        <p className="section-description">
          Your sign-in email address has been changed back to{' '}
          <span className="email">{email}</span>.
        </p>
        <p className="section-description">
          If you didn't ask to change your sign-in email, it's possible someone
          is trying to access your account and you should change your password
          right away.
        </p>
        <Formik initialValues={{}} onSubmit={handleSendPasswordResetEmail}>
          {({ isSubmitting }) => (
            <Form className="form-send-password-reset-email">
              <div className="form-actions">
                <Button
                  type="submit"
                  className="submit-button"
                  transform
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <LoadingIcon className="loading-icon" />
                  ) : (
                    'Send reset password email'
                  )}
                </Button>
              </div>
            </Form>
          )}
        </Formik>
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

export default RecoverEmail;
