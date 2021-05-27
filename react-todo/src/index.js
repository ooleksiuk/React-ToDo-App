import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import List from './containers/List';
import Chart from './containers/Chart';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from './store';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';

const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <nav>
          <ul>
            <li>
              <Link to="/">Todo</Link>
            </li>
            <li>
              <Link to="/chart">Chart</Link>
            </li>
          </ul>
        </nav>
        <hr />
        <Switch>
          <Route exact path="/" component={List} />
          <Route path="/chart" component={Chart} />
        </Switch>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
