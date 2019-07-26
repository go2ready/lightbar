import { ActionType, getType } from 'typesafe-actions'
import { IPreviewState } from '../types/PreviewState'

import * as previewAction from '../actions/PreviewAction'
export type PreviewAction = ActionType<typeof previewAction>

export function PreviewActionReducer(state: IPreviewState | undefined, action: PreviewAction){
  if (state === undefined)
  {
    state = {
      diodeSequence: [],
    }
  }

  switch (action.type) {
    case getType(previewAction.setDiodeSequence):
      return { ...state,
        diodeSequence: action.payload.diodeSequence,
      };
    default:
      return state;
  }
}