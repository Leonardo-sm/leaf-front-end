import { AppDispatch, AppThunk } from './store';
import { AxiosError, AxiosResponse } from 'axios';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { FormInputsProps } from '../types/login.types';
import { api } from '../services/api';

interface SessionState {
  id: string;
}

const initialState: SessionState = {
  id: '',
};

const session = createSlice({
  name: 'session',
  initialState,

  reducers: {
    setId(state, action: PayloadAction<string>) {
      state.id = action.payload;
    },
  },
});

export const { setId } = session.actions;
export default session.reducer;

export function asyncLogin(
  data: Pick<FormInputsProps, 'username' | 'password'>
): AppThunk {
  return async (dispatch: AppDispatch) => {
    await api
      .post('/authenticate', data)
      .then((response: AxiosResponse) => {
        dispatch(setId(response.data.uniqueSessionId));
        console.log('logado');
      })
      .catch((reason: AxiosError) => {
        console.log('error');
      });
  };
}
