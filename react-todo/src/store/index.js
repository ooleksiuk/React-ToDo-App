import { combineReducers } from 'redux';
import list from './list';
import controlPanel from './controPanel';
import doughnutChart from './doughnutChart';

export default combineReducers({
  list,
  controlPanel,
  doughnutChart,
});
