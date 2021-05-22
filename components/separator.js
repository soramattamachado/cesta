import React from "react";
import { StyleSheet, View } from 'react-native';

const Separator = () => {
  return (
    <View style={styles.separator}></View>
  );
};

const styles = StyleSheet.create({
  separator: {
    width: '100%',
    marginTop: 20,
    marginBottom: 30,
    borderBottomColor: 'rgba(90, 156, 84, 0.5)',
    borderBottomWidth: 1
  }
});

export default Separator;
