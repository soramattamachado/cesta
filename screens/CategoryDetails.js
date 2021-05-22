import React from 'react';



import { StyleSheet, View, ScrollView, Text } from 'react-native';

import { Card, } from 'react-native-paper';

import CategoryDetailsMock from '../mock/CategoryDetailsMock';


const CategoryDetails = () => {
    return (
        <ScrollView >
            <View style={styles.container}>
                <Text>Hello from Profile</Text>
                <View style={styles.content}>
                    {CategoryDetailsMock.map((productDetail) => {
                        <View key={productDetail.id}>
                            <Text>{productDetail.ProductName}</Text>
                        </View>
                    })}


                </View>
            </View>
        </ScrollView >
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 50,
        justifyContent: 'center',
        alignItems: 'center',
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
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        padding: 18,
    },

    TitleText: {
        fontFamily: 'NunitoRegular',
        fontSize: 20,
        flex: 1,
    },

    LocalizationBtn: {
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
        elevation: 2,

    },
    TitleContainer: {
        flexDirection: "row",
        padding: 10,
        alignItems: "center"
    },
    CardContent: {
        flexDirection: "row",
        alignItems: "flex-start"
    },
    card: {
        width: 340,
        height: 130,
        resizeMode: 'center',
        marginRight: 20,
        padding: 2,
    },

    CardTitleText: {
        fontFamily: 'NunitoRegular',
        fontSize: 18,
        marginRight: 145,
        marginLeft: 10,
    },
    CardContent: {
        flexDirection: "row",
        alignItems: "flex-start",

    }
});

export default CategoryDetails;