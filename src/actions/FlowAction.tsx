import { createAction } from 'typesafe-actions'
import { IFlowState, LightBarStyle } from '../types/FlowState';

export const setFlowStage = createAction('flow/FLOW_STAGE', resolve => {
  return (flowStage : number) => resolve({ flowStage } as IFlowState);
});

export const setLightBarStyle = createAction('flow/SET_BAR_STYLE', resolve => {
  return (lightBarStyle : LightBarStyle) => resolve({ lightBarStyle } as IFlowState);
});