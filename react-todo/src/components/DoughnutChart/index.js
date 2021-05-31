import React, { useRef } from 'react';
import './DoughnutChart.css';
import { Doughnut } from 'react-chartjs-2';
import ChartDataLabels from 'chartjs-plugin-datalabels';

export const DoughnutChart = ({ colors, count, legend, total }) => {
  const data = () => {
    return {
      labels: legend,
      datasets: [
        {
          label: '# of Votes',
          data: count,
          backgroundColor: colors,
        },
      ],
    };
  };

  const options = {
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        position: 'right',
      },
      datalabels: {
        color: 'white',
        formatter: function (value) {
          var percentage = (value / total) * 100;
          if (percentage > 100) {
            percentage = 100;
          }
          if (percentage < 5) {
            return '';
          }
          return value;
        },
        font: {
          size: 22,
        },
        padding: 6,
      },
    },
  };

  // * Plugings: Center label (Totals) *

  const centerLabel = {
    id: 'centerLabelPlugin',
    beforeDraw: drawTotals,
  };

  function drawTotals(chart) {
    const width = chart.chartArea.width,
      height = chart.chartArea.height,
      ctx = chart.ctx;

    ctx.restore();
    const fontSize = (height / 114).toFixed(2);
    ctx.font = fontSize + 'em sans-serif';
    ctx.textBaseline = 'middle';

    // font color
    ctx.fillStyle = '#382c9c';

    const text = total,
      textX = Math.round((width - ctx.measureText(text).width) / 2),
      textY = height / 2;

    ctx.fillText(text, textX, textY);
    ctx.save();
  }

  const ref = useRef();

  return (
    <div className="doughnut-container">
      <Doughnut
        data={data}
        options={options}
        height={400}
        width={400}
        plugins={[centerLabel, ChartDataLabels]}
        ref={ref}
      />
    </div>
  );
};

export default DoughnutChart;
