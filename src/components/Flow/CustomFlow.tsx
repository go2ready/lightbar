import * as React from 'react';

import { Theme } from '@material-ui/core/styles/createMuiTheme';
import { withStyles, WithStyles, createStyles  } from '@material-ui/core/styles';

import { SizeStepContainer } from '../Flow/steps/containers/SizeStepContainer';
import { SpectrumStepPanelContainer } from '../Flow/steps/containers/SpectrumStepPanelContainer';

import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Typography from '@material-ui/core/Typography';

import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';

const styles = (theme: Theme) => createStyles({
  root: {
    textAlign: 'center',
    width: '100%',
  },
  stepper: {
    textAlign: 'center'
  },
  button: {
    marginRight: theme.spacing(1),
    minWidth: 150,
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
});

export interface ICustomFlowProps extends WithStyles<typeof styles> {
  flowStage?: number;
  diodeSequence?: string[];

  setFlowStage?: (flowStage: number) => void;
}

export const CustomFlow = withStyles(styles)(
  class extends React.Component<ICustomFlowProps>{

    constructor(props : ICustomFlowProps) {
      super(props);

      this.handleReset = this.handleReset.bind(this);
    }

    public handleReset() : void {
      if (typeof this.props.setFlowStage === 'function')
      {
        this.props.setFlowStage(0);
      } else {
        console.error('setFlowStage function not available');
      }
    }

    public handleBack() : void {
      if (typeof this.props.setFlowStage === 'function' && this.props.flowStage !== undefined)
      {
        this.props.setFlowStage(this.props.flowStage - 1);
      } else {
        console.error('setFlowStage function or flow stage not available');
      }
    } 

    public handleNext() : void {
      if (typeof this.props.setFlowStage === 'function' && this.props.flowStage !== undefined)
      {
        this.props.setFlowStage(this.props.flowStage + 1);
      } else {
        console.error('setFlowStage function or flow stage not available');
      }
    } 

    public render() : JSX.Element {
      const { classes } = this.props;
      var self = this;

      var activeStep = 0
      if (this.props.flowStage)
      {
        activeStep = this.props.flowStage;
      }

      var steps = this.getSteps();

      var stepContent = <div />;
      if (activeStep === 0)
      {
        stepContent = <SizeStepContainer />;
      } else if (activeStep === 1)
      {
        stepContent = <SpectrumStepPanelContainer />
      }

      return (
        <div className={classes.root}>
          <Stepper className={classes.stepper} activeStep={activeStep}>
            {steps.map((label, index) => {
              const stepProps = {};
              const labelProps = {};
              return (
                <Step key={label} {...stepProps}>
                  <StepLabel {...labelProps}>{label}</StepLabel>
                </Step>
              );
            })}
          </Stepper>
          <div>
            <ButtonGroup color="primary" fullWidth aria-label="full width outlined button group">
              <Button disabled={activeStep === 0} onClick={() => self.handleBack()}>
              {<NavigateBeforeIcon />} Back
              </Button>
              <Button
                onClick={() => self.handleNext()}>
                {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                {<NavigateNextIcon />}
              </Button>
            </ButtonGroup>
            {stepContent}
          </div>
        </div>
      );
    }

    private getSteps() {
      return ['Choose the size', 'Choose the spectrum', 'Create an ad'];
    }

    private getStepContent(step: number) {
      switch (step) {
        case 0:
          return 'Content1';
        case 1:
          return 'Content2';
        case 2:
          return 'This is the bit I really care about!';
        default:
          return 'Unknown step';
      }
    }
  }
)