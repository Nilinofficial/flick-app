import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserProps {
  token: string | null;
}

const initialState: UserProps = {
  token: null,
};

const tokenSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setToken: (state, action: PayloadAction<any>) => {
      state.token = action.payload;
    },
  },
});

export const { setToken } = tokenSlice.actions;
export default tokenSlice.reducer;
