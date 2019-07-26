import { createAction } from 'typesafe-actions'
import { IPreviewState } from '../types/PreviewState';

export const setDiodeSequence = createAction('flow/DIODE_SEQUENCE', resolve => {
  return (diodeSequence : number[]) => resolve({ diodeSequence } as IPreviewState);
});