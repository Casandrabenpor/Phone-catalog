import { createAsyncThunk } from '@reduxjs/toolkit';

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
    };
  });

  return photos;
});

// Admin createAsyncThunk delete
export const deletePhone = createAsyncThunk(
  'phones/deletePhone',
  async (phoneId) => {
    try {
      // Envía una solicitud DELETE a la API para eliminar el teléfono
      const response = await fetch(
        `https://cors-anywhere.herokuapp.com/https://phones-store-api.containers.soamee.com/phones`,
        {
          method: 'DELETE',
        },
      );

      if (!response.ok) {
        throw new Error('No se pudo eliminar el teléfono.');
      }

      // Devuelve el ID del teléfono eliminado
      return phoneId;
    } catch (error) {
      throw new Error('La solicitud para eliminar el teléfono falló');
    }
  },
);
