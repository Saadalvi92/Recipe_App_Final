import React from 'react';
import {Alert, View} from 'react-native';
import * as yup from 'yup';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {AppForm, AppFormField, SubmitButton} from '../../Components/forms';
const validationSchema = yup.object().shape({
  email: yup.string().required().email().label('Email'),
  password: yup.string().required().min(6).label('Password'),
});
function LoginScreen({navigation}) {
  const Login = async Values => {
    const Header = {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    };

    const requestOptions = {
      method: 'POST',
      headers: Header,
      body: JSON.stringify({
        email: Values.email,
        password: Values.password,
      }),
    };
    try {
      const response = await fetch(
        'http://auth.suretostop.com/api/auth/login',
        requestOptions,
      );
      const data = await response.text();

      let newData = JSON.parse(data);

      // console.log(newData);

      if (newData.accessToken) {
        storeData('yes');
        const dataroute = {
          email: newData.data.email,
          userName: newData.data.userName,
        };
        // console.log(dataroute);
        navigation.push('Recipes', dataroute);
      } else {
        Alert.alert('Login Failed', 'Please Check your login Credentials');
        // alert();
      }
    } catch (err) {
      console.log(err);
    }
  };

  // asyncStorage StoreData
  const storeData = async value => {
    try {
      await AsyncStorage.setItem('@storage_Key', value);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <View
      style={{
        width: '100%',
        hiehgt: '100%',
        backgroundColor: '#a9a9a9',
        justifyContent: 'center',
        flex: 1,
      }}>
      <View
        style={{
          marginLeft: 10,
          marginRight: 10,
        }}>
        <AppForm
          initialValues={{email: '', password: ''}}
          onSubmit={Values => Login(Values)}
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
        </AppForm>
      </View>
    </View>
  );
}

export default LoginScreen;
