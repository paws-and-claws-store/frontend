import * as Yup from 'yup';

const emailReq =
  // eslint-disable-next-line no-useless-escape
  /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
const passwordReq =
  // eslint-disable-next-line no-useless-escape
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/;

  export const newPasswordSchema = Yup.object({
    newPassword: Yup.string()
    .required('New password is required!')
    .min(6, 'New password is too short. The minimum 6 symbols')
    .max(16, 'New password is too long. The maximum 16 symbols')
    .matches(
      passwordReq,
      'The must contain 6 characters, 1 uppercase, numbers, 1 special case character'
    ),
  
    repeatPassword: Yup.string()
    .required('Repeated password is required!')
    .oneOf([Yup.ref('newPassword'), ''], 'Repeated password must match'),
  });  

export const loginSchema = Yup.object({
  email: Yup.string()
    .required('Email field is required!')
    .min(10)
    .max(30)
    .matches(emailReq, 'Enter a valid Email'),

  password: Yup.string()
    .required('Password field is required!')
    .min(6, 'Password is too short. The minimum 6 symbols')
    .max(16, 'Password is too long. The maximum 16 symbols'),
});

export const registerSchema = Yup.object({
  name: Yup.string()
    .required('Name field is required!')
    .min(2, 'Name is too short')
    .matches(/^[A-Za-z-\s]+$/, 'Name field can contain only Latin letters'),

  email: Yup.string()
    .required('Email field is required!')
    .min(10)
    .max(30)
    .matches(emailReq, 'Invalid email format'),

  password: Yup.string()
    .required('Password is required!')
    .min(6, 'Password is too short. The minimum 6 symbols')
    .max(16, 'Password is too long. The maximum 16 symbols')
    .matches(
      passwordReq,
      'The must contain 6 characters, 1 uppercase, numbers, 1 special case character'
    ),

  confirmPassword: Yup.string()
    .required('Password confirmation is required!')
    .oneOf([Yup.ref('password'), ''], 'Password confirmation must match'),
});