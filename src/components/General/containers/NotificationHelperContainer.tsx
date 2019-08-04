import { NotificationHelper } from '../NotificationHelper';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { NotificationActions } from '../../../reducers/NotificationActionReducer';
import { setShouldShow } from '../../../actions/NotificationActions';
import { RootState } from '../../../types/Index'

export function mapStateToProps(state: RootState) {
  const { notification: { message, shouldShow, actionId, autoHideTimer }} = state;
  return {
    message,
    shouldShow,
    actionId,
    autoHideTimer,
  }
}

export function mapDispatchToProps(dispatch: Dispatch<NotificationActions>) {
  return {
    setShouldShow: (shouldShow: boolean, message: string, autoHideTimer?: number) => 
      dispatch(setShouldShow(shouldShow, message, autoHideTimer))
  }
}

export const NotificationHelperContainer = 
connect(mapStateToProps, mapDispatchToProps)(NotificationHelper);
