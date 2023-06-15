import { AnyAction, Reducer, combineReducers } from "redux";
import productReducer from "../slices/productSlice";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { persistReducer } from "redux-persist";

const getConfig: any = (key: string, whitelist: any) => {
    const persistConfig = {
        key: key,
        storage: AsyncStorage,
        whitelist,
        timeout: null, // There is an issue in the source code of redux-persist (default setTimeout does not cleaning)
        transforms: [],
    };
    return persistConfig;
};
const rootReducer = combineReducers({
    product: persistReducer<any, AnyAction>(getConfig("product", ["products"]), productReducer)
})

export default rootReducer;