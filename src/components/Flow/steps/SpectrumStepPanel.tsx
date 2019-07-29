import * as React from 'react';

import { Theme } from '@material-ui/core/styles/createMuiTheme';
import { withStyles, WithStyles, createStyles  } from '@material-ui/core/styles';

import { LightBarStyle } from '../../../types/FlowState';

import { SpectrumScrollerContainer } from './SpectrumStep/containers/SpectrumScrollerContainer';
import { DiodePickerContainer } from './SpectrumStep/containers/DiodePickerContainer';

import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import Paper from '@material-ui/core/Paper';

const styles = (theme: Theme) => createStyles({
  root: {
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
});

export interface ISpectrumStepPanelProps extends WithStyles<typeof styles> {
  diodeSequence?: string[];
  lightBarStyle?: LightBarStyle;

  setDiodeSequence?: (diodeSequence: string[]) => void;
}

export const SpectrumStepPanel = withStyles(styles)(
  class extends React.Component<ISpectrumStepPanelProps>{

    constructor(props : ISpectrumStepPanelProps) {
      super(props);
    }

    public render() : JSX.Element {
      const { classes } = this.props;

      var self = this;

      return (
        <div className={classes.root}>
          <ExpansionPanel disabled={false}>
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography className={classes.heading}>Customise Your Own Spectrum</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Paper style={{width: '100%'}}>
                <SpectrumScrollerContainer />
                <DiodePickerContainer />
              </Paper>
            </ExpansionPanelDetails>
          </ExpansionPanel>
        </div>
      );
    }
  }
)