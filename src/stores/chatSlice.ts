import { AppDispatch, AppThunk } from './store';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface MessageProps {
  messageId: string;
  sender: string;
  receiver: string;
  content: string;
  date: string;
}
