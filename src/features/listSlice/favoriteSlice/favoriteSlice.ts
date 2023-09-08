// heartSlice.js
import { createSlice } from '@reduxjs/toolkit';

export const favoriteSlice = createSlice({
  name: 'heart',
  initialState: false,
  reducers: {
    toggleHeart: (state) => !state,
  },
});

export const { toggleHeart } = favoriteSlice.actions;
