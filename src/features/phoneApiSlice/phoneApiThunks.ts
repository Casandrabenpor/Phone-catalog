import { createAsyncThunk } from '@reduxjs/toolkit';
import Phone from '../../models/interface';

export const loadPhones = createAsyncThunk('phones/getPhones', async () => {
  const data = await fetch(
    'https://cors-anywhere.herokuapp.com/https://phones-store-api.containers.soamee.com/phones',
  ).catch((error) => {
    throw error;
  });

  const json = await data.json().catch((error) => {
    throw new Error('La solicitud a la API falló');
  });

  let photos = json.map((phone: any) => {
    return {
      photoUrl: phone.photoUrl,
      id: phone.id,
      name: phone.name,
      description: phone.description,
      price: phone.price,
    } as Phone;
  });

  return photos;
});

// Admin createAsyncThunk delete
export const deletePhone = createAsyncThunk(
  'phones/deletePhone',
  async (phoneId: number | undefined) => {
    try {
      console.log(phoneId);
      // Send a DELETE request to the API to delete the phone.
      const response = await fetch(
        `https://cors-anywhere.herokuapp.com/https://phones-store-api.containers.soamee.com/phones/${phoneId}`,
        {
          method: 'DELETE',
        },
      );

      if (!response.ok) {
        let result = await response.text();
        console.log(result);
        throw new Error('No se pudo eliminar el teléfono.');
      }

      // Return the ID of the deleted phone.
      return phoneId;
    } catch (error) {
      throw new Error('La solicitud para eliminar el teléfono falló');
    }
  },
);
// Create phone
export const createPhone = createAsyncThunk(
  'phones/createPhone',
  async (newPhone: Phone) => {
    try {
      const response = await fetch(
        'https://cors-anywhere.herokuapp.com/https://phones-store-api.containers.soamee.com/phones',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(newPhone),
        },
      );

      if (!response.ok) {
        const errorMessage = await response.text();
        throw new Error(`No se pudo crear el teléfono: ${errorMessage}`);
      }

      // Returns the data for the phone created.
      return newPhone;
    } catch (error) {
      throw new Error('La solicitud falló');
    }
  },
);
