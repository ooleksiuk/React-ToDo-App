import { combineReducers } from 'redux';
import list from './list';
import controlPanel from './controPanel';

export default combineReducers({
  list,
  controlPanel,
});
