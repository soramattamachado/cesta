import React from "react";
import { Image, StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import PurchasesMock from '../utils/purchacesMock';
import PurchaceHistoryCard from '../components/purchaceHistoryCard';
import Separator from '../components/separator';

const History = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Histórico de compras</Text>
          {PurchasesMock.map((purchace, index) => (
            <View key={index} style={styles.purchacesContainer}>
              <TouchableOpacity onPress={() => navigation.navigate('PurchaceDetail', purchace)}>
                <PurchaceHistoryCard purchace={purchace}/>
              </TouchableOpacity>
              {(index < PurchasesMock.length - 1) && <Separator/>}
            </View>
          ))}
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
    justifyContent: 'flex-start',
    alignContent: 'flex-start',
    alignItems: 'flex-start',
    width: '100%'
  }
});

export default History;
