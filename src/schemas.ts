import { phone } from 'phone';
import { boolean, date, number, ref, string } from 'yup';

const emailRegex =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const nameSchema = string()
  .min(2, 'Too short')
  .max(50, 'Too long')
  .required('Required');

export const emailSchema = string()
  .email('Invalid email')
  .matches(emailRegex, { message: 'Invalid email' })
  .required('Required');

export const confirmNewEmailSchema = string()
  .oneOf([ref('newEmail')], "Email doesn't match")
  .required('Required');

export const passwordSchema = string()
  .matches(/(?=[^a-z]*[a-z])/, {
    message: 'Must contain at least one lowercase letter',
  })
  .matches(/(?=[^A-Z]*[A-Z])/, {
    message: 'Must contain at least one uppercase letter',
  })
  .matches(/(?=\D*\d)/, {
    message: 'Must contain at least one number',
  })
  .matches(/(?=[^!@#$%^&*()\-_=+{};:,<.>]*[!@#$%^&*()\-_=+{};:,<.>])/, {
    message: 'Must contain at least one special character',
  })
  .matches(/^\S{8,30}$/, {
    message: 'Must be only letters, numbers and special characters from 8-30',
  })
  .required('Required');

export const confirmPasswordSchema = string()
  .oneOf([ref('password')], "Password doesn't match")
  .required('Required');

export const currentPasswordSchema = string().required('Required');

export const confirmNewPasswordSchema = string()
  .oneOf([ref('newPassword')], "Password doesn't match")
  .required('Required');

export const dateSchema = date().required('Required');

export const requiredSchema = string().required('Required');

export const ageSchema = number()
  .min(18, 'Min is 18')
  .max(60, 'Max is 60')
  .required('Required');

export const quantitySchema = number()
  .min(1, 'Min is 1')
  .max(100, 'Max is 100')
  .required('Required');

export const priceSchema = number()
  .min(1, 'Min is 1')
  .max(1000000, 'Max is 1000000')
  .required('Required');

export const phoneSchema = string()
  .test(
    'isPrefixExist',
    'Start with (+) sign',
    (value) => value?.trim().at(0) === '+'
  )
  .test('isValidPhone', 'Enter a valid phone', (value) => phone(value!).isValid)
  .required('Required');

export const booleanSchema = boolean();
