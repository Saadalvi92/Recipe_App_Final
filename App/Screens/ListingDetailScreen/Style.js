import {StyleSheet} from 'react-native';
import colors from '../../config/colors';
const styles = StyleSheet.create({
  image: {paddingTop: 100, width: '100%', height: 300},
  detailsContainer: {padding: 20},
  title: {fontSize: 24, fontWeight: '500'},
  price: {
    color: colors.secondary,
    fontWeight: 'bold',
    fontSize: 20,
    marginVertical: 10,
  },
  userContainer: {
    marginVertical: 40,
  },
});
export default styles;
