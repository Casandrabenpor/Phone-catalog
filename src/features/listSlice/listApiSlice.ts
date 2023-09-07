import { createAsyncThunk } from '@reduxjs/toolkit';

export const loadPhones = createAsyncThunk('phones/getPhones', async () => {
  const data = await fetch(
    'https://cors-anywhere.herokuapp.com/https://phones-store-api.containers.soamee.com/phones/',
  ).catch((error) => {
    throw error;
  });
  const json = await data.json().catch((error) => {
    throw new Error('La solicitud a la API falló');
  });
  return json;
});
