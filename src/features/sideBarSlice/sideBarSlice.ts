import { createSlice } from '@reduxjs/toolkit';

export const sideBarSlice = createSlice({
  name: 'sidebar',
  initialState: {
    activated: false,
  },
  reducers: {
    toggle: (state) => {
      if (state.activated === true) {
        state.activated = false;
      } else {
        state.activated = true;
      }
    },
  },
});

export const { toggle } = sideBarSlice.actions;
