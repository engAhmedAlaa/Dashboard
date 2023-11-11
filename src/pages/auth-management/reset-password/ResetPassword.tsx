import { useEffect, useRef, useState } from 'react';
import { useTitle } from 'react-use';
import { Link } from 'react-router-dom';
import { confirmPasswordReset, verifyPasswordResetCode } from 'firebase/auth';
import { toast } from 'react-toastify';
import { object } from 'yup';
import { Form, Formik } from 'formik';
import { useAuth } from '../../../hooks/use-auth';
import { auth } from '../../../firebase/authentication';
import { getErrorMessage } from '../../../utils/getErrorMessage';
import { passwordSchema, confirmNewPasswordSchema } from '../../../schemas';
import { ErrorIcon, LoadingIcon } from '../../../components/Icons';
import { ToastMessage } from '../../../components/toast/Toast';
import Loading from '../../../components/loading-component/LoadingComponent';
import PasswordField from '../../../components/password-field/PasswordField';
import Button from '../../../components/ui/button/Button';
import './reset-password.scss';

type Props = {
  oobCode: string;
};

function ResetPassword({ oobCode }: Props) {
  useTitle('Reset password | Dashboard');
  const { user } = useAuth();
  const [status, setStatus] = useState<'loading' | 'error' | 'success'>(
    'loading'
  );
  const [success, setSuccess] = useState(false);
  const [email, setEmail] = useState('');
  const firstMount = useRef(true);
  const initialValues = {
    newPassword: '',
    confirmNewPassword: '',
  };
  const validationSchema = object().shape({
    newPassword: passwordSchema,
    confirmNewPassword: confirmNewPasswordSchema,
  });

  useEffect(() => {
    async function handleVerifyPasswordResetCode() {
      try {
        const email = await verifyPasswordResetCode(auth, oobCode);
        setStatus('success');
        setEmail(email);
      } catch (error) {
        setStatus('error');
      }
    }

    if (firstMount.current) handleVerifyPasswordResetCode();

    return () => {
      firstMount.current = false;
    };
  }, [oobCode]);

  async function handleResetPassword({ newPassword }: typeof initialValues) {
    try {
      toast.clearWaitingQueue();
      toast.dismiss();
      await confirmPasswordReset(auth, oobCode, newPassword);
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
      <section className="section-reset-password">
        <h1 className="section-title">Checking Link</h1>
        <div className="section-content">
          <Loading size="sm" />
        </div>
      </section>
    );
  else if (status === 'error')
    return (
      <section className="section-reset-password">
        <h1 className="section-title">Try resetting your password again</h1>
        <div className="section-content">
          <p className="section-description">
            Your request to reset your password has expired or the link has
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

  if (success)
    return (
      <section className="section-reset-password">
        <h1 className="section-title">Password changed</h1>
        <div className="section-content">
          <p className="section-description">
            You can now sign in with your new password for{' '}
            <span className="email">{email}</span>
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
    <section className="section-reset-password">
      <h1 className="section-title">Reset your password</h1>
      <div className="section-content">
        <div className="section-description">
          Enter new password and confirm it to reset for{' '}
          <span className="email">{email}</span>
        </div>
        <Formik
          initialValues={initialValues}
          onSubmit={handleResetPassword}
          validationSchema={validationSchema}
        >
          {({ isSubmitting }) => (
            <Form className="form-reset-password">
              <fieldset disabled={isSubmitting} className="form-fieldset">
                <PasswordField
                  label="New password"
                  id="newPassword"
                  name="newPassword"
                  autoComplete="off"
                />
                <PasswordField
                  label="Confirm new password"
                  id="confirmNewPassword"
                  name="confirmNewPassword"
                  autoComplete="new-password"
                />
              </fieldset>
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
                    'Reset password'
                  )}
                </Button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </section>
  );
}

export default ResetPassword;
