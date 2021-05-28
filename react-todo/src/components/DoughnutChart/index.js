import React, { useRef } from 'react';
import './DoughnutChart.css';
import { Doughnut } from 'react-chartjs-2';

export const DoughnutChart = ({ colors, count, legend, total }) => {
  const data = () => {
    // const ctx = canvas.getContext('2d');

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
      // legendCallback: function (chart) {
      //   var text = [];
      //   text.push('<ul class="' + chart.id + '-legend">');
      //   for (var i = 0; i < chart.data.datasets.length; i++) {
      //     text.push(
      //       '<li><span style="background-color:' +
      //         chart.data.datasets[i].backgroundColor +
      //         '"></span>'
      //     );
      //     if (chart.data.datasets[i].label) {
      //       text.push(chart.data.datasets[i].label);
      //     }
      //     text.push('</li>');
      //   }
      //   text.push('</ul>');
      //   return text.join('');
      // },
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

  // * Plugings: Custom Legend *

  // const customLegend = {
  //   id: 'centerLabelPlugin',
  //   beforeDraw: (chart) => {
  //     // drawLegend(chart);
  //   },
  // };

  // function drawLegend(chart) {
  //   legendCallback: function(chart) {
  //     var text = [];
  //     text.push('<ul class="' + chart.id + '-legend">');
  //     for (var i = 0; i < chart.data.datasets.length; i++) {
  //       text.push('<li><span style="background-color:' + chart.data.datasets[i].backgroundColor + '"></span>');
  //       if (chart.data.datasets[i].label) {
  //         text.push(chart.data.datasets[i].label);
  //       }
  //       text.push('</li>');
  //     }
  //     text.push('</ul>');
  //     return text.join('');
  //   }
  // }

  const ref = useRef();

  return (
    <div className="doughnut-container">
      <Doughnut
        data={data}
        options={options}
        height={400}
        width={400}
        plugins={[centerLabel]}
        ref={ref}
      />
    </div>
  );
};

export default DoughnutChart;
