import { loadPhones } from './listApiSlice';
import { createSlice } from '@reduxjs/toolkit';

export const phonesSlice = createSlice({
  name: 'phones',
  initialState: {
    status: 'idle',
    data: [],
  },
  reducers: {},
  extraReducers: (buider) => {
    buider
      .addCase(loadPhones.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(loadPhones.rejected, (state) => {
        state.status = 'failed';
      })
      .addCase(loadPhones.fulfilled, (state, action) => {
        state.status = 'fulfilled';
        state.data = action.payload;
      });
  },
});

export const getAllPhones = (state: any) => state.phones.data;
export const getPhoneStatus = (state: any) => state.phones.status;
