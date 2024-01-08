import React, { useState } from 'react';
import { Form, Formik } from 'formik';
import { newPasswordSchema } from 'utils/shemas/AuthSchema';
import { theme } from 'styles';
import { updatePassword } from 'redux/api/auth-operations';

import { NewPassFormContainer,
    Titel,
  FormField,
  InputNewPasswordWraper,
  InputRepeatPasswordWraper,
  InputForm,
  //   IconWraper,
  //   IconCheck,
  //   IconCross,
  ErrorMess,
  SuccessMessage,
  Button,
  //   OnIcon,
  //   OffIcon,

} from './NewPassForm.styled';
import { useDispatch } from 'react-redux';


const initialValues = {
    newPassword: '',
    repeatPassword: '',
  };
  

export const NewPassForm = ({ resetPasswordToken}) => {
    const [
        newPasswordShow,
        //  setNewPasswordShow
      ] = useState(false);

      const [
        repeatPasswordShow,
        //  setRepeatPasswordShow
      ] = useState(false);
      const dispatch = useDispatch()

        // const toggleNewPassword = () => setNewPasswordShow(prevState => !prevState);
        // const toggleRepeatPasswordShow = () => setRepeatPasswordShow(prevState => !prevState);
    
      const handleSubmit = (values, { resetForm }) => {
        const newPass = {
          password: values.newPassword,
          resetPasswordToken: resetPasswordToken,
        };
        dispatch(updatePassword(newPass)); 
        resetForm();
        // setShowPasswordModal(true);
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
                    ? `${theme.colors.red}`
                    : `${theme.colors.green}`,
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
                <SuccessMessage>Success, new password is valid!</SuccessMessage>
              ) : null}

              {/* <IconWraper>
                {!touched.newPassword ? null : !errors.newPassword ? (
                  <IconCheck style={{ marginLeft: '32px' }}>
                    <Check />
                  </IconCheck>
                ) : (
                  <IconCross
                    style={{ marginLeft: '32px' }}
                    id="resetBtn"
                    onClick={() => {
                      setFieldValue('newPassword', '');
                    }}
                  >
                    <Cross />
                  </IconCross>
                )}

                <span id="visibilityBtn" onClick={toggleNewPassword}>
                  {newPassword ? <OnIcon /> : <OffIcon />}
                </span>
              </IconWraper> */}

              <ErrorMess name="newPassword" component="p" />
            </FormField>

            <FormField>
              <InputRepeatPasswordWraper
                style={{
                  borderColor: !touched.repeatPassword
                    ? `${theme.colors.blue}`
                    : errors.repeatPassword
                    ? `${theme.colors.red}`
                    : `${theme.colors.green}`,
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
                <SuccessMessage>Repeated password is valid!</SuccessMessage>
              ) : null}

              {/* <IconWraper>
                {!touched.repeatPassword ? null : !errors.repeatPassword ? (
                  <IconCheck>
                    <Check />
                  </IconCheck>
                ) : (
                  <IconCross
                    id="resetBtn"
                    onClick={() => {
                      setFieldValue('repeatPassword', '');
                    }}
                  >
                    <Cross />
                  </IconCross>
                )}

                <span id="visibilityBtn" onClick={toggleRepeatPassword}>
                  {repeatPassword ? <OnIcon /> : <OffIcon />}
                </span>
              </IconWraper> */}

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