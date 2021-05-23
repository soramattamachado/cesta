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
import SubmitButton from '../components/submitButton';

const NewItem = () => {
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
        <Separator/>
        <View style={styles.comment}>
          <Text style={styles.commentTitle}>Comentário</Text>
          <Text style={styles.commentOptional}>(opcional)</Text>
          <Text style={styles.commentCharsUsed}>(0/300)</Text>
        </View>
          <View style={styles.inputWrapper} >
            <Text style={styles.inputTitle}>insira aqui sua avaliação</Text>
            <TextInput
              style={styles.input}
              maxLength={300}
              multiline={true}
            />
          </View>
        <Separator/>
        <View style={styles.submitWrapper}>
          <SubmitButton customStyles={styles.submit} isMain={true} text='AVALIAR COMPRA' submitHandler={handleSubmit} />
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
    position: 'relative',
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
  addPicture: {

  },
  addPictureText: {
    fontFamily: 'NunitoRegular',
    fontSize: 16,
    color: '#FFFFFF'
  },





  rating: {
    justifyContent: 'space-between'
  },
  ratingTitle: {
    fontFamily: 'NunitoSemiBold',
    fontSize: 20,
    color: 'rgba(0, 0, 0, 0.87)'
  },
  ratingText: {
    fontFamily: 'NunitoRegular',
    fontSize: 16,
    color: 'rgba(0, 0, 0, 0.54)',
    marginTop: 10,
    marginBottom: 10
  },
  comment: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  commentTitle: {
    fontFamily: 'NunitoSemiBold',
    fontSize: 20,
    color: 'rgba(0, 0, 0, 0.87)'
  },
  commentOptional: {
    fontFamily: 'NunitoRegular',
    fontSize: 16,
    color: 'rgba(0, 0, 0, 0.54)',
    marginLeft: 6
  },
  commentCharsUsed: {
    position: 'absolute',
    right: 0,
    fontFamily: 'NunitoRegular',
    fontSize: 16,
    color: 'rgba(0, 0, 0, 0.54)',
  },
  inputWrapper: {
    width: '100%'
  },
  inputTitle: {
    fontFamily: 'NunitoRegular',
    fontSize: 16,
    color: 'rgba(0, 0, 0, 0.54)',
    padding: 0,
    marginTop: 20,
    marginBottom: 0
  },
  input: {
    fontFamily: 'NunitoRegular',
    fontSize: 16,
    color: 'rgba(0, 0, 0, 0.87)',
    height: 70,
    textAlignVertical: 'top',
    paddingVertical: 0
  },
  submitWrapper: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    width: '100%'
  },
  submit: {
    bottom: 60
  }
});

export default NewItem;
