import { ActionType, StateType } from 'typesafe-actions';

// Root reducer
import { rootReducer } from '../reducers/Index';

// Actions
import { FlowAction } from '../reducers/FlowActionReducer'

// Root state of the app
export type RootState = StateType<typeof rootReducer>;

// Root actions
export type RootAction = FlowAction;