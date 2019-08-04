import { createAction } from 'typesafe-actions'
import { INotificationStoreState } from '../types/NotificationStoreState';

export const setMessage = createAction('notification/SET_MESSAGE', resolve => {
  return (message: string) => 
    resolve({ message } as INotificationStoreState);
});

export const setActionId = createAction('notification/SET_ACTION_ID', resolve => {
  return (actionId: string) => 
    resolve({ actionId } as INotificationStoreState);
}); 

export const setShouldShow = createAction('notification/SET_SHOULD_SHOW', resolve => {
  return (shouldShow: boolean, message: string, autoHideTimer?: number) => 
    resolve({ shouldShow, message, autoHideTimer } as INotificationStoreState);
}); 
