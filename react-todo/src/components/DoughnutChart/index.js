import React, { useEffect, useState, useRef } from 'react';
import { defaults } from 'react-chartjs-2';
import './DoughnutChart.css';
import { Doughnut } from 'react-chartjs-2';
import ChartDataLabels from 'chartjs-plugin-datalabels';

// * Plugings: Pick colors  *

const pickColor = (bgColor) => {
  const color = bgColor.charAt(0) === '#' ? bgColor.substring(1, 7) : bgColor;
  // Breaking the hex code into 3 pieces to get the individual red, green, and blue intensities.
  const r = parseInt(color.substring(0, 2), 16); // hexToR
  const g = parseInt(color.substring(2, 4), 16); // hexToG
  const b = parseInt(color.substring(4, 6), 16); // hexToB
  // The threshold of 186 is based on theory, but can be adjusted to taste
  const intensity = r * 0.299 + g * 0.587 + b * 0.114;
  if (intensity > 175) {
    return '#42403d';
  } else if (intensity > 160) {
    return 'black';
  } else {
    return 'white';
  }
};

// * Plugings: Center label (Totals) *

const centerLabel = (total) => {
  return {
    id: 'centerLabelPlugin',
    beforeDraw: (chart) => {
      const width = chart.chartArea.width,
        height = chart.chartArea.height,
        ctx = chart.ctx;

      ctx.restore();
      const fontSize = (height / 170).toFixed(2);
      ctx.font = 'bold ' + fontSize + 'em  sans-serif';
      ctx.textBaseline = 'middle';

      // font color
      ctx.fillStyle = '#382c9c';

      const text = total,
        textX = Math.round((width - ctx.measureText(text).width) / 2),
        textY = height / 2;

      ctx.fillText(text, textX, textY);
      ctx.save();
    },
  };
};

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
export const DoughnutChart = ({ colors, countData, legendData, total }) => {
  const [data, setData] = useState({});

  console.log(defaults);
  console.log(defaults.plugins.legend.onClick);
  // const defaultLegendClickHandler = defaults.plugins.legend.onClick;

  const legendRef = useRef();
  console.log('legendRef', legendRef.current);

  const genLegend = legendRef.current?.chartInstance.generateLegend();
  console.log('gen legend ', genLegend);

  useEffect(() => {
    if (!countData) return;

    const doughnutData = {
      labels: legendData,
      datasets: [
        {
          label: '# of Votes',
          data: countData,
          backgroundColor: colors,
          weight: 2,
          datalabels: {
            color: (ctx) => {
              const dataIndex = ctx.dataIndex;
              const labelBackground = ctx.dataset.backgroundColor[dataIndex];
              return pickColor(labelBackground);
            },
            // Dynamic appearing of hide labels when it's enough space
            // (is called on every dataset item)
            formatter: (value, context) => {
              const percentage = (value / totalVisible(context)) * 100;
              // hide a label if the item takes less than 3% of the chart
              return percentage < 3 ? '' : value;
            },

            font: {
              size: 20,
            },
            padding: 6,
          },
        },
      ],
    };

    // Calculate the current total of visible items
    const totalVisible = (context) => {
      const notHiddenItems = context.chart.legend.legendItems.filter(
        (i) => !i.hidden
      );
      const itemIndecies = notHiddenItems.map((i) => i.index);
      return context.dataset.data.reduce((prev, curr, i) => {
        return itemIndecies.includes(i) ? prev + curr : prev;
      }, 0);
    };

    setData(doughnutData);
  }, []);

  useEffect(() => {
    console.log(legendRef.current?.legend.legendItems);
    console.log(legendRef);
  }, [legendRef]);

  const options = {
    maintainAspectRatio: false,
    cutout: '60%',
    plugins: {
      legend: {
        display: true,
        position: 'right',
      },
      legendCallback: function (chart) {
        var text = [];
        text.push('<ul class="' + chart.id + '-legend">');
        for (var i = 0; i < chart.data.datasets.length; i++) {
          text.push(
            '<li><div class="legendValue"><span style="background-color:' +
              chart.data.datasets[i].backgroundColor +
              '">&nbsp;&nbsp;&nbsp;&nbsp;</span>'
          );

          if (chart.data.datasets[i].label) {
            text.push(
              '<span class="label">' + chart.data.datasets[i].label + '</span>'
            );
          }

          text.push('</div></li><div class="clear"></div>');
        }

        text.push('</ul>');

        return text.join('');
      },
    },
  };

  // document.getElementById('legend').innerHTML = legendRef.generateLegend();

  return (
    <div className="doughnut-container">
      <Doughnut
        data={data}
        options={options}
        height={400}
        width={400}
        plugins={[centerLabel(total), ChartDataLabels]}
        ref={legendRef}
      />
      <div id="legend"></div>
    </div>
  );
};

export default DoughnutChart;
