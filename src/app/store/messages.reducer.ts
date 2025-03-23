import { createReducer, on } from '@ngrx/store';
import { loadMessages, loadMessagesSuccess, loadMessagesFailure } from './message.action';

export interface Message {
  id: string;
  email: string;
  message: string;
  date: Date;
}

export interface MessagesState {
  messages: Message[];
  loading: boolean;
  error: any;
}

export const initialState: MessagesState = {
  messages: [],
  loading: false,
  error: null,
};

export const messagesReducer = createReducer(
  initialState,
  on(loadMessages, (state) => ({ ...state, loading: true })),
  on(loadMessagesSuccess, (state, { messages }) => ({
    ...state,
    messages,
    loading: false,
  })),
  on(loadMessagesFailure, (state, { error }) => ({
    ...state,
    error,
    loading: false,
  })),
);