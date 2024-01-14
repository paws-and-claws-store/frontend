import React, { useState } from 'react';
import { Form, Formik } from 'formik';
import { newPasswordSchema } from 'utils/shemas/AuthSchema';
import { theme } from 'styles';
import { updatePassword } from 'redux/api/auth-operations';
import { CheckCircle, CrossToDelete } from 'components/Icons';

import { NewPassFormContainer,
    Titel,
  FormField,
  InputNewPasswordWraper,
  InputRepeatPasswordWraper,
  InputForm,
    IconWraper,
    IconCheck,
    IconCross,
  ErrorMess,
  SuccessMessage,
  Button,
    OnIcon,
    OffIcon,

} from './NewPassForm.styled';
import { useDispatch } from 'react-redux';


const initialValues = {
    newPassword: '',
    repeatPassword: '',
  };
  

export const NewPassForm = ({ resetPasswordToken}) => {
    const [
        newPasswordShow,
         setNewPasswordShow
      ] = useState(false);

      const [
        repeatPasswordShow,
         setRepeatPasswordShow
      ] = useState(false);
      const dispatch = useDispatch()

        const toggleNewPassword = () => setNewPasswordShow(prevState => !prevState);
        const toggleRepeatPasswordShow = () => setRepeatPasswordShow(prevState => !prevState);
    
      const handleSubmit = (values, { resetForm }) => {
        const newPass = {
          password: values.newPassword,
          resetPasswordToken: resetPasswordToken,
        };
        dispatch(updatePassword(newPass)); 
        resetForm();
      };
    


  return <NewPassFormContainer> 
    <Formik
        validationSchema={newPasswordSchema}
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
            <Titel>Створення нового пароля</Titel>
            <FormField>
              <InputNewPasswordWraper
                style={{
                  borderColor: !touched.newPassword
                    ? `${theme.colors.blue}`
                    : errors.newPassword
                    ? `${theme.colors.brightRed}`
                    : `${theme.colors.brightGreen}`,
                }}
              >
                <InputForm
                  name="newPassword"
                  type={newPasswordShow ? 'text' : 'password'}
                  placeholder="Новий пароль"
                //   autoComplete="on"
                />
              </InputNewPasswordWraper>

              {!errors.newPassword && touched.newPassword ? (
                <SuccessMessage>Успіх, новий пароль дійсний!</SuccessMessage>
              ) : null}

              <IconWraper>
                {!touched.newPassword ? null : !errors.newPassword ? (
                  <IconCheck style={{ marginLeft: '32px' }}>
                    <CheckCircle />
                  </IconCheck>
                ) : (
                  <IconCross
                    // style={{ marginLeft: '32px' }}
                    id="resetBtn"
                    onClick={() => {
                      setFieldValue('newPassword', '');
                    }}
                  >
                    <CrossToDelete />
                  </IconCross>
                )}

                <span id="visibilityBtn" onClick={toggleNewPassword}>
                  {newPasswordShow ? <OnIcon /> : <OffIcon />}
                </span>
              </IconWraper>

              <ErrorMess name="newPassword" component="p" />
            </FormField>

            <FormField>
              <InputRepeatPasswordWraper
                style={{
                  borderColor: !touched.repeatPassword
                    ? `${theme.colors.blue}`
                    : errors.repeatPassword
                    ? `${theme.colors.brightRed}`
                    : `${theme.colors.brightGreen}`,
                }}
              >
                <InputForm
                  name="repeatPassword"
                  type={repeatPasswordShow ? 'text' : 'password'}
                  placeholder="Повтор нового пароля"
                //   autoComplete="on"
                />
              </InputRepeatPasswordWraper>

              {!errors.repeatPassword && touched.repeatPassword ? (
                <SuccessMessage>Повторний пароль дійсний!</SuccessMessage>
              ) : null}

              <IconWraper>
                {!touched.repeatPassword ? null : !errors.repeatPassword ? (
                  <IconCheck>
                    <CheckCircle />
                  </IconCheck>
                ) : (
                  <IconCross
                    id="resetBtn"
                    onClick={() => {
                      setFieldValue('repeatPassword', '');
                    }}
                  >
                    <CrossToDelete />
                  </IconCross>
                )}

                <span id="visibilityBtn" onClick={toggleRepeatPasswordShow}>
                  {repeatPasswordShow ? <OnIcon /> : <OffIcon />}
                </span>
              </IconWraper>

              <ErrorMess name="repeatPassword" component="p" />
            </FormField>
            <div>
              <Button type="submit" disabled={isSubmitting}>
              Зберегти зміни
              </Button>
            </div>
          </Form>
        )}
      </Formik>
  </NewPassFormContainer>;
};