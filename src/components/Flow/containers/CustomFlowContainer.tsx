import { CustomFlow } from '../CustomFlow';
import { RootState } from '../../../types/Index';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { RootAction } from '../../../types/Index';
import { setFlowStage } from '../../../actions/FlowAction';
import { setShouldShow} from '../../../actions/NotificationActions';

export function mapStateToProps(state: RootState) {
  const { flow: { flowStage, lightBarStyle }, preview: { diodeSequence }} = state;
    return {
      flowStage,
      diodeSequence,
      lightBarStyle
    }
  }

export function mapDispatchToProps(dispatch: Dispatch<RootAction>) {
  return {
    setFlowStage: (flowStage: number) => dispatch(setFlowStage(flowStage)),

    setShouldShow: (shouldShow: boolean, message: string, autoHideTimer?: number) => 
      dispatch(setShouldShow(shouldShow, message, autoHideTimer)),
  }
}

export const CustomFlowContainer = connect(mapStateToProps, mapDispatchToProps)(CustomFlow);
