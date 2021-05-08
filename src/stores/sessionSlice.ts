import { AppDispatch, AppThunk } from './store';
import { AxiosError, AxiosResponse } from 'axios';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { FormInputsProps } from '../types/login.types';
import { api } from '../services/api';

interface SessionState {
  id: string;
  name: string;
  isLogged: boolean;
}

const initialState: SessionState = {
  id: '',
  name: '',
  isLogged: false,
};

const session = createSlice({
  name: 'session',
  initialState,

  reducers: {
    setId(state, action: PayloadAction<string>) {
      state.id = action.payload;
    },
    setName(state, action: PayloadAction<string>) {
      state.name = action.payload;
    },
    setIsLogged(state, action: PayloadAction<boolean>) {
      state.isLogged = action.payload;
    },
  },
});

export const { setId, setName, setIsLogged } = session.actions;
export default session.reducer;

export function asyncLogin(
  data: Pick<FormInputsProps, 'username' | 'password'>
): AppThunk {
  return async (dispatch: AppDispatch) => {
    await api
      .post('/authenticate', data)
      .then((response: AxiosResponse) => {
        dispatch(setId(response.data.uniqueSessionId));
        if (response.status === 201) {
          dispatch(setIsLogged(true));
          dispatch(setName(response.data.name));
          console.log(response);
        }
      })
      .catch((reason: AxiosError) => {
        console.log('error');
        dispatch(setIsLogged(false));
      });
  };
}

export function asyncSignOut() {
  return async (dispatch: AppDispatch) => {
    await api.get('/logout').catch((reason: AxiosError) => {
      console.log(reason);
    });
  };
}
