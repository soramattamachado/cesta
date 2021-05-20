import React from "react";
import { StyleSheet, View, Text } from 'react-native';


const History = () => {


    return (
        <View style={styles.container}>
            <Text>Hello from History</Text>
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
        justifyContent: 'center',
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
    input: {
        width: 100
    },
    inputText: {

    },
    forgotBtn: {

    },
    forgotText: {

    },
    submitBtn: {

    },
    submitBtnText: {

    },
    orText: {

    },
    alternativeBtn: {

    },
    alternativeBtnText: {

    }
});

export default History;
