import React, { useState } from "react";
import { StyleSheet, Text, Image } from 'react-native';
import { Card, } from 'react-native-paper';
import RatingStars from './ratingStars';
const CategoryProducts = (props) => {
    const { Products } = props;
    const [starCount, setStarCount] = useState(4);
    return (
        <>
            {Products.map((product) =>
                <Card key={product.id} style={styles.card} >
                    <Card.Content style={styles.CardContent}>
                        <Image style={{ width: 140, height: 100 }} source={{ uri: `${product.ProductImage}` }}></Image>
                        <Text style={styles.CardTitleText}>{product.ProductTitle}</Text>
                    </Card.Content>
                    <RatingStars customStyle={styles.start} starSize={20} count={starCount} setter={setStarCount} />
                </Card >
            )}
        </>

    )
}
const styles = StyleSheet.create({
    card: {
        width: 300,
        height: 130,
        resizeMode: 'center',
        marginRight: 15,
        padding: 2,
    },
    start: {
        width: 70,
        marginTop: -14,
        marginLeft: 190
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