import { createAction } from 'typesafe-actions'
import { IFlowState } from '../types/FlowState';

export const setFlowStage = createAction('flow/FLOW_STAGE', resolve => {
  return (flowStage : number) => resolve({ flowStage } as IFlowState);
});