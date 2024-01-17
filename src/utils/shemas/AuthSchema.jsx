import * as Yup from 'yup';

const emailReq =
  // eslint-disable-next-line no-useless-escape
  /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
const passwordReq =
  // eslint-disable-next-line no-useless-escape
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/;

  export const  sendEmailSchema = Yup.object({
    email: Yup.string()
      // .required('Email field is required!')
      // .min(10)
      // .max(30)
      // .matches(emailReq, 'Enter a valid Email')
      .required("Поле електронної пошти обов'язкове!")
      .min(10)
      .max(30)
      .matches(emailReq, 'Введіть дійсну адресу електронної пошти!'),
    });  

  export const newPasswordSchema = Yup.object({
    newPassword: Yup.string()
    // .required('New password is required!')
    // .min(6, 'New password is too short. The minimum 6 symbols')
    // .max(16, 'New password is too long. The maximum 16 symbols')
    // .matches(
    //   passwordReq,
    //   'The must contain 6 characters, 1 uppercase, numbers, 1 special case character'
    // )
    .required('Потрібен новий пароль!')
    .min(6, 'Новий пароль занадто короткий. Мінімум 6 символів')
    .max(16, 'Новий пароль задовгий. Максимум 16 символів')
    .matches(
      passwordReq,
      'Повинен містити 6 символів, 1 великий регістр, цифри'
    ),
  
    repeatPassword: Yup.string()
    // .required('Repeated password is required!')
    // .oneOf([Yup.ref('newPassword'), ''], 'Repeated password must match')
    .required('Потрібен повторний пароль!')
    .oneOf([Yup.ref('newPassword'), ''], 'Пароль, що повторюється, має збігатися'),
  });  


export const loginSchema = Yup.object({
  email: Yup.string()
    // .required('Email field is required!')
    // .min(10)
    // .max(30)
    // .matches(emailReq, 'Enter a valid Email')
    .required("Поле електронної пошти обов'язкове!")
    .min(10)
    .max(30)
    .matches(emailReq, 'Введіть дійсну адресу електронної пошти!'),

  password: Yup.string()
    // .required('Password field is required!')
    // .min(6, 'Password is too short. The minimum 6 symbols')
    // .max(16, 'Password is too long. The maximum 16 symbols')
    .required("Поле пароля обов'язкове!")
    .min(6, 'Пароль занадто короткий. Мінімум 6 символів')
    .max(16, 'Пароль задовгий. Максимум 16 символів'),
});

export const registerSchema = Yup.object({
  name: Yup.string()
    // .required('Name field is required!')
    // .min(2, 'Name is too short')
    // .matches(/^[A-Za-z-\s]+$/, 'Name field can contain only Latin letters')
    .required("Поле імені обов'язкове для заповнення!")
    .min(2, "Ім'я занадто коротке" )
    .matches(/^[А-Яа-яA-Za-z-\s]+$/, 'Поле імені може містити лише кирилицю та латиницю'),

  email: Yup.string()
    // .required('Email field is required!')
    // .min(10)
    // .max(30)
    // .matches(emailReq, 'Invalid email format')
    .required("Поле електронної пошти обов'язкове для заповнення!")
    .min(10)
    .max(30)
    .matches(emailReq, 'Недійсний формат електронної пошти'),

  password: Yup.string()
    // .required('Password is required!')
    // .min(6, 'Password is too short. The minimum 6 symbols')
    // .max(16, 'Password is too long. The maximum 16 symbols')
    // .matches(
    //   passwordReq,
    //   'The must contain 6 characters, 1 uppercase, numbers, 1 special case character'
    // )
    .required("Поле пароля обов'язкове!")
    .min(6, 'Пароль занадто короткий. Мінімум 6 символів')
    .max(16, 'Пароль задовгий. Максимум 16 символів')
    .matches(
      passwordReq,
      'Повинен містити 6 символів, 1 великий регістр, цифри'
    ),

  confirmPassword: Yup.string()
    // .required('Password confirmation is required!')
    // .oneOf([Yup.ref('password'), ''], 'Password confirmation must match')
    .required('Потрібне підтвердження пароля!')
    .oneOf([Yup.ref('password'), ''], 'Підтвердження пароля має збігатися'),
});