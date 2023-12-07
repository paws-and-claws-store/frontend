import {
  useState,
  //  useEffect
} from 'react';
// import { useNavigate } from 'react-router-dom';
import { Form, Formik } from 'formik';
// import { useDispatch } from 'react-redux';
import { registerSchema } from 'utils/shemas/AuthSchema';
import { useRegisrationMutation } from 'redux/operations';
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
import { theme } from 'styles';
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
  // const dispatch = useDispatch();
  // const navigate = useNavigate();
  //   const { isRegistered } = useAuth();

  // const togglePassword = () => setPasswordShow(prevState => !prevState);
  // const toggleConfirmPassword = () =>
  //   setConfirmPasswordShow(prevState => !prevState);

  const [registration, responsed] = useRegisrationMutation();
  console.log('responsed:', responsed);
  console.log('useRegisrationMutation():', useRegisrationMutation());

  const handleSubmit = (values, { resetForm }) => {
    const newUser = {
      name: values.name,
      email: values.email,
      password: values.password,
    };

    registration(newUser);
    if (responsed) {
      resetForm();
    }
  };

  //   useEffect(() => {
  //     if (isRegistered) {
  //       navigate('/user');
  //     }
  //   }, [isRegistered, navigate]);

  return (
    <FormContainer>
      <Formik
        validationSchema={registerSchema}
        initialValues={initialValues}
        onSubmit={handleSubmit}
      >
        {({ values, errors, touched, setFieldValue, isSubmitting }) => (
          <Form>
            <Titel>Registration</Titel>
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
                  placeholder="Name"
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
                  placeholder="Email"
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
                  placeholder="Password"
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
                  placeholder="Confirm password"
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
                Registration
              </Button>
            </div>
          </Form>
        )}
      </Formik>
    </FormContainer>
  );
}
