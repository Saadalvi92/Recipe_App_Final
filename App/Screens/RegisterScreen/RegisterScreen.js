import React from 'react';
import {View} from 'react-native';
import * as Yup from 'yup';
import {
  AppForm as Form,
  AppFormField as FormField,
  SubmitButton,
} from '../../Components/forms';
import styles from './Style';

const validationSchema = Yup.object().shape({
  name: Yup.string().required().label('Name'),
  email: Yup.string().required().email().label('Email'),
  password: Yup.string().required().min(6).label('Password'),
});

function RegisterScreen({navigation}) {
  const PostRequestForSignUp = async Values => {
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        userName: Values.name,
        email: Values.email,
        password: Values.password,
      }),
    };
    try {
      const response = await fetch(
        'http://auth.suretostop.com/api/user/create',
        requestOptions,
      );
      const data = await response.text();
      console.log(data);

      let newdata = JSON.parse(data);

      console.log(typeof newdata);

      if (typeof newdata === 'object') {
        alert('SignUp Successfull');
        navigation.navigate('Login');
      } else {
        alert('SignUp unsuccessfull');
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <View style={styles.container}>
      <Form
        initialValues={{name: '', email: '', password: ''}}
        onSubmit={Values => PostRequestForSignUp(Values)}
        validationSchema={validationSchema}>
        <FormField
          autoCorrect={false}
          icon="account"
          name="name"
          placeholder="Name"
        />
        <FormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="email"
          keyboardType="email-address"
          name="email"
          placeholder="Email"
          textContentType="emailAddress"
        />
        <FormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="lock"
          name="password"
          placeholder="Password"
          secureTextEntry
          textContentType="password"
        />
        <SubmitButton title="Register" />
      </Form>
    </View>
  );
}

export default RegisterScreen;
