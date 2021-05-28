import React from 'react';
import './index.css';
import { DoughnutChart } from '../../components/DoughnutChart';

const Chart = () => {
  const mockData = {
    juniorOnboardings: [
      { departmentName: 'Finance Department', count: 211 },
      { departmentName: 'General Management', count: 204 },
      { departmentName: 'Human Resource Department', count: 232 },
      { departmentName: 'Information technology', count: 222 },
      { departmentName: 'Marketing Department', count: 211 },
      { departmentName: 'Operations Department', count: 208 },
      { departmentName: 'Sales Department', count: 21 },
    ],
    colors: [
      '#faf1e2',
      '#ffcec7',
      '#382c9c',
      '#c1548a',
      '#5eccc9',
      '#94c89c',
      '#31313180',
    ],
    totalCount: 1309,
  };

  return (
    <div className="chart-container">
      <DoughnutChart
        colors={mockData.colors.map((i) => i)}
        count={mockData.juniorOnboardings.map((i) => i.count)}
        legend={mockData.juniorOnboardings.map((i) => i.departmentName)}
        total={mockData.juniorOnboardings
          .map((i) => i.count)
          .reduce((a, b) => a + b, 0)}
      />
    </div>
  );
};

export default Chart;
