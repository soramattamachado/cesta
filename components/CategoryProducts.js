import React from "react";
import { StyleSheet, Text, Image } from 'react-native';
import { Card, } from 'react-native-paper';
const CategoryProducts = (props) => {
    const { Products } = props;
    return (
        <>
            {Products.map((product) =>
                <Card key={product.id} style={styles.card} >
                    <Card.Content style={styles.CardContent}>
                        <Image style={{ width: 140, height: 100 }} source={{ uri: `${product.ProductImage}` }}></Image>
                        <Text style={styles.CardTitleText}>{product.ProductTitle}</Text>
                    </Card.Content>
                </Card >
            )}
        </>

    )
}
const styles = StyleSheet.create({
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

export default CategoryProducts