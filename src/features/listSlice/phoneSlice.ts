import { loadPhones, deletePhone } from './listApiSlice';
import { createSlice } from '@reduxjs/toolkit';
import Phone from '../../models/interface';

export const phonesSlice = createSlice({
  name: 'phones',
  initialState: {
    status: 'idle',
    data: [] as Phone[],
    filteredData: [] as Phone[],
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
      })
      //Delete phone
      .addCase(deletePhone.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(deletePhone.rejected, (state) => {
        state.status = 'failed';
      })
      .addCase(deletePhone.fulfilled, (state, action) => {
        state.status = 'fulfilled';
        state.data = state.data.filter((phone) => phone.id !== action.payload);
        state.filteredData = state.data;
      });
  },
});

export const getAllPhones = (state: any) => state.phones.data;
export const getPhoneStatus = (state: any) => state.phones.status;
