import { Action, ThunkAction, configureStore } from '@reduxjs/toolkit';

import sessionReducer from './sessionSlice';
import { useDispatch } from 'react-redux';

const store = configureStore({
  reducer: {
    session: sessionReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk = ThunkAction<void, RootState, null, Action<string>>;
export const useAppDispatch = () => useDispatch<AppDispatch>();

export default store;
