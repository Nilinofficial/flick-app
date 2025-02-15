import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserProps {
  email: string;
  firstName: string;
  lastName: string;
  isVerified: boolean;
}

const initialState: UserProps = {
  email: "",
  firstName: "",
  lastName: "",
  isVerified: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<any>) => {
      return action.payload;
    },
  },
});

export const { setUser } = userSlice.actions;
export default userSlice.reducer;
