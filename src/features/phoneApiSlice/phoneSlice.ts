import { loadPhones, deletePhone, createPhone } from './phoneApiThunks';
import { toast } from 'react-toastify';
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
        toast.error('Item not loaded', {
          position: toast.POSITION.TOP_RIGHT,
        });
      })
      .addCase(loadPhones.fulfilled, (state, action) => {
        state.status = 'fulfilled';
        state.data = action.payload;
        if (Array.isArray(state.data) && state.data.length === 0) {
          toast.info('There are no phones', {
            position: toast.POSITION.TOP_RIGHT,
          });
        }
      })
      //Create phone
      .addCase(createPhone.pending, (state) => {
        state.status = 'loading';
        toast.info('Is pending', {
          position: toast.POSITION.TOP_RIGHT,
        });
      })
      .addCase(createPhone.rejected, (state) => {
        state.status = 'failed';
        toast.error('Item not created', {
          position: toast.POSITION.TOP_RIGHT,
        });
      })
      .addCase(createPhone.fulfilled, (state, action) => {
        state.status = 'fulfilled';
        state.data.push(action.payload);
        state.filteredData = state.data;
        toast.success('Item created', {
          position: toast.POSITION.TOP_RIGHT,
        });
      })
      //Delete phone
      .addCase(deletePhone.pending, (state) => {
        state.status = 'loading';
        toast.info('Remove in progress', {
          position: toast.POSITION.TOP_RIGHT,
        });
      })
      .addCase(deletePhone.rejected, (state) => {
        state.status = 'failed';
        toast.error('Item not removed', {
          position: toast.POSITION.TOP_RIGHT,
        });
      })
      .addCase(deletePhone.fulfilled, (state, action) => {
        state.status = 'fulfilled';
        state.data = state.data.filter((phone) => phone.id !== action.payload);
        state.filteredData = state.data;
        toast.success('Item removed', {
          position: toast.POSITION.TOP_RIGHT,
        });
      });
  },
});

export const getAllPhones = (state: any) => state.phones.data;
export const getPhoneStatus = (state: any) => state.phones.status;
