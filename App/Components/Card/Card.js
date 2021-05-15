import React from 'react';
import styles from './Style';
import {View, Image, Text, TouchableOpacity} from 'react-native';

function Card({item, onPress}) {
  return (
    <TouchableOpacity underlayColor="rgba(73,182,77,0.9)" onPress={onPress}>
      <View style={styles.container}>
        <Image style={styles.photo} source={{uri: item.thumbnail_url}} />
        <Text style={styles.title}>{item.name}</Text>
        <Text style={styles.category}></Text>
      </View>
    </TouchableOpacity>
  );
}

export default Card;
