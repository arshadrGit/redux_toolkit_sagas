import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    products: [],
    loading: false,
    error: false,
    product: {}
}
const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        getProductRequest: (state) => {
            state.loading = true;
        },
        getProductSuccess: (state, action) => {
            state.loading = false;
            state.products = action.payload;
        },
        getProductFailure: (state) => {
            state.loading = false;
            state.error = true;
        },

        // Add Product
        addProductRequest: (state) => {
            state.loading = true;
        },
        addProductSuccess: (state, action) => {
            state.loading = false;
            state.products = action.payload;
        },
        addProductFailure: (state) => {
            state.loading = false;
            state.error = true;
        },
    }
})
// Reducer
const productReducer = productSlice.reducer;

// Actions
export const {
    getProductRequest,
    getProductSuccess,
    getProductFailure,
    addProductRequest,
    addProductSuccess,
    addProductFailure
} = productSlice.actions;

export default productReducer