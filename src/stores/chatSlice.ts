import { AppDispatch } from './store';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { UserProps } from '../pages/Home';

interface ChatProps {
  connectedUsers: UserProps[];
}

const initialState: ChatProps = { connectedUsers: [] };

const chat = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    setConnectedUsers(state, action: PayloadAction<UserProps[]>) {
      state.connectedUsers = action.payload;
    },
  },
});

export const { setConnectedUsers } = chat.actions;
export default chat.reducer;
