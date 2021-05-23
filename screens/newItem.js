import React, { useState } from "react";
import {
  Image,
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity
} from 'react-native';
import Images from '../utils/images';
import PaymenttTypes from '../utils/paymentTypes';
import PurchasesMock from '../utils/purchacesMock';
import PurchaceHistoryCard from '../components/purchaceHistoryCard';
import Separator from '../components/separator';
import CustomInput from '../components/customInput';
import SubmitButton from '../components/submitButton';

const NewItem = () => {
  const [name, setName] = useState('');
  const [category, setCategory] = useState('');
  const [value, setvalue] = useState('');
  const [adress, setAdress] = useState('');

  const handleSubmit = () => {
    console.log('submited!');
  };

  return (
    <KeyboardAvoidingView
      behavior={'height'}
      keyboardVerticalOffset='250'
      style={styles.container}
    >
      <View style={styles.content}>
        <Text style={styles.title}>Novo item</Text>
        <View style={styles.addPicture}>
          <Text style={styles.addPictureText}>Adicionar foto</Text>
        </View>
        <CustomInput
          style={{flex:1}}
          placeholder='Nome do produto ou serviço'
          value={name}
          isSecure={false}
          setter={setName}
        />
        <CustomInput
          style={{flex:1}}
          placeholder='Categoria'
          value={category}
          isSecure={false}
          setter={setCategory}
        />
        <View style={styles.inputWrapper} >
          <Text style={styles.inputTitle}>Descrição</Text>
          <TextInput
            style={styles.input}
            maxLength={300}
            multiline={true}
          />
        </View>
        <CustomInput
          style={{flex:1}}
          placeholder='Valor'
          value={value}
          isSecure={false}
          keyboardType='numeric'
          setter={setvalue}
        />
        <CustomInput
          style={{flex:1}}
          placeholder='Local de retirada do produto'
          value={adress}
          isSecure={false}
          setter={setAdress}
        />
        <View style={styles.submitWrapper}>
          <SubmitButton customStyles={styles.submit} isMain={true} text='POSTAR NOVO ITEM' submitHandler={handleSubmit} />
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%'
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
    width: '87.20%',
    left: 0,
    right: 0,
    marginTop: 20
  },
  title: {
    fontFamily: 'NunitoRegular',
    fontSize: 24,
    marginTop: 120,
    marginBottom: 40
  },
  addPicture: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    backgroundColor: '#616161',
    marginBottom: 40
  },
  addPictureText: {
    fontFamily: 'NunitoRegular',
    fontSize: 16,
    color: '#FFFFFF'
  },
  inputWrapper: {
    flex: 1,
    width: '100%',
    borderBottomWidth: 1,
    borderBottomColor:'#rgba(38, 66, 36, 1)',
    marginBottom: 40
  },
  inputTitle: {
    fontFamily: 'NunitoRegular',
    fontSize: 12,
    color: 'rgba(0, 0, 0, 0.54)'
  },
  submitWrapper: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    width: '100%'
  },
  submit: {
    width: '100%',
    bottom: 30
  }






  // rating: {
  //   justifyContent: 'space-between'
  // },
  // ratingTitle: {
  //   fontFamily: 'NunitoSemiBold',
  //   fontSize: 20,
  //   color: 'rgba(0, 0, 0, 0.87)'
  // },
  // ratingText: {
  //   fontFamily: 'NunitoRegular',
  //   fontSize: 16,
  //   color: 'rgba(0, 0, 0, 0.54)',
  //   marginTop: 10,
  //   marginBottom: 10
  // },
  // comment: {
  //   width: '100%',
  //   flexDirection: 'row',
  //   justifyContent: 'flex-start',
  //   alignItems: 'center',
  // },
  // commentTitle: {
  //   fontFamily: 'NunitoSemiBold',
  //   fontSize: 20,
  //   color: 'rgba(0, 0, 0, 0.87)'
  // },
  // commentOptional: {
  //   fontFamily: 'NunitoRegular',
  //   fontSize: 16,
  //   color: 'rgba(0, 0, 0, 0.54)',
  //   marginLeft: 6
  // },
  // commentCharsUsed: {
  //   position: 'absolute',
  //   right: 0,
  //   fontFamily: 'NunitoRegular',
  //   fontSize: 16,
  //   color: 'rgba(0, 0, 0, 0.54)',
  // },
  // inputWrapper: {
  //   width: '100%'
  // },
  // inputTitle: {
  //   fontFamily: 'NunitoRegular',
  //   fontSize: 16,
  //   color: 'rgba(0, 0, 0, 0.54)',
  //   padding: 0,
  //   marginTop: 20,
  //   marginBottom: 0
  // },
  // input: {
  //   fontFamily: 'NunitoRegular',
  //   fontSize: 16,
  //   color: 'rgba(0, 0, 0, 0.87)',
  //   height: 70,
  //   textAlignVertical: 'top',
  //   paddingVertical: 0
  // },
  // submitWrapper: {
  //   flex: 1,
  //   justifyContent: 'flex-end',
  //   alignItems: 'center',
  //   width: '100%'
  // },
  // submit: {
  //   bottom: 60
  // }
});

export default NewItem;
