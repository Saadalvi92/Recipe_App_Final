import React from 'react';
import {View, TextInput, StyleSheet, Platform} from 'react-native';
import AppIcon from './AppIcon';
import textdefault from '../config/textdefault';
import colors from '../config/colors';

function AppTextInput({icon, iconColor, size, backgroundColor, ...otherprops}) {
  return (
    <View style={styles.Container}>
      <AppIcon
        style={styles.icon}
        name={icon}
        iconColor={iconColor}
        size={size}
        backgroundColor={backgroundColor}
      />
      <TextInput style={[textdefault.text, {flex: 1}]} {...otherprops} />
    </View>
  );
}

const styles = StyleSheet.create({
  Container: {
    backgroundColor: colors.white,
    borderRadius: 25,
    flexDirection: 'row',
    width: '100%',
    padding: 15,
    marginVertical: 10,
  },
  Icon: {marginRight: 10},
});
export default AppTextInput;
