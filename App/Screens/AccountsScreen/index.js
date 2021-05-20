import React from 'react';
import {View, FlatList} from 'react-native';
import AppIcon from '../../Components/AppIcon';
import ListerInfo from '../../Components/ListerInfo';
import styles from './Style';
function AccountScreen({navigation, route}) {
  const email = route.params.email;
  const userName = route.params.userName;
  return (
    <View style={styles.screen}>
      <View style={styles.container}>
        <ListerInfo
          title={userName}
          subTitle={email}
          image={require('../../assets/logo.png')}></ListerInfo>
      </View>

      <ListerInfo
        title="Log Out"
        iconComponent={<AppIcon name="logout" backgroundColor="#ffe66d" />}
        onPress={() => navigation.navigate('Welcome')}
      />
    </View>
  );
}
export default AccountScreen;
