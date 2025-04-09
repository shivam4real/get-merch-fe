import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isAdmin: false,
};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.isAdmin = action.payload.isAdmin;
        },
    },
});

export const { setUser } = userSlice.actions;
export default userSlice.reducer;