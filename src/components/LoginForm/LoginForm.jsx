import { useState, useEffect, useRef } from 'react';
import { Form, Formik } from 'formik';
// import { useNavigate } from 'react-router-dom';
import { loginSchema } from 'utils/shemas/AuthSchema';
import { useDispatch } from 'react-redux';
// import { login } from 'redux/auth/auth-operations';
// import { useAuth } from 'hooks/useAuth';
import { login } from 'redux/api/auth-operations';

import {
  LogFormContainer,
  Titel,
  FormField,
  InputEmailWraper,
  InputPasswordWraper,
  InputForm,
  //   IconWraper,
  //   IconCheck,
  //   IconCross,
  ErrorMess,
  SuccessMessage,
  Button,
  ToRegister,
  LinkStyled,
  //   OnIcon,
  //   OffIcon,
} from './LoginForm.styled';
import { theme } from 'styles';
// import { Check, Cross } from 'components/icons';

const initialValues = {
  email: '',
  password: '',
};

export function LoginForm({ setUserMenuTogle }) {
  const [
    passwordShow,
    //  setPasswordShow
  ] = useState(false);
  // const togglePassword = () => setPasswordShow(prevState => !prevState);
  const dispatch = useDispatch();
  // const navigate = useNavigate();


  const handleSubmit = (values, { resetForm }) => {
    const data = {
      email: values.email,
      password: values.password,
    };
     dispatch(login(data));
    resetForm();
  };


  //   useEffect(() => {
  //     if (isLoggedIn) {
  //       navigate('/user');
  //     }
  //   }, [isLoggedIn, navigate]);

  return (
    <LogFormContainer >
      <Formik
        validationSchema={loginSchema}
        initialValues={initialValues}
        onSubmit={handleSubmit}
      >
        {({
          values,
          errors,
          touched,
          resetForm,
          setFieldValue,
          isSubmitting,
        }) => (
          <Form>
            <Titel>Вхід до мого профілю</Titel>
            <FormField>
              <InputEmailWraper
                style={{
                  borderColor: !touched.email
                    ? `${theme.colors.blue}`
                    : errors.email
                    ? `${theme.colors.red}`
                    : `${theme.colors.green}`,
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
                <SuccessMessage>Success, email is valid!</SuccessMessage>
              ) : null}

              {/* <IconWraper>
                {!touched.email ? null : !errors.email ? (
                  <IconCheck style={{ marginLeft: '32px' }}>
                    <Check />
                  </IconCheck>
                ) : (
                  <IconCross
                    style={{ marginLeft: '32px' }}
                    id="resetBtn"
                    onClick={() => {
                      setFieldValue('email', '');
                    }}
                  >
                    <Cross />
                  </IconCross>
                )}
              </IconWraper> */}

              <ErrorMess name="email" component="p" />
            </FormField>

            <FormField>
              <InputPasswordWraper
                style={{
                  borderColor: !touched.password
                    ? `${theme.colors.blue}`
                    : errors.password
                    ? `${theme.colors.red}`
                    : `${theme.colors.green}`,
                }}
              >
                <InputForm
                  name="password"
                  type={passwordShow ? 'text' : 'password'}
                  placeholder="Пароль"
                  autoComplete="on"
                />
              </InputPasswordWraper>

              {!errors.password && touched.password ? (
                <SuccessMessage>Password is secure</SuccessMessage>
              ) : null}

              {/* <IconWraper>
                {!touched.password ? null : !errors.password ? (
                  <IconCheck>
                    <Check />
                  </IconCheck>
                ) : (
                  <IconCross
                    id="resetBtn"
                    onClick={() => {
                      setFieldValue('password', '');
                    }}
                  >
                    <Cross />
                  </IconCross>
                )}

                <span id="visibilityBtn" onClick={togglePassword}>
                  {passwordShow ? <OnIcon /> : <OffIcon />}
                </span>
              </IconWraper> */}

              <ErrorMess name="password" component="p" />
            </FormField>
            <div>
              <Button type="submit" disabled={isSubmitting}>
                Увійти
              </Button>
            </div>

            <ToRegister>
              <button style={{ fontSize: '20px', color: 'black' }}>
                Забули пароль?
              </button>
              <LinkStyled
                to="/registration"
                onClick={() => {
                  setUserMenuTogle(false);
                }}
              >
                Реєстрація
              </LinkStyled>
            </ToRegister>
          </Form>
        )}
      </Formik>
    </LogFormContainer>
  );
}
