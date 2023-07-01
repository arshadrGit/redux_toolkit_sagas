import React, { useEffect } from "react";
import { SafeAreaView } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { getProductRequest } from "../redux/slices/productSlice";
import { FloatButton, ProductList } from "../components";
import { AppState } from "../models/AppState";

function ProductsScreen(): JSX.Element {
  const { products } = useSelector((state: AppState) => state.product);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProductRequest());
  }, []);

  return (
    <SafeAreaView>
      <ProductList products={products} />
      <FloatButton />
    </SafeAreaView>
  );
}

export default ProductsScreen;
