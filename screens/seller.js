import React from "react";
import { StyleSheet, View, Text } from 'react-native';
import SellerItem from '../components/sellerItem';

const Seller = () => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Sou vendedor(a)</Text>
        <Text style={styles.myItensText}>Meus itens</Text>
        <View style={styles.itensContainer}>
          <SellerItem item={{'title': 'Tour pela Chapada Diamantina', 'price': 24.00, 'rating': 4}}/>
          <SellerItem item={{'title': 'Velande da Caatinga', 'price': 18.00, 'rating': 5}}/>
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
  },
  content: {
    flex: 1,
    marginTop: 160,
    justifyContent: 'center',
    alignItems: 'flex-start',
    width: '87.20%'
  },
  title: {
    fontFamily: 'NunitoRegular',
    fontSize: 24,
    color: '#264224',
    marginBottom: 20
  },
  myItensText: {
    fontFamily: 'NunitoBold',
    fontSize: 20,
    color: '#264224',
    marginBottom: 120
  },
  itensContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-start',
    width: '100%'
  }
});

export default Seller;
