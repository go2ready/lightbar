import { combineReducers } from 'redux';

import { flowActionReducer } from './FlowReducer';

export const rootReducer = combineReducers({
  flow: flowActionReducer,
});