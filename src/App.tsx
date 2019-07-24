import React, { Component } from 'react';

import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';

import { Theme } from '@material-ui/core/styles/createMuiTheme';
import { withStyles, WithStyles, createStyles  } from '@material-ui/core/styles';

const styles = (theme: Theme) => createStyles({
  root: {
    ...theme.mixins.gutters(),
    textAlign: 'center',
  },
  centerRoot: {
    ...theme.mixins.gutters(),
    textAlign: 'center',
    maxWidth: '500px',
  },
  shareIcon: {
    textAlign: 'center',
    display: 'inline',
  },
});

export interface IAppProps extends WithStyles<typeof styles> {
}

export const App = withStyles(styles)(
  class App extends Component<IAppProps> {
    render() {
      const { classes } = this.props;
      return (
        <React.Fragment>
          <CssBaseline />
          {
            <div>
              <Paper className={classes.root} elevation={1}>
              </Paper> 
            </div>
          }
        </React.Fragment>
      );
    }

  }
);
