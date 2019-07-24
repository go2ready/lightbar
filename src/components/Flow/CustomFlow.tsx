import * as React from 'react';

import { Theme } from '@material-ui/core/styles/createMuiTheme';
import { withStyles, WithStyles, createStyles  } from '@material-ui/core/styles';

const styles = (theme: Theme) => createStyles({
  root: {
    flexGrow: 1,
  },
});

export interface ICustomFlowProps extends WithStyles<typeof styles> {
  flowStage?: string;
}

export const CustomFlow = withStyles(styles)(
  class extends React.Component<ICustomFlowProps>{
    
  }
)