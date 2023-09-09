import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { phonesSlice } from '../features/phoneApiSlice/phoneSlice';
import { loginSlice } from '../features/loginSlice/loginSlice';
import { sideBarSlice } from '../features/sideBarSlice/sideBarSlice';

export const store = configureStore({
  reducer: {
    phones: phonesSlice.reducer,
    user: loginSlice.reducer,
    sidebar: sideBarSlice.reducer,
  },
});
//Typings
type RootState = ReturnType<typeof store.getState>;
export const useTypedDispatch = () => useDispatch<typeof store.dispatch>();
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
