import { createAsyncThunk } from '@reduxjs/toolkit';

export const loadPhones = createAsyncThunk('phones/getPhones', async () => {
  const data = await fetch(
    'https://cors-anywhere.herokuapp.com/https://phones-store-api.containers.soamee.com/phones/',
  ).catch((error) => {
    throw error;
  });
  const json = await data.json().catch((error) => {
    throw error;
  });
  return json;
});

// const fetchPhonesFromAPI = async () => {
//   try {
//     const response = await fetch(
//       'https://phones-store-api.containers.soamee.com/phones/',
//     );
//     if (!response.ok) {
//       throw new Error('La solicitud a la API falló');
//     }
//     const data = await response.json();
//     return data;
//   } catch (error) {
//     throw error;
//   }
// };

// // Crea un thunk asincrónico utilizando createAsyncThunk
// export const loadPhones = createAsyncThunk('phones/getPhones', async () => {
//   try {
//     const phonesData = await fetchPhonesFromAPI();
//     return phonesData;
//   } catch (error) {
//     throw error;
//   }
// });
