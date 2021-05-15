import React from 'react';
import {StatusBar} from 'expo-status-bar';
import {View, Image, FlatList, Text, ScrollView} from 'react-native';
import styles from './Style';
import AppText from '../../Components/AppText';
function ListingDetailScreen({route}) {
  const listing = route.params;
  return (
    <View>
      <StatusBar style="auto" />
      <ScrollView>
        <Image
          style={styles.image}
          source={{uri: listing.thumbnail_url}}></Image>
        <View style={styles.detailsContainer}>
          <AppText style={styles.title}>{listing.name}</AppText>
          <AppText style={styles.price}>Ratings:{listing.score}</AppText>
          <AppText>Servings:{listing.num_servings}</AppText>

          <FlatList
            vertical
            data={listing.instructions}
            renderItem={({item}) => (
              <View style={{flexDirection: 'row'}}>
                <AppText>{item.position}. </AppText>
                <AppText>{item.display_text}</AppText>
              </View>
            )}
          />
        </View>
      </ScrollView>
    </View>
  );
}

export default ListingDetailScreen;
