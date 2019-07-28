import * as React from 'react';

import { Theme } from '@material-ui/core/styles/createMuiTheme';
import { withStyles, WithStyles, createStyles  } from '@material-ui/core/styles';

const styles = (theme: Theme) => createStyles({
  root: {
  },
});

export interface ISpectrumScrollerProps extends WithStyles<typeof styles> {
  diodeSequence?: string[];

  setCurrSelection?: (currSelection : number) => void;
}

export const SpectrumScroller = withStyles(styles)(
  class extends React.Component<ISpectrumScrollerProps>{

    constructor(props : ISpectrumScrollerProps) {
      super(props);
    }

    public render() : JSX.Element {
      const { classes } = this.props;

      var self = this;

      return (
        <div className={classes.root}>

        </div>
      );
    }
  }
)