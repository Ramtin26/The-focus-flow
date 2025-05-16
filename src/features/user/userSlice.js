import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userName: "",
  email: "",
  isAuthenticated: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    // updateProfile(state, action) {
    //   state.userName = action.payload.userName;
    //   state.email = action.payload.email;
    //   state.isAuthenticated = true;
    //   localStorage.setItem("isAuthenticated", "true");
    // },
    updateProfile(state, action) {
      const { userName, email } = action.payload;

      state.userName = userName;
      state.email = email;
      state.isAuthenticated = true;

      // Persist full user state
      localStorage.setItem(
        "user",
        JSON.stringify({
          userName,
          email,
          isAuthenticated: true,
        })
      );
    },
  },
});

export const { updateProfile } = userSlice.actions;

export default userSlice.reducer;
