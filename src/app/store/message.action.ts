import { createAction, props } from '@ngrx/store';

export const loadMessages = createAction('[Messages] Load Messages');
export const loadMessagesSuccess = createAction(
  '[Messages] Load Messages Success',
  props<{ messages: any[] }>(),
);
export const loadMessagesFailure = createAction(
  '[Messages] Load Messages Failure',
  props<{ error: any }>(),
);

export const sendMessage = createAction('[Messages] Send Message', props<{ email: string; message: string }>());
export const sendMessageSuccess = createAction('[Messages] Send Message Success');
export const sendMessageFailure = createAction('[Messages] Send Message Failure', props<{ error: any }>());