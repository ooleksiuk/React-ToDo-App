import React from 'react';
import './DoughnutChart.css';
import { Doughnut } from 'react-chartjs-2';

export const DoughnutChart = ({ colors, count, legend }) => {
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
  return (
    <div className="doughnut-container">
      <Doughnut
        data={data}
        height={400}
        width={400}
        options={{
          maintainAspectRatio: false,
          plugins: {
            legend: {
              display: true,
              position: 'right',
              rtl: true,
              labels: {
                boxWidth: 20,
                boxHeight: 20,
              },
            },
          },
          legendCallback: (chart) => {
            // return whatever you need here based on chart.data
          },
          legend: {
            display: true,
            position: 'right',
            align: 'center',
            fontFamily: 'Allianz-Neo',
            textDirection: 'ltr',
            labels: {
              usePointStyle: true,
              fontColor: '#006192',
            },
          },
        }}
      />
    </div>
  );
};

export default DoughnutChart;

// options={{
//   maintainAspectRatio: false,
//   legend: {
//     display: true,
//     position: 'bottom',
//     labels: {
//       fontColor: 'black',
//       fontFamily: 'Calibri Light',
//       fontStyle: 'italic',
//     },
//   },
// }}
