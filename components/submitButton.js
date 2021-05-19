import React from "react";
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

const SubmitButton = (props) => {
  const {
    text,
    submitHandler
  } = props;

  return (
    <TouchableOpacity onPress={submitHandler} style={styles.submitBtn}>
      <Text style={styles.submitBtnText}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  submitBtn: {
    width: '100%',
    backgroundColor: '#5A9C54',
    paddingVertical: 16,
    paddingHorizontal: 6,
    borderRadius: 4,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.20,
    shadowRadius: 1.41,
    elevation: 2
  },
  submitBtnText: {
    fontFamily: 'NunitoSemiBold',
    // height: 40,
    fontSize: 14,
    color: '#FFFFFF',
    textAlign: 'center',
    top: 0,
    bottom: 0,
    margin: 'auto'
  }
});

export default SubmitButton;
