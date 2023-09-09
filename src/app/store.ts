import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { phonesSlice } from '../features/phoneApiSlice/phoneSlice';
import { loginSlice } from '../features/loginSlice/loginSlice';
import { shopSlice } from '../features/shopSlice/shopSlice';

export const store = configureStore({
  reducer: {
    phones: phonesSlice.reducer,
    user: loginSlice.reducer,
    shop: shopSlice.reducer,
  },
});
//Typings
type RootState = ReturnType<typeof store.getState>;
export const useTypedDispatch = () => useDispatch<typeof store.dispatch>();
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
