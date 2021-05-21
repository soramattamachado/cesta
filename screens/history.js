import React from "react";
import { Image, StyleSheet, View, Text } from 'react-native';
import Images from '../utils/images';
import PurchasesMock from '../utils/purchacesMock';
import PurchaceHistoryCard from '../components/purchaceHistoryCard';

const History = () => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Histórico de compras</Text>
        <View style={styles.purchacesContainer}>
          {PurchasesMock.map((purchace, index) => (
            <PurchaceHistoryCard
              key={index}
              purchace={purchace}
              hasSeparator={(index < PurchasesMock.length - 1)}
            />
          ))}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
   container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%'
  },
  content: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    width: '87.20%',
    height: '100%',
    left: 0,
    right: 0,
    margin: 'auto'
  },
  title: {
    fontFamily: 'NunitoRegular',
    fontSize: 24,
    marginTop: 120,
    marginBottom: 40
  },
  purchacesContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    width: '100%'
  }
});

export default History;
