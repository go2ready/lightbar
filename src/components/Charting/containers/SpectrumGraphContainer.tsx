import { SpectrumGraph } from '../SpectrumGraph';
import { RootState } from '../../../types/Index';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { RootAction } from '../../../types/Index';

export function mapStateToProps(state: RootState) {
    const { preview: { diodeSequence } } = state;
    return {
      diodeSequence
    }
  }

export function mapDispatchToProps(dispatch: Dispatch<RootAction>) {
  return {
  }
}

export const SpectrumGraphContainer = connect(mapStateToProps, mapDispatchToProps)(SpectrumGraph);
