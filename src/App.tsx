import React, { Component } from 'react';

import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Divider from '@material-ui/core/Divider';

import { Theme } from '@material-ui/core/styles/createMuiTheme';
import { withStyles, WithStyles, createStyles  } from '@material-ui/core/styles';

import { CustomFlowContainer } from './components/Flow/containers/CustomFlowContainer'
import { PreviewPanelContainer } from './components/Preview/containers/PreviewPanelContainer'
import { relative } from 'path';

const styles = (theme: Theme) => createStyles({
  root: {
    ...theme.mixins.gutters(),
    textAlign: 'center',
    height: '100%',
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
  footer: {
    padding: theme.spacing(2),
    marginTop: 'auto',
    backgroundColor: 'white',
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
          <PreviewPanelContainer />
          <div className={classes.root}>
            <div>
              <CustomFlowContainer />
            </div>
            <Divider variant="middle" />
            <footer className={classes.footer}>
              <Container maxWidth="sm">
                <Typography variant="body1">Saber LED Light bar designer</Typography>
                <Typography variant="body2" color="textSecondary">
                  {'Developed by '}
                  <Link color="inherit" href="https://material-ui.com/">
                    Coralution Technology Ltd.
                  </Link>
                  {'© All rights reserved.'}
                </Typography>
              </Container>
            </footer>
          </div>
        </React.Fragment>
      );
    }

  }
);
