import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route

} from 'react-router-dom';

import {Provider} from 'react-redux';
import Store from './store';

import './index.css';
import Homepage from './containers/homepage/homepage';
import AboutPage from './containers/AboutPage/AboutPage';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <Provider store={Store}>
  <React.StrictMode>
    <Router>
      <Switch>
        <Route path="/" exact component={Homepage} />
        <Route path="/about" component={AboutPage} />
      </Switch>
      
    </Router>
  </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
