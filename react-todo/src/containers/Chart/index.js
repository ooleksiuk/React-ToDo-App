import React, { useEffect } from 'react';
import './index.css';
import { DoughnutChart } from '../../components/DoughnutChart';
import { useDispatch, useSelector } from 'react-redux';
import { getDataStart, getDataSuccess } from '../../store/doughnutChart/action';

const Chart = () => {
  const dispatch = useDispatch();
  const storeData = useSelector((state) => state.doughnutChart.data);
  const storeDataLoading = useSelector((state) => state.doughnutChart.loading);

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
    totalRows: 7,
    totalCount: 1309,
  };

  useEffect(() => {
    dispatch(getDataStart());
    setTimeout(() => {
      dispatch(getDataSuccess(mockData));
    }, 3000);
  }, []);

  return (
    <div className="chart-container">
      {!storeDataLoading ? (
        <DoughnutChart
          colors={storeData?.colors}
          countData={storeData?.juniorOnboardings?.map((i) => i.count)}
          legendData={storeData?.juniorOnboardings?.map(
            (i) => i.departmentName
          )}
          total={storeData?.totalCount}
        />
      ) : (
        <span>Loading...</span>
      )}
    </div>
  );
};

export default Chart;

// { name: 'test' }
