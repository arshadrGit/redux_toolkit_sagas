import React from 'react';
import { Image, ScrollView, Text, View } from 'react-native';
import { Product } from '../../models/product';
import styles from './ProductListStyles';

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
