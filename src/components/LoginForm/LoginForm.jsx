import {
  useState,
} from 'react';
import { Form, Formik } from 'formik';
import { loginSchema } from 'utils/shemas/AuthSchema';
import { useDispatch } from 'react-redux';
// import { login } from 'redux/auth/auth-operations';
// import { useAuth } from 'hooks/useAuth';
import { login } from 'redux/api/auth-operations';
import { PasswordRecovery } from 'components/PasswordRecovery/PasswordRecoveryWindow/PasswordRecoveryWindow';

import {
  LogFormContainer,
  Titel,
  FormField,
  InputEmailWraper,
  InputPasswordWraper,
  InputForm,
    IconWraper,
    IconCheck,
    IconCross,
  ErrorMess,
  SuccessMessage,
  Button,
  ToRegister,
  LinkStyled,
    OnIcon,
    OffIcon,
  PassRecoveryBtn,
} from './LoginForm.styled';
import { theme } from 'styles';
import { CheckCircle, CrossToDelete } from 'components/Icons';

const initialValues = {
  email: '',
  password: '',
};

export function LoginForm({ setUserMenuTogle }) {
  const [showWindouwRecoveryPass, setShowWindouwRecoveryPass] = useState(false)
  const [
    passwordShow,
     setPasswordShow
  ] = useState(false);
  const togglePassword = () => setPasswordShow(prevState => !prevState);
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    const data = {
      email: values.email,
      password: values.password,
    };
    resetForm();
    dispatch(login(data));
  };

  return ( showWindouwRecoveryPass
    ? <PasswordRecovery setShowWindouwRecoveryPass={setShowWindouwRecoveryPass}/>
   : <LogFormContainer>
      <Formik
        validationSchema={loginSchema}
        initialValues={initialValues}
        onSubmit={handleSubmit}
      >
        {({
          errors,
          touched,
          setFieldValue,
          isSubmitting,
        }) => (
          <Form>
            <Titel>Вхід до мого профілю</Titel>
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
                <SuccessMessage>Успіх, електронна пошта дійсна!</SuccessMessage>
              ) : null}

              <IconWraper>
                {!touched.email ? null : !errors.email ? (
                  <IconCheck style={{ marginLeft: '32px' }}>
                    <CheckCircle />
                  </IconCheck>
                ) : (
                  <IconCross
                    style={{ marginLeft: '32px' }}
                    id="resetBtn"
                    onClick={() => {
                      setFieldValue('email', '');
                    }}
                  >
                    <CrossToDelete />
                  </IconCross>
                )}
              </IconWraper>

              <ErrorMess name="email" component="p" />
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
                  autoComplete="on"
                />
              </InputPasswordWraper>

              {!errors.password && touched.password ? (
                <SuccessMessage>Пароль безпечний</SuccessMessage>
              ) : null}

              <IconWraper>
                {!touched.password ? null : !errors.password ? (
                  <IconCheck>
                    <CheckCircle />
                  </IconCheck>
                ) : (
                  <IconCross
                    id="resetBtn"
                    onClick={() => {
                      setFieldValue('password', '');
                    }}
                  >
                    <CrossToDelete />
                  </IconCross>
                )}

                <span id="visibilityBtn" onClick={togglePassword}>
                  {passwordShow ? <OnIcon /> : <OffIcon />}
                </span>
              </IconWraper>

              <ErrorMess name="password" component="p" />
            </FormField>
            <div>
              <Button type="submit" disabled={isSubmitting}>
                Увійти
              </Button>
            </div>
          </Form>
        )}
      </Formik>
      <ToRegister>
              <PassRecoveryBtn type='button' style={{ fontSize: '20px', color: 'black' }} onClick={()=>setShowWindouwRecoveryPass(true)}>
                Забули пароль?
              </PassRecoveryBtn>
              <LinkStyled
                to="/registration"
                onClick={() => {
                  setUserMenuTogle(false);
                }}
              >
                Реєстрація
              </LinkStyled>
            </ToRegister>
    </LogFormContainer>
  );
}
