import React, {useEffect} from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {getProductRequest} from '../redux/slices/productSlice';
import {ProductList} from '../components';

function ProductsScreen(): JSX.Element {
  const {products} = useSelector(state => state.product);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProductRequest());
  }, []);

  return (
    <SafeAreaView>
      <ProductList products={products} />
    </SafeAreaView>
  );
}

export default ProductsScreen;