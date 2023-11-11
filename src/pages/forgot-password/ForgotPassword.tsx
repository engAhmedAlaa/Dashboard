import { useState } from 'react';
import { useTitle } from 'react-use';
import { Link } from 'react-router-dom';
import { sendPasswordResetEmail } from 'firebase/auth';
import { toast } from 'react-toastify';
import { object } from 'yup';
import { Form, Formik } from 'formik';
import { useAuth } from '../../hooks/use-auth';
import { auth } from '../../firebase/authentication';
import { getErrorMessage } from '../../utils/getErrorMessage';
import { emailSchema } from '../../schemas';
import { ErrorIcon, LoadingIcon } from '../../components/Icons';
import { ToastMessage } from '../../components/toast/Toast';
import FormField from '../../components/form-field/FormField';
import Button from '../../components/ui/button/Button';
import './forgot-password.scss';

function ForgotPassword() {
  useTitle('Forgot your password | Dashboard');
  const { user } = useAuth();
  const [success, setSuccess] = useState(false);
  const initialValues = {
    email: '',
  };
  const validationSchema = object().shape({
    email: emailSchema,
  });

  function handleRetry() {
    setSuccess(false);
  }

  async function handleSendPasswordResetEmail({ email }: typeof initialValues) {
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

  if (success)
    return (
      <section className="section-forgot-password">
        <h1 className="section-title">Check your email</h1>
        <div className="section-content">
          <p className="section-description">
            Check your email for a link to reset your password. If it doesn't
            appear within a few minutes, check your spam folder.
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
    <section className="section-forgot-password">
      <h1 className="section-title">Forgot your password</h1>
      <div className="section-content">
        <p className="section-description">
          Enter your user account's verified email address and we will send you
          a password reset link.
        </p>
        <Formik
          initialValues={initialValues}
          onSubmit={handleSendPasswordResetEmail}
          validationSchema={validationSchema}
        >
          {({ isSubmitting }) => (
            <Form className="form-forgot-password">
              <fieldset disabled={isSubmitting} className="form-fieldset">
                <FormField
                  type="email"
                  label="Email"
                  id="email"
                  name="email"
                  autoComplete="email"
                  autoCorrect="off"
                  spellCheck="false"
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
                    'Send reset password email'
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

export default ForgotPassword;
