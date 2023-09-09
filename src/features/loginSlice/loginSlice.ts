import { createSlice } from '@reduxjs/toolkit';

export const loginSlice = createSlice({
  name: 'user',
  initialState: {
    user: null,
    logged: false,
  },
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
      state.logged = true;
    },
    logout: (state) => {
      state.user = null;
      state.logged = false;
    },
  },
});
export const { login, logout } = loginSlice.actions;

export const selectUser = (state: any) => state.user.user;
export const isUserLogged = (state: any) => state.user.logged;
