import React from 'react';
// import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import myApp from './reducers';
import './index.css';
import Clock from './Clock';
import App from './App';
import ErrorBoundry from './ErrorBoundry';
import * as serviceWorker from './serviceWorker';
import Results from './components/Results';
import 'tachyons';




const logger= createLogger();
let store = createStore(myApp, applyMiddleware(thunkMiddleware, logger));

function render() {
  ReactDOM.render(
    <div className="container bg-lightest-blue">
    <Clock/>
    <ErrorBoundry>
      <App store={store}/>
      <hr/>
      <Results store={store}/>
      </ErrorBoundry>
    </div>
    ,document.getElementById('root')
  );
}
store.subscribe(render);
render();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
