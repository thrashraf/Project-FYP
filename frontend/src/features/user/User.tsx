import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/Store";
interface user {
  name: string;
  email: string;
  password: string;
}

const initialState = () => ({
  user: null,
  isFetching: false,
  isSuccess: false,
  isError: false,
  errorMessage: "",
});

export const userSlice = createSlice({
  name: "user",
  initialState: initialState(),
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = null;
    },
    clearState: (state) => initialState(),
  },
  extraReducers: (builder) => {
    builder.addCase(signupUser.fulfilled, (state, { payload }: any) => {
      state.isFetching = false;
      state.isSuccess = true;
    });
    builder.addCase(signupUser.pending, (state) => {
      state.isFetching = true;
    });
    builder.addCase(signupUser.rejected, (state, { payload }: any) => {
      state.isFetching = false;
      state.isError = true;
      state.errorMessage = payload.message;
    });
  },
});

export const signupUser = createAsyncThunk(
  "users/signupUser",
  async ({ name, email, password }: user, thunkAPI) => {
    try {
      const response = await fetch("/api/user/register", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      });
      let data = await response.json();

      if (response.status === 200) {
        console.log("data", data);
      } else {
        return thunkAPI.rejectWithValue(data);
      }
    } catch (e: any) {
      console.log("Error", e.response.data);
      return thunkAPI.rejectWithValue(e.response.data);
    }
  }
);

export const { login, logout, clearState } = userSlice.actions;
export const userSelector = (state: RootState) => state.user;
export default userSlice.reducer;
