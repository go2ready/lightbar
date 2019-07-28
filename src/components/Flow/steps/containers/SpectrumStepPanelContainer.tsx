import { SpectrumStepPanel } from '../SpectrumStepPanel';
import { RootState } from '../../../../types/Index';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { RootAction } from '../../../../types/Index';
import { setLightBarStyle } from '../../../../actions/FlowAction';
import { setDiodeSequence } from '../../../../actions/PreviewAction';
import { LightBarStyle } from '../../../../types/FlowState';

export function mapStateToProps(state: RootState) {
    const { flow: { lightBarStyle }, preview: { diodeSequence } } = state;
    return {
      diodeSequence,
      lightBarStyle
    }
  }

export function mapDispatchToProps(dispatch: Dispatch<RootAction>) {
  return {
    setDiodeSequence: (diodeSequence: string[]) => dispatch(setDiodeSequence(diodeSequence)),
  }
}

export const SpectrumStepPanelContainer = connect(mapStateToProps, mapDispatchToProps)(SpectrumStepPanel);
