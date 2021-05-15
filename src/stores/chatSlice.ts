import { AppDispatch, AppThunk } from './store';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { UserProps } from '../pages/Home';

interface ChatProps {
  connectedUsers: UserProps[];
  isChatActive: boolean;
  selectedUser: UserProps;
}

const initialState: ChatProps = {
  connectedUsers: [],
  isChatActive: false,
  selectedUser: {
    userID: '',
    name: '',
    self: false,
    connected: false,
    messages: [],
    hasNewMessages: false,
  },
};

const chat = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    setConnectedUsers(state, action: PayloadAction<UserProps[]>) {
      state.connectedUsers = action.payload;
    },
    setIsChatActive(state, action: PayloadAction<boolean>) {
      state.isChatActive = action.payload;
    },
    setSelectedUser(state, action: PayloadAction<UserProps>) {
      state.selectedUser = action.payload;
    },
  },
});

export const {
  setConnectedUsers,
  setIsChatActive,
  setSelectedUser,
} = chat.actions;
export default chat.reducer;

export function selectUser(user: UserProps): AppThunk {
  return (dispatch: AppDispatch) => {
    dispatch(setSelectedUser(user));
    dispatch();
  };
}
