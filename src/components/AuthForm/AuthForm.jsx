import {
  useState,
   useEffect
} from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { registerSchema } from 'utils/shemas/AuthSchema';

import { ConfirmationRegistration } from 'components/ConfirmationRegistration/ConfirmationRegistration';

import {
  FormContainer,
  Titel,
  FormField,
  InputNameWraper,
  InputEmailWraper,
  InputPasswordWraper,
  InputForm,
  //   IconWraper,
  //   IconCheck,
  //   IconCross,
  ErrorMess,
  SuccessMessage,
  Button,
  //   OnIconPass,
  //   OffIconPass,
  //   OnIconConPass,
  //   OffIconConPass,
} from './AuthForm.styled';

import { register } from 'redux/api/auth-operations';

import { theme } from 'styles';
import { useAuth } from 'hooks/useAuth';
// import { Check, Cross } from 'components/icons';

const initialValues = {
  name: '',
  email: '',
  password: '',
  confirmPassword: '',
};

export function AuthForm() {
  const [
    passwordShow,
    // setPasswordShow
  ] = useState(false);
  const [
    confirmPasswordShow,
    // setConfirmPasswordShow
  ] = useState(false);
  const [showConfirmModal, setShowConfirmModal] = useState(true)
  const dispatch = useDispatch();
  const navigate = useNavigate();
    const { isActive } = useAuth();

  // const togglePassword = () => setPasswordShow(prevState => !prevState);
  // const toggleConfirmPassword = () =>
  //   setConfirmPasswordShow(prevState => !prevState);


  const handleSubmit = async(values, { resetForm }) => {
    const newUser = {
      name: values.name,
      email: values.email,
      password: values.password,
    };

   dispatch(register(newUser))
   setShowConfirmModal(!showConfirmModal);
   resetForm();
  };

    useEffect(() => {
      if (isActive) {
        navigate('/');
      }
    }, [navigate, isActive]);

  return (
    <FormContainer>
      {showConfirmModal ?
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
                    ? `${theme.colors.blue}`
                    : errors.name
                    ? `${theme.colors.red}`
                    : `${theme.colors.green}`,
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
                <SuccessMessage>Success, name is valid!</SuccessMessage>
              ) : null}

              {/* <IconWraper>
                {!touched.name ? null : !errors.name ? (
                  <IconCheck style={{ marginLeft: '36px' }}>
                    <Check />
                  </IconCheck>
                ) : (
                  <IconCross
                    style={{ marginLeft: '36px' }}
                    id="resetBtn"
                    onClick={() => {
                      setFieldValue('name', '');
                    }}
                  >
                    <Cross />
                  </IconCross>
                )}
              </IconWraper> */}

              <ErrorMess name="name" component="p" />
            </FormField>

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
                  <IconCheck style={{ marginLeft: '36px' }}>
                    <Check />
                  </IconCheck>
                ) : (
                  <IconCross
                    style={{ marginLeft: '36px' }}
                    id="resetBtn"
                    onClick={() => {
                      setFieldValue('email', '');
                    }}
                  >
                    <Cross />
                  </IconCross>
                )}
              </IconWraper> */}

              <ErrorMess name="email" component="p"></ErrorMess>
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
                  autoComplete="off"
                />
              </InputPasswordWraper>

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
                  {passwordShow ? <OnIconPass /> : <OffIconPass />}
                </span>
              </IconWraper> */}

              {!errors.password && touched.password ? (
                <SuccessMessage>Success, password is valid!</SuccessMessage>
              ) : null}

              <ErrorMess name="password" component="p" />
            </FormField>

            <FormField>
              <InputPasswordWraper
                style={{
                  borderColor: !touched.confirmPassword
                    ? `${theme.colors.blue}`
                    : errors.confirmPassword
                    ? `${theme.colors.red}`
                    : `${theme.colors.green}`,
                }}
              >
                <InputForm
                  name="confirmPassword"
                  type={confirmPasswordShow ? 'text' : 'password'}
                  placeholder="Повтор пароля"
                  autoComplete="off"
                />
              </InputPasswordWraper>

              {/* <IconWraper>
                {!touched.confirmPassword ? null : !errors.confirmPassword ? (
                  <IconCheck>
                    <Check />
                  </IconCheck>
                ) : (
                  <IconCross
                    id="resetBtn"
                    onClick={() => {
                      setFieldValue('confirmPassword', '');
                    }}
                  >
                    <Cross />
                  </IconCross>
                )}

                <span id="visibilityBtn" onClick={toggleConfirmPassword}>
                  {confirmPasswordShow ? <OnIconConPass /> : <OffIconConPass />}
                </span>
              </IconWraper> */}

              {!errors.confirmPassword && touched.confirmPassword ? (
                <SuccessMessage>
                  Success, confirm password is valid!
                </SuccessMessage>
              ) : null}

              <ErrorMess name="confirmPassword" component="p" />
            </FormField>

            <div>
              <Button type="submit" disabled={isSubmitting}>
                 Реєстрація
              </Button>
            </div>
            <div>
              <Button type="button" >
                 Вхід через Google
              </Button>
            </div>
          </Form>
        )}
      </Formik>
      : <ConfirmationRegistration/>
      }
    </FormContainer>
  );
}
