import { updateProfile } from 'firebase/auth';
import { toast } from 'react-toastify';
import { object } from 'yup';
import { useAuth } from '../../../hooks/use-auth';
import { useData } from '../../../hooks/use-data';
import { updateUserData } from '../../../firebase/firestore';
import { getErrorMessage } from '../../../utils/getErrorMessage';
import { formatName, formatPhoneNumber } from '../../../utils/formatFields';
import { countries } from '../../../data/countries';
import { languages } from '../../../data/languages';
import { genders } from '../../../data/genders';
import {
  dateSchema,
  nameSchema,
  phoneSchema,
  requiredSchema,
} from '../../../schemas';
import { Form, Formik } from 'formik';
import { ErrorIcon, LoadingIcon, SuccessIcon } from '../../../components/Icons';
import { ToastMessage } from '../../../components/toast/Toast';
import FormField from '../../../components/form-field/FormField';
import Button from '../../../components/ui/button/Button';
import DatePicker from '../../../components/ui/date-picker/DatePicker';
import ComboboxField from '../../../components/combobox-field/ComboboxField';
import RadioGroupField from '../../../components/radio-group-field/RadioGroupField';
import './update-personal-info.scss';

function UpdatePersonalInfo() {
  const { user, updateUser } = useAuth();
  const {
    userData: {
      firstName,
      lastName,
      dateOfBirth,
      country,
      language,
      phoneNumber,
      gender,
    },
  } = useData();
  const initialValues = {
    firstName,
    lastName,
    dateOfBirth,
    country,
    language,
    phoneNumber: phoneNumber || '+',
    gender,
  };
  const validationSchema = object().shape({
    firstName: nameSchema,
    lastName: nameSchema,
    dateOfBirth: dateSchema,
    country: requiredSchema,
    language: requiredSchema,
    phoneNumber: phoneSchema,
    gender: requiredSchema,
  });

  async function handleChangePersonalInfo({
    firstName,
    lastName,
    phoneNumber,
    ...otherValues
  }: typeof initialValues) {
    try {
      toast.clearWaitingQueue();
      toast.dismiss();
      await updateProfile(user!, {
        displayName: `${formatName(firstName)} ${formatName(lastName)}`,
      });
      const updatedUserData = {
        firstName: formatName(firstName),
        lastName: formatName(lastName),
        phoneNumber: formatPhoneNumber(phoneNumber),
        updatedAt: new Date(),
        ...otherValues,
      };
      await updateUserData(user!.uid, updatedUserData);
      updateUser();
      toast.success(
        <ToastMessage
          title="Amazing! Success"
          description="Personal info has been changed"
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
    <section className="section-change-personal-info">
      <h2 className="section-title">Update personal info</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleChangePersonalInfo}
      >
        {({ isSubmitting }) => (
          <Form className="form-change-personal-info">
            <fieldset className="form-fieldset" disabled={isSubmitting}>
              <FormField
                type="text"
                id="firstName"
                name="firstName"
                label="First name"
                autoCorrect="off"
                autoComplete="off"
                spellCheck="false"
              />
              <FormField
                type="text"
                id="lastName"
                name="lastName"
                label="Last name"
                autoCorrect="off"
                autoComplete="off"
                spellCheck="false"
              />
              <DatePicker
                id="dateOfBirth"
                name="dateOfBirth"
                label="Date of birth"
              />
              <ComboboxField
                id="country"
                name="country"
                label="Country"
                placeholder="Select country..."
                list={countries}
              />
              <ComboboxField
                id="language"
                name="language"
                label="Language"
                placeholder="Select language..."
                list={languages}
              />
              <FormField
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                label="Phone number"
              />
              <RadioGroupField
                id="gender"
                name="gender"
                label="Gender"
                list={genders}
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
                  'Update personal info'
                )}
              </Button>
            </div>
          </Form>
        )}
      </Formik>
    </section>
  );
}

export default UpdatePersonalInfo;
