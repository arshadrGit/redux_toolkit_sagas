import React from 'react';
import {View, Text, Image, StyleSheet, ScrollView} from 'react-native';
import {Product} from '../models/product';

interface Props {
  products: Product[];
}

const ProductList: React.FC<Props> = ({products}) => {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      {products.map(product => (
        <View key={product.id} style={styles.productContainer}>
          <Image source={{uri: product.thumbnail}} style={styles.thumbnail} />
          <View>
            <Text style={styles.title}>{product.title}</Text>
            <Text>{product.description}</Text>
            <Text style={styles.description}>Price: ${product.price}</Text>
            <Text style={styles.description}>Discount: {product.discountPercentage}%</Text>
            <Text style={styles.description}>Rating: {product.rating}</Text>
            <Text style={styles.description}>Stock: {product.stock}</Text>
            <Text style={styles.description}>Brand: {product.brand}</Text>
            <Text style={styles.description}>Category: {product.category}</Text>
          </View>
        </View>
      ))}
    </ScrollView>
  );
};

export default ProductList;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  content:{
    paddingBottom:10
  },
  productContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingVertical: 8,
  },
  thumbnail: {
    width: 100,
    height: 100,
    marginRight: 16,
  },
  detailsContainer: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
   
  },
  description: {
    marginBottom: 4,
    fontSize: 14,
    flexShrink:1
  },
  price: {
    marginBottom: 4,
  },
  discount: {
    marginBottom: 4,
  },
  rating: {
    marginBottom: 4,
  },
  stock: {
    marginBottom: 4,
  },
  brand: {
    marginBottom: 4,
  },
  category: {
    marginBottom: 4,
  },
  imageContainer: {
    flexDirection: 'row',
  },
  image: {
    width: 50,
    height: 50,
    marginRight: 8,
  },
});
