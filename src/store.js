import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./features/cartSlice";
import userReducer from "./features/userSlice";
import productReducer from "./features/productSlice";

const store = configureStore({
    reducer: {
        cart: cartReducer,
        user: userReducer,
        products: productReducer,
    },
});

export default store;