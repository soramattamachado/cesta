import React from "react";
import { Image, StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import Images from '../utils/images';
import PaymenttTypes from '../utils/paymentTypes';
import PurchasesMock from '../utils/purchacesMock';
import PurchaceHistoryCard from '../components/purchaceHistoryCard';
import Separator from '../components/separator';
import SubmitButton from '../components/submitButton';

const PurchaceDetail = ({ navigation, route }) => {
  const purchace = route.params;

  const handleSubmit = () => {
    navigation.navigate('Rating', purchace);
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Detalhes da compra</Text>
        <PurchaceHistoryCard purchace={purchace}/>
        <Separator/>
        <View style={styles.data}>
          <Text style={styles.dataTextSoft}>Subtotal:</Text>
          <Text style={styles.dataTextSoft}>R${purchace.subtotal}</Text>
        </View>
        <View style={styles.data}>
          <Text style={styles.dataTextSoft}>Taxa de entrega:</Text>
          <Text style={styles.dataTextSoft}>R${purchace.deliverTax}</Text>
        </View>
        <View style={styles.data}>
          <Text style={styles.dataTextBold}>Valor total:</Text>
          <Text style={styles.dataTextBold}>R${purchace.totalPrice}</Text>
        </View>
        <Separator/>
        <View style={styles.payment}>
          <Image style={styles.paymentType} source={Images[purchace.paymentType]} />
          <Text style={styles.dataTextSoft}>
            {purchace.paymentType === PaymenttTypes.MONEY
              ? 'Pagamento em dinheiro'
              : 'Pagamento em cartão'
            }
          </Text>
        </View>
        <Separator/>
        <View style={styles.deliver}>
          <Text style={styles.dataTextSoft}>Local de entrega:</Text>
          <Text style={styles.dataTextNormal}>{purchace.deliverAddress}</Text>
        </View>
        <Separator/>
        <Text style={styles.ratingTitle}>O que achou da compra?</Text>
        <SubmitButton customStyles={styles.submit} isMain={true} text='AVALIAR COMPRA' submitHandler={handleSubmit} />
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
    marginTop: 20,
    margin: 'auto'
  },
  title: {
    fontFamily: 'NunitoRegular',
    fontSize: 24,
    marginTop: 120,
    marginBottom: 40
  },
  data: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  dataTextSoft: {
    fontFamily: 'NunitoRegular',
    fontSize: 14,
    color: 'rgba(0, 0, 0, 0.54)',
    marginBottom: 3
  },
  dataTextNormal: {
    fontFamily: 'NunitoRegular'
  },
  dataTextBold: {
    fontFamily: 'NunitoBold',
    fontSize: 16,
    color: 'rgba(0, 0, 0, 0.87)'
  },
  payment: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  paymentType: {
    height: 20,
    width: 25,
    resizeMode: 'contain',
    marginRight: 10,
    marginVertical: 0
  },
  deliver: {
    fontFamily: 'NunitoRegular',
  },
  ratingTitle: {
    fontFamily: 'NunitoSemiBold',
    fontSize: 20
  },
  submit: {
    position: 'absolute',
    bottom: 60
  }
});

export default PurchaceDetail;
