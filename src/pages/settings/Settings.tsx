import { useTitle } from 'react-use';
import { Link } from 'react-router-dom';
import {
  EmailAuthProvider,
  deleteUser,
  reauthenticateWithCredential,
  sendEmailVerification,
  updateEmail,
  updatePassword,
} from 'firebase/auth';
import { toast } from 'react-toastify';
import { object } from 'yup';
import { useAuth } from '../../hooks/use-auth';
import { deleteUserData } from '../../firebase/firestore';
import { getErrorMessage } from '../../utils/getErrorMessage';
import {
  confirmNewEmailSchema,
  confirmNewPasswordSchema,
  currentPasswordSchema,
  emailSchema,
  passwordSchema,
} from '../../schemas';
import { Form, Formik, FormikHelpers } from 'formik';
import {
  ErrorIcon,
  InfoIcon,
  LoadingIcon,
  SuccessIcon,
} from '../../components/Icons';
import { ToastMessage } from '../../components/toast/Toast';
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '../../components/ui/alert-dialog/AlertDialog';
import Title from '../../components/title/Title';
import FormField from '../../components/form-field/FormField';
import PasswordField from '../../components/password-field/PasswordField';
import Button from '../../components/ui/button/Button';
import './settings.scss';

function Settings() {
  useTitle('Dashboard | Settings');
  const { user, updateUser } = useAuth();
  const changeEmailInitialValues = {
    password: '',
    newEmail: '',
    confirmNewEmail: '',
  };
  const changeEmailValidationSchema = object().shape({
    password: currentPasswordSchema,
    newEmail: emailSchema.notOneOf([user!.email], 'Same as current email'),
    confirmNewEmail: confirmNewEmailSchema,
  });
  const changePasswordInitialValues = {
    currentPassword: '',
    newPassword: '',
    confirmNewPassword: '',
  };
  const changePasswordValidationSchema = object().shape({
    currentPassword: currentPasswordSchema,
    newPassword: passwordSchema,
    confirmNewPassword: confirmNewPasswordSchema,
  });
  const deleteAccountInitialValues = {
    password: '',
  };
  const deleteAccountValidationSchema = object().shape({
    password: currentPasswordSchema,
  });

  async function reauthenticate(password: string) {
    const credential = EmailAuthProvider.credential(user!.email!, password);
    await reauthenticateWithCredential(user!, credential);
  }

  async function handleSendEmailVerification() {
    try {
      toast.clearWaitingQueue();
      toast.dismiss();
      await sendEmailVerification(user!);
      toast.success(
        <ToastMessage
          title="Amazing! Success"
          description="Check your inbox for email verification"
        />,
        {
          icon: SuccessIcon,
        }
      );
    } catch (error) {
      const errorMessage = getErrorMessage(error);
      toast.error(
        <ToastMessage
          title="Oops! Something went wrong"
          description={errorMessage}
        />,
        {
          icon: ErrorIcon,
        }
      );
    }
  }

  async function handleChangeEmail(
    { password, newEmail }: typeof changeEmailInitialValues,
    { resetForm }: FormikHelpers<typeof changeEmailInitialValues>
  ) {
    try {
      toast.clearWaitingQueue();
      toast.dismiss();
      await reauthenticate(password);
      await updateEmail(user!, newEmail);
      updateUser();
      resetForm();
      toast.success(
        <ToastMessage
          title="Amazing! Success"
          description="Email has been changed"
        />,
        {
          icon: SuccessIcon,
        }
      );
      await sendEmailVerification(user!);
      toast.info(
        <ToastMessage
          title="Attention! Info"
          description="Check your inbox for email verification"
        />,
        {
          icon: InfoIcon,
        }
      );
    } catch (error) {
      const errorMessage = getErrorMessage(error);
      toast.error(
        <ToastMessage
          title="Uh oh! Something went wrong"
          description={errorMessage}
        />,
        {
          icon: ErrorIcon,
        }
      );
    }
  }

  async function handleChangePassword(
    { currentPassword, newPassword }: typeof changePasswordInitialValues,
    { resetForm }: FormikHelpers<typeof changePasswordInitialValues>
  ) {
    try {
      toast.clearWaitingQueue();
      toast.dismiss();
      await reauthenticate(currentPassword);
      await updatePassword(user!, newPassword);
      resetForm();
      toast.success(
        <ToastMessage
          title="Amazing! Success"
          description="Password has been changed"
        />,
        {
          icon: SuccessIcon,
        }
      );
    } catch (error) {
      const errorMessage = getErrorMessage(error);
      toast.error(
        <ToastMessage
          title="Uh oh! Something went wrong"
          description={errorMessage}
        />,
        {
          icon: ErrorIcon,
        }
      );
    }
  }

  async function handleDeleteAccount({
    password,
  }: typeof deleteAccountInitialValues) {
    try {
      toast.clearWaitingQueue();
      toast.dismiss();
      await reauthenticate(password);
      await deleteUser(user!);
      await deleteUserData(user!.uid);
      toast.success(
        <ToastMessage
          title="Amazing! Success"
          description="Your account has been deleted"
        />,
        {
          icon: SuccessIcon,
        }
      );
    } catch (error) {
      const errorMessage = getErrorMessage(error);
      toast.error(
        <ToastMessage
          title="Uh oh! Something went wrong"
          description={errorMessage}
        />,
        {
          icon: ErrorIcon,
        }
      );
    }
  }

  return (
    <div className="settings">
      <Title title="Settings" />
      <section className="section-email-verification">
        <h2 className="section-title">Email verification</h2>
        <p className="section-description">
          {user!.emailVerified
            ? 'You are welcomed. Your email is verified.'
            : "Your email isn't verified. Click the button to receive an email to verify your email address by clicking the link in the email we will send to you."}
        </p>
        {user!.emailVerified || (
          <Formik initialValues={{}} onSubmit={handleSendEmailVerification}>
            {({ isSubmitting }) => (
              <Form className="form-email-verification">
                <div className="form-actions">
                  <Button
                    type="submit"
                    className="submit-button"
                    shadow
                    transform
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <LoadingIcon className="loading-icon" />
                    ) : (
                      'Send email verification'
                    )}
                  </Button>
                </div>
              </Form>
            )}
          </Formik>
        )}
      </section>
      <section className="section-change-email">
        <h2 className="section-title">Change Email</h2>
        <div>
          <p className="section-description">
            You are already registered with the following email:{' '}
            <span className="current-email">{user!.email}</span>
          </p>
          <p className="section-description">
            If you would like to sign-in and receive emails on a different
            address, enter your password, then enter your new email and confirm
            it:
          </p>
        </div>
        <Formik
          initialValues={changeEmailInitialValues}
          validationSchema={changeEmailValidationSchema}
          onSubmit={handleChangeEmail}
        >
          {({ isSubmitting }) => (
            <Form className="form-change-email">
              <fieldset className="form-fieldset" disabled={isSubmitting}>
                <PasswordField
                  id="password"
                  name="password"
                  label="Password"
                  autoComplete="off"
                />
                <FormField
                  type="email"
                  id="newEmail"
                  name="newEmail"
                  label="New email"
                  autoComplete="off"
                />
                <FormField
                  type="email"
                  id="confirmNewEmail"
                  name="confirmNewEmail"
                  label="Confirm new email"
                  autoComplete="off"
                />
              </fieldset>
              <div className="form-actions">
                <Button
                  type="submit"
                  className="submit-button"
                  shadow
                  transform
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <LoadingIcon className="loading-icon" />
                  ) : (
                    'Update email'
                  )}
                </Button>
              </div>
            </Form>
          )}
        </Formik>
      </section>
      <section className="section-change-password">
        <h2 className="section-title">Change Password</h2>
        <p className="section-description">
          To change your account password, enter your current password, then
          enter your new password and confirm it.
        </p>
        <Formik
          initialValues={changePasswordInitialValues}
          validationSchema={changePasswordValidationSchema}
          onSubmit={handleChangePassword}
        >
          {({ isSubmitting }) => (
            <Form className="form-change-password">
              <fieldset className="form-fieldset" disabled={isSubmitting}>
                <PasswordField
                  id="currentPassword"
                  name="currentPassword"
                  label="Current password"
                  autoComplete="current-password"
                />
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
                  shadow
                  transform
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <LoadingIcon className="loading-icon" />
                  ) : (
                    'Update password'
                  )}
                </Button>
                <Link to="/forgot-password" className="forgot-link">
                  Forgot password?
                </Link>
              </div>
            </Form>
          )}
        </Formik>
      </section>
      <section className="section-delete-account">
        <h2 className="section-title">Delete account</h2>
        <p className="section-description">
          Once you delete your account, there is no going back. Please be
          certain.
        </p>
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button
              className="delete-account-alert-dialog-trigger"
              variant="destructive"
              shadow
              transform
            >
              Delete my account
            </Button>
          </AlertDialogTrigger>
          <AlertDialogContent className="delete-account-alert-dialog-content">
            <AlertDialogHeader>
              <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
              <AlertDialogDescription>
                This action cannot be undone. This will permanently delete your
                account and remove your data from our servers.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <Formik
              initialValues={deleteAccountInitialValues}
              validationSchema={deleteAccountValidationSchema}
              onSubmit={handleDeleteAccount}
            >
              {({ isSubmitting }) => (
                <Form className="form-delete-account">
                  <fieldset className="form-fieldset" disabled={isSubmitting}>
                    <PasswordField
                      label="Password"
                      id="password"
                      name="password"
                      autoComplete="off"
                    />
                  </fieldset>
                  <div className="form-actions">
                    <AlertDialogCancel asChild>
                      <Button variant="outline" transform shadow>
                        Cancel
                      </Button>
                    </AlertDialogCancel>
                    <Button
                      type="submit"
                      variant="destructive"
                      className="submit-button"
                      shadow
                      transform
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <LoadingIcon className="loading-icon" />
                      ) : (
                        'Delete my account'
                      )}
                    </Button>
                  </div>
                </Form>
              )}
            </Formik>
          </AlertDialogContent>
        </AlertDialog>
      </section>
    </div>
  );
}

export default Settings;
