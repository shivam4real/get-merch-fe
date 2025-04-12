// Moved the product list API call to the reducers.
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Async thunk to fetch the product list
export const fetchProductList = createAsyncThunk("products/fetchProductList", async () => {
    const response = await axios.post("/product");
    return response.data.data;
});

const productSlice = createSlice({
    name: "products",
    initialState: {
        items: [],
        status: "idle",
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchProductList.pending, (state) => {
                state.status = "loading";
            })
            .addCase(fetchProductList.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.items = action.payload;
            })
            .addCase(fetchProductList.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            });
    },
});

export default productSlice.reducer;