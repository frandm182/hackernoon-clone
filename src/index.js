import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import configureStore from './store';
import App from './components/App';
import SetGlobalStyles from './styles/globals';
import * as serviceWorker from './serviceWorker';


const renderApp = () => {
  const initialState = {};
  const store = configureStore(initialState);
  store.dispatch({ type: '@hnReader/@@INIT' });

  ReactDOM.render(
    <Provider store={store}>
      <React.Fragment>
        <SetGlobalStyles />
        <App />
      </React.Fragment>
    </Provider>,
    document.getElementById('root')
  )
}

renderApp();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
