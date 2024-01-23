import { useEffect, useState } from 'react';
import { Form, Formik } from 'formik';
import { useDispatch } from 'react-redux';
// import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { registerSchema } from 'utils/shemas/AuthSchema';
import { Google } from 'components/Icons/Google';

import { ConfirmationRegistration } from 'components/ConfirmationRegistration/ConfirmationRegistration';

import {
  FormContainer,
  Titel,
  FormField,
  InputNameWraper,
  InputEmailWraper,
  InputPasswordWraper,
  InputForm,
  IconWraper,
  IconCheck,
  IconCross,
  ErrorMess,
  SuccessMessage,
  Button,
  OnIconPass,
  OffIconPass,
  OnIconConPass,
  OffIconConPass,
} from './AuthForm.styled';

import { register } from 'redux/api/auth-operations';
import { theme } from 'styles';
import { CheckCircle, CrossToDelete } from 'components/Icons';
import { useAuth } from 'hooks/useAuth';
import Loader from 'components/Loader/Loader';

const initialValues = {
  name: '',
  email: '',
  password: '',
  confirmPassword: '',
};

export function AuthForm() {
  const [passwordShow, setPasswordShow] = useState(false);
  const [confirmPasswordShow, setConfirmPasswordShow] = useState(false);
  const [showConfirmModal, setShowConfirmModal] = useState(false);

  const dispatch = useDispatch();

  const { isError, isRegistered, isLoading } = useAuth();

  useEffect(() => {
    if (isError?.status === 409) {
      setShowConfirmModal(false);
      return;
    }
    if (isRegistered) {
      setShowConfirmModal(true);
    }
  }, [isError, isRegistered]);

  const togglePassword = () => setPasswordShow(prevState => !prevState);
  const toggleConfirmPassword = () =>
    setConfirmPasswordShow(prevState => !prevState);

  const handleSubmit = async (values, { resetForm }) => {
    const newUser = {
      name: values.name,
      email: values.email,
      password: values.password,
    };
    dispatch(register(newUser));
    resetForm();
  };

  return (
    <FormContainer>
      {!showConfirmModal && !isLoading && (
        <Formik
          validationSchema={registerSchema}
          initialValues={initialValues}
          onSubmit={handleSubmit}
        >
          {({ values, errors, touched, setFieldValue, isSubmitting }) => (
            <Form>
              <Titel>Реєстрація</Titel>
              <FormField>
                <InputNameWraper
                  style={{
                    borderColor: !touched.name
                      ? `${theme.colors.green}`
                      : errors.name
                      ? `${theme.colors.brightRed}`
                      : `${theme.colors.brightGreen}`,
                  }}
                >
                  <InputForm
                    name="name"
                    type="name"
                    placeholder="Ім'я"
                    autoComplete="on"
                  />
                </InputNameWraper>
                {!errors.name && touched.name ? (
                  <SuccessMessage>Успіх, ім'я дійсне!</SuccessMessage>
                ) : null}

                <IconWraper>
                  {!touched.name ? null : !errors.name ? (
                    <IconCheck style={{ marginLeft: '36px' }}>
                      <CheckCircle />
                    </IconCheck>
                  ) : (
                    <IconCross
                      style={{ marginLeft: '36px' }}
                      id="resetBtn"
                      onClick={() => {
                        setFieldValue('name', '');
                      }}
                    >
                      <CrossToDelete />
                    </IconCross>
                  )}
                </IconWraper>

                <ErrorMess name="name" component="p" />
              </FormField>

              <FormField>
                <InputEmailWraper
                  style={{
                    borderColor: !touched.email
                      ? `${theme.colors.green}`
                      : errors.email
                      ? `${theme.colors.brightRed}`
                      : `${theme.colors.brightGreen}`,
                  }}
                >
                  <InputForm
                    name="email"
                    type="email"
                    placeholder="Електронна пошта "
                    autoComplete="on"
                  />
                </InputEmailWraper>
                {!errors.email && touched.email ? (
                  <SuccessMessage>
                    Успіх, електронна пошта дійсна!
                  </SuccessMessage>
                ) : null}

                <IconWraper>
                  {!touched.email ? null : !errors.email ? (
                    <IconCheck style={{ marginLeft: '36px' }}>
                      <CheckCircle />
                    </IconCheck>
                  ) : (
                    <IconCross
                      style={{ marginLeft: '36px' }}
                      // id="resetBtn"
                      onClick={() => {
                        setFieldValue('email', '');
                      }}
                    >
                      <CrossToDelete />
                    </IconCross>
                  )}
                </IconWraper>

                <ErrorMess name="email" component="p"></ErrorMess>
              </FormField>

              <FormField>
                <InputPasswordWraper
                  style={{
                    borderColor: !touched.password
                      ? `${theme.colors.green}`
                      : errors.password
                      ? `${theme.colors.brightRed}`
                      : `${theme.colors.brightGreen}`,
                  }}
                >
                  <InputForm
                    name="password"
                    type={passwordShow ? 'text' : 'password'}
                    placeholder="Пароль"
                    autoComplete="off"
                  />
                </InputPasswordWraper>

                <IconWraper>
                  {!touched.password ? null : !errors.password ? (
                    <IconCheck>
                      <CheckCircle />
                    </IconCheck>
                  ) : (
                    <IconCross
                      // id="resetBtn"
                      onClick={() => {
                        setFieldValue('password', '');
                      }}
                    >
                      <CrossToDelete />
                    </IconCross>
                  )}

                  <span id="visibilityBtn" onClick={togglePassword}>
                    {passwordShow ? <OnIconPass /> : <OffIconPass />}
                  </span>
                </IconWraper>

                {!errors.password && touched.password ? (
                  <SuccessMessage>Успіх, пароль дійсний!</SuccessMessage>
                ) : null}

                <ErrorMess name="password" component="p" />
              </FormField>

              <FormField>
                <InputPasswordWraper
                  style={{
                    borderColor: !touched.confirmPassword
                      ? `${theme.colors.green}`
                      : errors.confirmPassword
                      ? `${theme.colors.brightRed}`
                      : `${theme.colors.brightGreen}`,
                  }}
                >
                  <InputForm
                    name="confirmPassword"
                    type={confirmPasswordShow ? 'text' : 'password'}
                    placeholder="Повтор пароля"
                    autoComplete="off"
                  />
                </InputPasswordWraper>

                <IconWraper>
                  {!touched.confirmPassword ? null : !errors.confirmPassword ? (
                    <IconCheck>
                      <CheckCircle />
                    </IconCheck>
                  ) : (
                    <IconCross
                      // id="resetBtn"
                      onClick={() => {
                        setFieldValue('confirmPassword', '');
                      }}
                    >
                      <CrossToDelete />
                    </IconCross>
                  )}

                  <span id="visibilityBtn" onClick={toggleConfirmPassword}>
                    {confirmPasswordShow ? (
                      <OnIconConPass />
                    ) : (
                      <OffIconConPass />
                    )}
                  </span>
                </IconWraper>

                {!errors.confirmPassword && touched.confirmPassword ? (
                  <SuccessMessage>Успіх, пароль співпадає!</SuccessMessage>
                ) : null}

                <ErrorMess name="confirmPassword" component="p" />
              </FormField>

                <Button type="submit" disabled={isSubmitting}>
                  Реєстрація
                </Button>
                <Button type="button"><Google/>Вхід через Google</Button>
            </Form>
          )}
        </Formik>
      )}

      {isLoading && <Loader />}

      {showConfirmModal && !isLoading && <ConfirmationRegistration />}
    </FormContainer>
  );
}
