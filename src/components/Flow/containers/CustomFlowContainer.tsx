import { CustomFlow } from '../CustomFlow';
import { RootState } from '../../../types/Index';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { FlowAction } from '../../../reducers/FlowActionReducer';
import { setFlowStage } from '../../../actions/FlowAction';

export function mapStateToProps(state: RootState) {
  const { flow: { flowStage }, preview: { diodeSequence }} = state;
    return {
      flowStage,
      diodeSequence,
    }
  }

export function mapDispatchToProps(dispatch: Dispatch<FlowAction>) {
  return {
    setFlowStage: (flowStage: number) => dispatch(setFlowStage(flowStage)),
  }
}

export const CustomFlowContainer = connect(mapStateToProps, mapDispatchToProps)(CustomFlow);
