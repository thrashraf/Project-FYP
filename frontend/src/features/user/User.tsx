import { createSlice } from "@reduxjs/toolkit"
import { RootState } from "../../app/Store";

export const userSlice = createSlice({
    name: "user",
    initialState: {
        user: null,
        isFetching: false,
        isSuccess: false,
        isError: false,
        errorMessage: ""
    },
    reducers: {
        login: (state, action) => {
            state.user = action.payload;
        },
        logout: (state) => {
            state.user = null
        }
    }
});

export const { login, logout } = userSlice.actions;

export const selectUser = (state: RootState) => state.user.user;

export default userSlice.reducer;