import React from "react";
import { View, Text, StyleSheet, SafeAreaView, FlatList, TextInput, ScrollView } from 'react-native';
import Product_json from './Product.json';
import ProductCard from './components/Products/ProductCard'

function App() {
  const renderProducts = ({ item }) => <ProductCard product={item} />
  return (


    <SafeAreaView style={styles.container}>


      <Text style={styles.header_title}>
        Patika Store
      </Text>
      <TextInput style={styles.text_input}>
        Ara...
      </TextInput>


      <FlatList
        numColumns={2}
        data={Product_json}
        renderItem={renderProducts}
      />



    </SafeAreaView>

  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    height: '100%'
  },
  header_title: {
    color: '#800080',
    fontSize: 35,
    fontWeight: 'bold',
  },
  text_input: {
    backgroundColor: '#ECECEC',
    borderRadius: 15,
    margin: 5,
  },


})

export default App;