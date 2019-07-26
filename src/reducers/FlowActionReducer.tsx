import { ActionType, getType } from 'typesafe-actions'
import { IFlowState } from '../types/FlowState'

import * as flowAction from '../actions/FlowAction'
export type FlowAction = ActionType<typeof flowAction>

export function FlowActionReducer(state: IFlowState | undefined, action: FlowAction){
  if (state === undefined)
  {
    state = {
      flowStage: 0,
    }
  }

  switch (action.type) {
    case getType(flowAction.setFlowStage):
      return { ...state,
        flowStage: action.payload.flowStage >= 0 ? action.payload.flowStage : 0,
      };
    default:
      return state;
  }
}