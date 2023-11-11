import { useTitle } from 'react-use';
import { Link } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { toast } from 'react-toastify';
import { object } from 'yup';
import { Form, Formik } from 'formik';
import { auth } from '../../firebase/authentication';
import { getErrorMessage } from '../../utils/getErrorMessage';
import { currentPasswordSchema, emailSchema } from '../../schemas';
import { ErrorIcon, LoadingIcon } from '../../components/Icons';
import { ToastMessage } from '../../components/toast/Toast';
import FormField from '../../components/form-field/FormField';
import PasswordField from '../../components/password-field/PasswordField';
import Button from '../../components/ui/button/Button';
import './signin.scss';
import { FirebaseError } from 'firebase/app';

function Signin() {
  useTitle('Sign in to Dashboard | Dashboard');
  const signinInitialValues = {
    email: '',
    password: '',
  };
  const signinValidationSchema = object().shape({
    email: emailSchema,
    password: currentPasswordSchema,
  });

  async function handleSignin({ email, password }: typeof signinInitialValues) {
    try {
      toast.clearWaitingQueue();
      toast.dismiss();
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      let message;
      if (
        error instanceof FirebaseError &&
        error.code === 'auth/invalid-login-credentials'
      )
        message = 'Email or password is wrong';
      else message = getErrorMessage(error);
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

  return (
    <section className="signin-section">
      <h1 className="signin-title">Sign in to Dashboard</h1>
      <div className="signin-content">
        <Formik
          initialValues={signinInitialValues}
          onSubmit={handleSignin}
          validationSchema={signinValidationSchema}
        >
          {({ isSubmitting }) => (
            <Form className="signin-form">
              <fieldset disabled={isSubmitting} className="signin-fieldset">
                <FormField
                  type="email"
                  label="Email"
                  id="email"
                  name="email"
                  autoCapitalize="off"
                  autoCorrect="off"
                  autoComplete="email"
                  spellCheck="false"
                />
                <PasswordField
                  label="Password"
                  id="password"
                  name="password"
                  includeForget
                  autoComplete="current-password"
                />
              </fieldset>
              <div className="signin-button-container">
                <Button
                  type="submit"
                  className="signin-button"
                  transform
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <LoadingIcon className="loading-icon" />
                  ) : (
                    'Sign in'
                  )}
                </Button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
      <p className="signin-info">
        New to Dashboard?{' '}
        <Link to="/signup" className="signin-link">
          Create an account
        </Link>
      </p>
    </section>
  );
}

export default Signin;
