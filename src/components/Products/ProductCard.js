import React from "react";
import { SafeAreaView, View, Text, Image, TouchableOpacity } from 'react-native';
import styles from './ProductCard.style'

const ProductCard = ({ product }) => {
    return (
        <TouchableOpacity style={styles.container}>
            <Image style={styles.image} source={{ uri: product.imgURL }}></Image>
            <View>
                <Text style={styles.title}>{product.title}</Text>
                <Text style={styles.text}>{product.price}</Text>
                {product.inStock == true ? (<></>) : (<Text style={styles.inStock}>STOKTA YOK</Text>)}
            </View>
        </TouchableOpacity >

    )
}

export default ProductCard;