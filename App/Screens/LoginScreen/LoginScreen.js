import React from 'react';
import * as yup from 'yup';
import AppButton from '../../Components/AppButton';
import {AppForm, AppFormField, SubmitButton} from '../../Components/forms';
import {LoginButton, AccessToken} from 'react-native-fbsdk';
const validationSchema = yup.object().shape({
  email: yup.string().required().email().label('Email'),
  password: yup.string().required().min(4).label('Password'),
});
function LoginScreen({navigation}) {
  return (
    <AppForm
      initialValues={{email: '', password: ''}}
      onSubmit={Values => navigation.navigate('Recipes')}
      validationSchema={validationSchema}>
      <AppFormField
        placeholder="Email                            "
        autoCaptalize="none"
        icon="email"
        name="email"
        keyboardType="email-address"
        textContentType="emailAddress"
      />
      <AppFormField
        placeholder="Password                             "
        autoCaptalize="none"
        autoCorrect={false}
        icon="lock"
        name="password"
        secureTextEntry={true}
      />
      <SubmitButton title="Login" />
      {/* <LoginButton
        style={{borderRadius: '100%', width: 150, height: 30, marginLeft: 20}}
        onLoginFinished={(error, result) => {
          if (error) {
            console.log('login has error: ' + result.error);
          } else if (result.isCancelled) {
            console.log('login is cancelled.');
          } else {
            AccessToken.getCurrentAccessToken().then(data => {
              console.log(data.accessToken.toString());
            });
          }
        }}
        onLogoutFinished={() => console.log('logout.')}
      /> */}
    </AppForm>
  );
}

export default LoginScreen;
