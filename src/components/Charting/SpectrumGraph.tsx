import * as React from 'react';

import { Theme } from '@material-ui/core/styles/createMuiTheme';
import { withStyles, WithStyles, createStyles  } from '@material-ui/core/styles';

import { Chart } from 'chart.js';

const styles = (theme: Theme) => createStyles({
  root: {
  },
  chartContainer: {
    width: 400,
    height: 400,
  },
});

export interface ISpectrumGraphProps extends WithStyles<typeof styles> {
  diodeSequence?: string[];
}

export interface ISpectrumGraphState {
}

export const SpectrumGraph = withStyles(styles)(
  class extends React.Component<ISpectrumGraphProps, ISpectrumGraphState>{

    constructor(props : ISpectrumGraphProps) {
      super(props);
    }

    public componentDidMount()
    {
      var ctx = document.getElementById('spectrumChart') as HTMLCanvasElement;
      if (!ctx)
      {
        return;
      }

      var myChart = new Chart(ctx, {
          type: 'line',
          data: {
              labels: this.generateLabels(),
              datasets: [{
                  label: '# of Votes',
                  data: [12, 19, 3, 5, 2, 3],
                  backgroundColor: [
                      'rgba(255, 99, 132, 0.2)',
                      'rgba(54, 162, 235, 0.2)',
                      'rgba(255, 206, 86, 0.2)',
                      'rgba(75, 192, 192, 0.2)',
                      'rgba(153, 102, 255, 0.2)',
                      'rgba(255, 159, 64, 0.2)'
                  ],
                  borderColor: [
                      'rgba(255, 99, 132, 1)',
                      'rgba(54, 162, 235, 1)',
                      'rgba(255, 206, 86, 1)',
                      'rgba(75, 192, 192, 1)',
                      'rgba(153, 102, 255, 1)',
                      'rgba(255, 159, 64, 1)'
                  ],
                  borderWidth: 1
              }]
          },
          options: {
              scales: {
                  yAxes: [{
                      ticks: {
                          beginAtZero: true
                      }
                  }]
              }
          }
      });
    }

    public render() : JSX.Element {
      const { classes } = this.props;

      return (
        <div className={classes.chartContainer}>
          <canvas id="spectrumChart" width="400" height="400"></canvas>
        </div> 
      );
    }

    private generateLabels() {
      var labels = [];

      var counter = 0;
      for (var _i = 380; _i < 800; _i += 10) {
        if (counter === 0)
        {
          labels.push(String(_i));
        }
        else
        {
          labels.push("");
        }

        counter++;
        if (counter >= 4)
        {
          counter = 0;
        }
      }
      
      return labels;
    }
  }
)