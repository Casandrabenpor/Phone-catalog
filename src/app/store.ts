import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { phonesSlice } from '../features/listSlice/phoneSlice';
import { loginSlice } from '../features/listSlice/loginSlice/loginSlice';
import { favoriteSlice } from '../features/listSlice/favoriteSlice/favoriteSlice';
export const store = configureStore({
  reducer: {
    phones: phonesSlice.reducer,
    user: loginSlice.reducer,
    heart: favoriteSlice.reducer,
  },
});
//Typings
type RootState = ReturnType<typeof store.getState>;
export const useTypedDispatch = () => useDispatch<typeof store.dispatch>();
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
