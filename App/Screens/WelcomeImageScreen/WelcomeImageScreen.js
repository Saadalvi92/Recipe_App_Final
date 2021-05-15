//Import React
import React from 'react';

//Import react-native
import {ImageBackground, View, Image} from 'react-native';

//styles Import
import styles from './Style';
//Component Import
import AppButton from '../../Components/AppButton/AppButton';
import AppText from '../../Components/AppText';

function WelcomeImageScreen({navigation}) {
  return (
    <View style={{width: '100%', height: '100%'}}>
      <ImageBackground
        style={styles.background}
        blurRadius={2}
        source={require('../../assets/background.jpg')}>
        <View style={styles.logoContainer}>
          <Image
            style={styles.logo}
            source={require('../../assets/logo.png')}></Image>
          <AppText style={{color: '#000'}}>The Taste Of Wonder</AppText>
        </View>
        <View style={styles.buttonsContainer}>
          <AppButton
            title="Login"
            color="primary"
            onPress={() => navigation.navigate('Login')}></AppButton>
          <AppButton
            title="Register"
            color="secondary"
            onPress={() => navigation.navigate('Register')}></AppButton>
        </View>
      </ImageBackground>
    </View>
  );
}
export default WelcomeImageScreen;
