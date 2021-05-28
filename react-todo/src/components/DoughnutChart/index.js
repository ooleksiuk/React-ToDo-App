import React from 'react';
import './DoughnutChart.css';
import { Doughnut } from 'react-chartjs-2';

export const DoughnutChart = ({ colors, count, legend, total }) => {
  const data = {
    labels: legend,
    datasets: [
      {
        label: '# of Votes',
        data: count,
        backgroundColor: colors,
      },
    ],
  };

  const options = {
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  const centerLabel = {
    id: 'centerLabelPlugin',
    beforeDraw: (chart) => {
      drawTotals(chart);
    },
  };

  function drawTotals(chart) {
    const width = chart.chartArea.width,
      height = chart.chartArea.height,
      ctx = chart.ctx;

    ctx.restore();
    var fontSize = (height / 114).toFixed(2);
    ctx.font = fontSize + 'em sans-serif';
    ctx.textBaseline = 'middle';

    // font color
    ctx.fillStyle = '#382c9c';

    var text = total,
      textX = Math.round((width - ctx.measureText(text).width) / 2),
      textY = height / 2;

    ctx.fillText(text, textX, textY);
    ctx.save();
  }

  return (
    <div className="doughnut-container">
      <Doughnut
        data={data}
        options={options}
        height={400}
        width={400}
        plugins={[centerLabel]}
      />
    </div>
  );
};

export default DoughnutChart;
