import { Dimensions, StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        margin: 10,
        backgroundColor: '#eee'
    },

    image: {
        height: Dimensions.get('window').height / 4,
        width: '100%',
        justifyContent: 'center',
        borderRadius: 10,
        resizeMode: 'contain'
    },
    title: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 18,
    },
    text: {
        fontWeight: 'bold',
    },
    inStock: {
        fontWeight: 'bold',
        color: 'red',
    }
})