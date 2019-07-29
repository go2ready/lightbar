import * as React from 'react';

import { Theme } from '@material-ui/core/styles/createMuiTheme';
import { withStyles, WithStyles, createStyles  } from '@material-ui/core/styles';

import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const styles = (theme: Theme) => createStyles({
  root: {
  },
});

export interface ICustomAckProps extends WithStyles<typeof styles> {
  isCustomising?: boolean;

  setIsCustomising?: (isCustomising: boolean) => void;
  setShouldResetSpectrum?: (shouldResetSpectrum: boolean) => void;
  setShouldExpandDiodePicker?: (shouldExpandDiodePicker: boolean) => void;
}

export interface ICustomAckState {
  open: boolean;
}

export const CustomAck = withStyles(styles)(
  class extends React.Component<ICustomAckProps, ICustomAckState>{

    constructor(props : ICustomAckProps) {
      super(props);

      this.state = {
        open: false
      }

      this.HandleChange = this.HandleChange.bind(this);
      this.HandleAccept = this.HandleAccept.bind(this);
      this.HandleDecline = this.HandleDecline.bind(this);
    }

    public render() : JSX.Element {
      const { classes, isCustomising } = this.props;
      const { open } = this.state;

      var self = this;

      return (
        <div className={classes.root}>
          <FormGroup row>
            <FormControlLabel
              control={
                <Checkbox
                  checked={isCustomising}
                  onChange={self.HandleChange}
                  value="isCustomising"
                  color="primary"
                />
              }
              label="I want to customise the spectrum and I understand that additional tax might occur"
            />
          </FormGroup>
          <Dialog
            open={open}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title">{"Are you sure?"}</DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                Leaving customisation mode will reset your spectrum.
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={this.HandleDecline} color="secondary">
                No
              </Button>
              <Button onClick={this.HandleAccept} color="primary" autoFocus>
                Yes
              </Button>
            </DialogActions>
          </Dialog>
        </div>
      );
    }

    private HandleDecline()
    {
      this.setState({
        ...this.state,
        open: false,
      });
    }

    private HandleAccept()
    {
      if (typeof this.props.setIsCustomising === 'function')
      {
        this.props.setIsCustomising(false);

        if (typeof this.props.setShouldResetSpectrum === 'function')
        {
          this.props.setShouldResetSpectrum(true);
        } else {
          console.error('setDiodeSequence function not available');
        }

      } else {
        console.error('setDiodeSequence function not available');
      }
      
      this.HandleDecline();
    }

    private HandleChange(event:React.ChangeEvent<HTMLInputElement>)
    {
      var isChecked = event.target.checked;
      if (this.props.isCustomising && !isChecked)
      {
        this.setState({
          ...this.state,
          open: true
        });
        return;
      }

      if (typeof this.props.setIsCustomising === 'function')
      {
        this.props.setIsCustomising(isChecked);

        if (typeof this.props.setShouldExpandDiodePicker === 'function')
        {
          this.props.setShouldExpandDiodePicker(true);
        } else {
          console.error('setDiodeSequence function not available');
        }
      } else {
        console.error('setDiodeSequence function not available');
      }
    }
  }
)