import { createSlice } from '@reduxjs/toolkit';
import {
  addPhoneToLocalStorage,
  readLocalStorage,
} from '../../data/localStorage';
import Phone from '../../models/interface';
import { toast } from 'react-toastify';

export const shopSlice = createSlice({
  name: 'shop',
  initialState: {
    list: [] as Phone[],
    loaded: false,
  },
  reducers: {
    addToShop: (state, action) => {
      //Add and read the phone in localstorage.
      addPhoneToLocalStorage(action.payload);
      let localStorage = readLocalStorage();
      state.list = localStorage.data;
      toast.success('Item bought', {
        position: toast.POSITION.TOP_RIGHT,
      });
    },
    loadItemsBought: (state) => {
      let localStorage = readLocalStorage();
      state.list = localStorage.data;
      state.loaded = true;
    },
  },
});
export const getPhonesBought = (state: any) => state.shop.list;
export const { addToShop, loadItemsBought } = shopSlice.actions;
