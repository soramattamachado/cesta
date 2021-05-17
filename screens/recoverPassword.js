import React, { useState } from "react";
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const RecoverPassword = () => {
  const [email, setEmail] = useState('');
  const [emailConfirmation, setEmailConfirmation] = useState('');
  const navigation = useNavigation();

  const handleSubmit = () => {
    console.log('handleSubmit called!');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.signUpText}>Esqueci minha senha</Text>
      <View style={styles.input}>
        <TextInput
          style={styles.inputText}
          value={email}
          placeholder='E-mail'
          placeholderTextColor='rgba(0, 0, 0, 0.54)'
          keyboardType='email-address'
          autoCorrect={false}
          autoCapitalize='none'
          onChangeText={(text) => setEmail(text)}
        />
      </View>
      <View style={styles.input}>
        <TextInput
          style={styles.inputText}
          value={emailConfirmation}
          placeholder='Confirmar e-mail'
          placeholderTextColor='rgba(0, 0, 0, 0.54)'
          keyboardType='email-address'
          autoCorrect={false}
          autoCapitalize='none'
          onChangeText={(text) => setEmailConfirmation(text)}
        />
      </View>
      <TouchableOpacity onPress={handleSubmit} style={styles.submitBtn}>
        <Text style={styles.submitBtnText}>ENVIAR E-MAIL DE RECUPERAÇÂO</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:'center',
    alignItems: 'center'
  },
  logo: {
    width: 50,
    height: 200,
    resizeMode: 'center',
  },
  input: {

  },
  inputText: {

  },
  submitBtn: {

  },
  submitBtnText: {

  },
});

export default RecoverPassword;
