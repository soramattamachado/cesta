import React from "react";
import { StyleSheet, View, ScrollView, Text, Image } from 'react-native';
import { Button, Card, } from 'react-native-paper';

const Home = () => {


    return (
        <View style={styles.container}>
            <View style={styles.topContent}>
                <Button color="#5A9C54" icon="map-marker-radius" mode="outlined" onPress={() => console.log('Pressed')}>Inserir Localização</Button>
            </View>
            <View >

                <View>
                    <View style={styles.TitleContainer}>
                        <Text style={styles.TitleText}>Alimentos</Text>
                        <Button color="#5A9C54" mode="text" onPress={() => console.log('Pressed')}>Ver Mais</Button>
                    </View>
                    <ScrollView horizontal={true}>
                        <Card style={styles.card}>
                            <Card.Content style={styles.CardContent}>
                                <Image style={{ width: 140, height: 100 }} source={{ uri: 'http://2.bp.blogspot.com/-PzhBiORdQ14/Vd8LLJ0LrbI/AAAAAAAAAEw/nqiXJ3sewRI/s1600/download.jpg' }}></Image>
                                <Text style={styles.CardTitleText}>Carne do Sol do Seridó</Text>
                            </Card.Content>
                        </Card>
                        <Card style={styles.card}>
                            <Card.Content style={styles.CardContent}>
                                <Image style={{ width: 140, height: 100 }} source={{ uri: 'http://2.bp.blogspot.com/-PzhBiORdQ14/Vd8LLJ0LrbI/AAAAAAAAAEw/nqiXJ3sewRI/s1600/download.jpg' }}></Image>
                                <Text style={styles.CardTitleText}>Carne do Sol do Seridó</Text>
                            </Card.Content>
                        </Card>
                    </ScrollView>
                </View>
            </View>

        </View>

    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 50,
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
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        marginTop: 60,
        marginBottom: 60,
    },
    card: {
        width: 340,
        height: 130,
        resizeMode: 'center',
        marginRight: 20
    },
    TitleText: {
        fontFamily: 'NunitoRegular',
        fontSize: 25,
        marginLeft: 40,
        marginRight: 145,
    },
    CardTitleText: {
        fontFamily: 'NunitoRegular',
        fontSize: 20,
        marginRight: 145,
        marginLeft: 10,
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
        marginBottom: 20,
        alignItems: "center"
    },
    CardContent: {
        flexDirection: "row",
        alignItems: "flex-start"
    }
});

export default Home;
