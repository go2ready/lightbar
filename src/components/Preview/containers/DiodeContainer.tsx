import { Diode } from '../Diode';
import { RootState } from '../../../types/Index';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { PreviewAction } from '../../../reducers/PreviewActionReducer';
import { setDiodeSequence } from '../../../actions/PreviewAction';

export function mapStateToProps(state: RootState) {
  const { preview: { diodeSequence }} = state;
    return {
      diodeSequence,
    }
  }

export function mapDispatchToProps(dispatch: Dispatch<PreviewAction>) {
  return {
  }
}

export const CanvasManagerContainer = connect(mapStateToProps, mapDispatchToProps)(Diode);
