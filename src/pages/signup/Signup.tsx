import { useTitle } from 'react-use';
import { Link } from 'react-router-dom';
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
  updateProfile,
} from 'firebase/auth';
import { toast } from 'react-toastify';
import { object } from 'yup';
import { Form, Formik } from 'formik';
import { auth } from '../../firebase/authentication';
import { initializeUserData } from '../../firebase/firestore';
import { getErrorMessage } from '../../utils/getErrorMessage';
import {
  emailSchema,
  passwordSchema,
  confirmPasswordSchema,
  nameSchema,
} from '../../schemas';
import { ErrorIcon, InfoIcon, LoadingIcon } from '../../components/Icons';
import { ToastMessage } from '../../components/toast/Toast';
import FormField from '../../components/form-field/FormField';
import PasswordField from '../../components/password-field/PasswordField';
import Button from '../../components/ui/button/Button';
import './signup.scss';
import { formatName } from '../../utils/formatFields';
import { useAuth } from '../../hooks/use-auth';

function Signup() {
  const { updateUser } = useAuth();
  useTitle('Sign up to Dashboard | Dashboard');
  const signupInitialValues = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  };
  const signupValidationSchema = object().shape({
    firstName: nameSchema,
    lastName: nameSchema,
    email: emailSchema,
    password: passwordSchema,
    confirmPassword: confirmPasswordSchema,
  });

  async function handleSignup({
    firstName,
    lastName,
    email,
    password,
  }: typeof signupInitialValues) {
    try {
      toast.clearWaitingQueue();
      toast.dismiss();
      const { user } = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      await updateProfile(user, {
        displayName: `${formatName(firstName)} ${formatName(lastName)}`,
      });
      await initializeUserData(user.uid, {
        firstName: formatName(firstName),
        lastName: formatName(lastName),
        createdAt: new Date(),
        updatedAt: new Date(),
      });
      await sendEmailVerification(user);
      updateUser();
      toast.info(
        <ToastMessage
          title="Info catch up"
          description="Check your inbox for email verification"
        />,
        {
          icon: InfoIcon,
        }
      );
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

  return (
    <section className="signup-section">
      <h1 className="signup-title">Sign up to Dashboard</h1>
      <div className="signup-content">
        <Formik
          initialValues={signupInitialValues}
          onSubmit={handleSignup}
          validationSchema={signupValidationSchema}
        >
          {({ isSubmitting }) => (
            <Form className="signup-form">
              <fieldset disabled={isSubmitting} className="signup-fieldset">
                <div className="names-fields">
                  <FormField
                    type="text"
                    label="First name"
                    id="firstName"
                    name="firstName"
                    spellCheck="false"
                    autoComplete="off"
                  />
                  <FormField
                    type="text"
                    label="Last name"
                    id="lastName"
                    name="lastName"
                    spellCheck="false"
                    autoComplete="off"
                  />
                </div>
                <FormField
                  type="email"
                  label="Email"
                  id="email"
                  name="email"
                  autoComplete="off"
                  autoCorrect="off"
                  spellCheck="false"
                />
                <PasswordField
                  label="Password"
                  id="password"
                  name="password"
                  autoComplete="off"
                />
                <PasswordField
                  label="Confirm Password"
                  id="confirmPassword"
                  name="confirmPassword"
                  autoComplete="off"
                />
              </fieldset>
              <div className="signup-button-container">
                <Button
                  type="submit"
                  className="signup-button"
                  transform
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <LoadingIcon className="loading-icon" />
                  ) : (
                    'Sign up'
                  )}
                </Button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
      <p className="signup-info">
        Already have an account?{' '}
        <Link to="/signin" className="signup-link">
          Sign in now
        </Link>
      </p>
    </section>
  );
}

export default Signup;
