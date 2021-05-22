import React from "react";

import { StyleSheet, View, ScrollView, Text, Image } from 'react-native';

import { Button } from 'react-native-paper';

import CategoryProducts from '../components/CategoryProducts';
import HomeMock from '../mock/HomeMock'

import { useNavigation } from '@react-navigation/native';
const Home = () => {
    const navigation = useNavigation();
    return (
        <ScrollView >
            <View style={styles.container}>
                <View style={styles.topContent}>
                    <Button color="#5A9C54" icon="map-marker-radius" mode="outlined" onPress={() => console.log("pressed")}>Inserir Localização</Button>
                </View>
                <View >

                    {HomeMock.map((Category) => (
                        <>
                            <View key={Category.id} style={styles.TitleContainer}>
                                <Text style={styles.TitleText}>{Category.CategoryTitle}</Text>
                                <Button color="#5A9C54" mode="text" onPress={() => navigation.navigate("CategoryDetailsStack")}>Ver Mais</Button>
                            </View>
                            <ScrollView horizontal={true}>
                                <CategoryProducts key={Category.Products.keys} Products={Category.Products}></CategoryProducts>
                            </ScrollView>
                        </>
                    ))}
                </View>
            </View>
        </ScrollView >



    );
};

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
    }
});

export default Home;
