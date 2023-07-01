import { Product } from "./product";

export interface AppState {
    product: ProductState;
}

interface ProductState {
    products: Product[],
    loading: boolean,
    error: boolean,
    product: object
}
