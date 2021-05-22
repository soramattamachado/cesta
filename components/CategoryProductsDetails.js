import React, { useState } from "react";
import { StyleSheet, Text, Image, View } from 'react-native';
import { Card, } from 'react-native-paper';

import RatingStars from './ratingStars';

const CategoryProductsDetails = (props) => {
    const { Products } = props;
    const [starCount, setStarCount] = useState(4);
    return (
        <View style={{ flexDirection: "row", flexWrap: "wrap" }} >
            {Products.map((product) =>
                <Card key={product.id} style={styles.card} >
                    <Card.Content style={styles.CardContent}>
                        <Image style={{ width: 140, height: 100 }} source={{ uri: `${product.ProductImage}` }}></Image>
                        <View style={styles.content}>
                            <Text style={styles.CardTitleText}>{product.ProductTitle}</Text>
                            <Text style={styles.CardValueText}> {`R$ ${product.ProductValue}`}</Text>
                        </View>
                    </Card.Content>
                    <RatingStars customStyle={styles.start} starSize={16} count={starCount} setter={setStarCount} />
                </Card >
            )}
        </View>

    )
}
const styles = StyleSheet.create({
    card: {
        width: 180,
        margin: 10,
        height: 200,

        padding: 2,
    },
    start: {
        width: 60,
        marginTop: -18,
        marginLeft: 90
    },
    content: {
        flexDirection: "column",
        alignContent: "stretch",
    },
    CardTitleText: {
        fontFamily: 'NunitoRegular',
        fontSize: 15,
        color: '#3e3e3e',
        flexWrap: 'wrap',

    },
    CardValueText: {
        fontFamily: 'NunitoRegular',
        fontSize: 14,
        color: '#000000',
        paddingTop: 15,
        justifyContent: "flex-end",

    },
    CardContent: {
        flexDirection: "column",
        alignItems: "flex-start",
        maxWidth: 200
    }
});

export default CategoryProductsDetails