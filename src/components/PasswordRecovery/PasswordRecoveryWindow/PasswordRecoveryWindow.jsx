import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { resetPassword } from 'redux/api/auth-operations';
import { Form, Formik } from 'formik';
import { theme } from 'styles';
import { CheckCircle, CrossToDelete } from 'components/Icons';
import { sendEmailSchema } from 'utils/shemas/AuthSchema';

import {
  PasswordRecoveryContainer,
  Titel,
  FormField,
  InputEmailWraper,
  InputForm,
  IconWraper,
  IconCheck,
  IconCross,
  ErrorMess,
  SuccessMessage,
  Button,
  CloseButton,
} from './PasswordRecoveryWindow.styled';
import { PasswordConfirmation } from 'components/PasswordRecovery/PasswordConfirmation/PasswordConfirmation';

const initialValues = {
  email: '',
};

export const PasswordRecovery = ({ setShowWindouwRecoveryPass }) => {
  const [showPasswordConfirmation, setShowPasswordConfirmation] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    const handleChange = () => {
      const changePass = localStorage.getItem('changePassword');
      const isChangePass = JSON.parse(changePass);
      console.log("isChangePass:", isChangePass)

      if (isChangePass?.isChanged === true) {
        // setShowWindouwRecoveryPass(false)
        document.location.reload()
      }
    };
    window.addEventListener('storage', handleChange);

    return () => {
      window.removeEventListener('storage', handleChange);
    };
  }, [setShowWindouwRecoveryPass]);

  const handleSubmit = (values, { resetForm }) => {
    dispatch(resetPassword(values.email));
    resetForm();
    setShowPasswordConfirmation(true);
  };
  return (
    <PasswordRecoveryContainer>
      <CloseButton onClick={() => setShowWindouwRecoveryPass(false)}>
        <CrossToDelete />
      </CloseButton>
      {!showPasswordConfirmation ? (
        <Formik
          validationSchema={sendEmailSchema}
          initialValues={initialValues}
          onSubmit={handleSubmit}
        >
          {({ errors, touched, setFieldValue, isSubmitting }) => (
            <Form>
              <Titel>Відновлення пароля</Titel>
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
                    <IconCheck style={{ marginLeft: '32px' }}>
                      <CheckCircle />
                    </IconCheck>
                  ) : (
                    <IconCross
                      style={{ marginLeft: '32px' }}
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
                Відновити пароль
              </Button>
            </Form>
          )}
        </Formik>
      ) : (
        <PasswordConfirmation />
      )}
    </PasswordRecoveryContainer>
  );
};
