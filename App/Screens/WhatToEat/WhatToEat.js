import React, {useEffect, useState} from 'react';
import {FlatList, View} from 'react-native';
import Card from '../../Components/Card';
import axios from 'axios';
var options = {
  method: 'GET',
  url: 'https://tasty.p.rapidapi.com/recipes/list',
  params: {from: '0', size: '20', tags: 'under_30_minutes'},
  headers: {
    'x-rapidapi-key': '517370d432msh5be26678285b1dbp1a0998jsnfccf6085f04d',
    'x-rapidapi-host': 'tasty.p.rapidapi.com',
  },
};
function WhatToEat({navigation}) {
  useEffect(() => {
    axios
      .request(options)
      .then(function (response) {
        if (response.status === 200 && response != null) {
          setData(response.data.results);
        } else {
          throw new Error('Empty Data');
        }
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);
  const [data, setData] = useState([]);
  if (data.length === 0) {
    return null;
  } else {
    return (
      <View>
        <FlatList
          vertical
          showsVerticalScrollIndicator={false}
          numColumns={2}
          data={data}
          renderItem={({item}) => (
            <Card
              item={item}
              onPress={() => navigation.navigate('ListingDetail', item)}
            />
          )}
        />
      </View>
    );
  }
}

export default WhatToEat;
