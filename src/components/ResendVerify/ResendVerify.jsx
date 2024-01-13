import React from 'react';
import { useDispatch } from 'react-redux';
import { resendVerifyEmail } from 'redux/api/auth-operations';
import { Form, Formik } from 'formik';
import { sendEmailSchema } from 'utils/shemas/AuthSchema';
import { theme } from 'styles';
import { CheckCircle, CrossToDelete } from 'components/Icons';

import {
  ResendVerifyEmailContainer,
  Titel,
  Message,
  FormField,
  InputEmailWraper,
  InputForm,
  IconWraper,
  IconCheck,
  IconCross,
  ErrorMess,
  SuccessMessage,
  Button,
} from './ResendVerify.styled';
import { resetPassword } from 'redux/api/auth-operations';

const initialValues = {
  email: '',
};

export const ResendVerify = ({ setShowResendEmail, recoveryPass }) => {

  const dispatch = useDispatch();

 
    const handleSubmitPass = (values, { resetForm }) => {
      
      dispatch(resetPassword(values.email));
    setShowResendEmail(false);
    resetForm();
  };
  
    const handleSubmitEmail = (values, { resetForm }) => {
      dispatch(resendVerifyEmail(values.email));
    setShowResendEmail(false);
    resetForm();
  }

  return (
    <ResendVerifyEmailContainer>
      <Formik
        validationSchema={sendEmailSchema}
        initialValues={initialValues}
        onSubmit={recoveryPass ? handleSubmitPass : handleSubmitEmail}
      >
        {({ errors, touched, setFieldValue, isSubmitting }) => (
          <Form>
            <Titel>Лист не надійшов</Titel>
            <Message>
              Введіть адресу електронної пошти, яку ви вказали при реєстрації:
            </Message>
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
            <Button type="submit" disabled={isSubmitting}>
              Надіслати ще раз
            </Button>
          </Form>
        )}
      </Formik>
    </ResendVerifyEmailContainer>
  );
};
