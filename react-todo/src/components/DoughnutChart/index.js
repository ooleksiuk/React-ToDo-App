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

  const pickColor = (bgColor) => {
    const color = bgColor.charAt(0) === '#' ? bgColor.substring(1, 7) : bgColor;
    // Breakimg the hex code into 3 pieces to get the individual red, green, and blue intensities.
    const r = parseInt(color.substring(0, 2), 16); // hexToR
    const g = parseInt(color.substring(2, 4), 16); // hexToG
    const b = parseInt(color.substring(4, 6), 16); // hexToB
    // The threshold of 186 is based on theory, but can be adjusted to taste
    const intensity = r * 0.299 + g * 0.587 + b * 0.114;
    if (intensity > 186) {
      return 'gray';
    } else if (intensity > 160) {
      return 'black';
    } else {
      return 'white';
    }
  };

  const options = {
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        position: 'right',
      },
      datalabels: {
        color: (ctx) => {
          const dataIndex = ctx.dataIndex;
          const labelBackground = ctx.dataset.backgroundColor[dataIndex];
          return pickColor(labelBackground);
        },

        formatter: (value) => {
          const percentage = (value / total) * 100;
          return percentage < 5 ? '' : value;
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
