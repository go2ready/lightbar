import * as React from 'react';

import { Theme } from '@material-ui/core/styles/createMuiTheme';
import { withStyles, WithStyles, createStyles  } from '@material-ui/core/styles';

import { } from './resources/Light-60.svg';

const styles = (theme: Theme) => createStyles({
  root: {
    flexGrow: 1,
  },
});

export interface IPreviewPanelProps extends WithStyles<typeof styles> {
  index: number;
  assignments?: string[];
}

export const PreviewPanel = withStyles(styles)(
  class extends React.Component<IPreviewPanelProps>{
    public render() : JSX.Element {
      const { classes } = this.props;

      return (
        <div>
          <svg height="100" width="100">
            <circle cx="50" cy="50" r="40" fill="red" />
          </svg>
        </div>
      );
    }
  }
)