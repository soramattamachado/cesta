import React from "react";
import { Image, StyleSheet, Text, TextInput, View } from 'react-native';
import Images from '../utils/images';

const PurchaceHistoryCard = (props) => {
  const {
    purchace,
    hasSeparator
  } = props;

  return (
    <View style={styles.purchase}>
      <Text style={styles.date}>{purchace.date}</Text>
      <View style={styles.content}>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={Images[purchace.img]} />
        </View>
        <View style={styles.dataContainer}>
          <Text style={styles.title}>{purchace.title}</Text>
          <Text style={styles.price}>{purchace.totalPrice.toFixed(2)}</Text>
        </View>
      </View>
      {hasSeparator &&
        <View style={styles.separator}></View>
      }
    </View>
  );
};

const styles = StyleSheet.create({
  purchase: {
    maxWidth: '100%',
    minWidth: '100%',
    width: '100%',
    position: 'relative',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    marginBottom: 20
  },
  date: {
    marginBottom: 10
  },
  content: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    maxWidth: '100%',
    minWidth: '100%',
    width: '100%'
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start'
  },
  image: {
    width: 80,
    height: 80,
    resizeMode: 'cover',
  },
  dataContainer: {
    flex: 3,
    height: 80,
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'stretch'
  },
  title: {
    maxWidth: '100%',
    width: '100%'
  },
  price: {
    alignSelf: 'flex-end'
  },
  separator: {
    width: '100%',
    marginTop: 25,
    borderBottomColor: 'rgba(90, 156, 84, 0.5)',
    borderBottomWidth: 1
  }
});

export default PurchaceHistoryCard;
