import { createFeatureSelector, createSelector } from '@ngrx/store';
import { MessagesState } from './messages.reducer';

// Select the `messages` feature state
export const selectMessagesState = createFeatureSelector<MessagesState>('messages');

// Select the `messages` array
export const selectMessages = createSelector(
  selectMessagesState,
  (state) => state.messages || [],
);

// Select the `loading` state
export const selectLoading = createSelector(
  selectMessagesState,
  (state) => state.loading,
);

// Select the `error` state
export const selectError = createSelector(
  selectMessagesState,
  (state) => state.error,
);