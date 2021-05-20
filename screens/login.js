import React, { useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import logo from '../assets/logo-green.png';
import CustomInput from '../components/customInput';
import ShowHideInput from '../components/ShowHideInput';
import SubmitButton from '../components/submitButton';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  const handleSubmit = () => {
    navigation.navigate("Home")
  };

  const handleAlternative = () => {
    console.log('handleAlternative called!');
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.topContent}>
          <Image style={styles.logo} source={logo} />
          <Text style={styles.enterText}>Entrar</Text>
          <CustomInput
            placeholder='E-mail'
            value={password}
            isSecure={true}
            keyboardType='email-address'
            setter={setPassword}
          />
          <View style={styles.groupedInput}>
            <ShowHideInput
              placeholder='Senha'
              value={password}
              isSecure={true}
              setter={setPassword}
            />
            <TouchableOpacity style={styles.forgotBtn}>
              <Text style={styles.forgotText}>Esqueci minha senha</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.bottomContent}>
          <SubmitButton text='ENTRAR' submitHandler={handleSubmit} />
          <Text style={styles.orText}>ou</Text>
          <SubmitButton text='CADASTRE-SE' submitHandler={handleAlternative} />
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
    justifyContent: 'center',
    alignItems: 'center',
    width: '87.20%',
    height: '100%',
    left: 0,
    right: 0,
    margin: 'auto'
  },
  topContent: {
    flex: 3,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    width: '100%',
  },
  bottomContent: {
    flex: 2,
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '100%',
  },
  logo: {
    width: 100,
    height: 100,
    resizeMode: 'center',
  },
  enterText: {
    fontFamily: 'NunitoRegular',
    fontSize: 34
  },
  groupedInput: {
    width: '100%',
  },
  input: {
    width: '100%',
    borderBottomWidth: 1,
    borderBottomColor: '#rgba(38, 66, 36, 1)',
  },
  inputText: {
    fontFamily: 'NunitoRegular',
    fontSize: 16
  },
  forgotBtn: {
    marginTop: 18,
    alignSelf: 'flex-end'
  },
  forgotText: {
    fontFamily: 'NunitoRegular',
    fontSize: 12,
    color: '#5A9C54'
  },
  orText: {
    marginVertical: 16
  },
  alternativeBtn: {

  },
  alternativeBtnText: {

  }
});

export default Login;
