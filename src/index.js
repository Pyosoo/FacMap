import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { RecoilRoot } from 'recoil';

ReactDOM.render(
    //<Provider store={store}>
      <RecoilRoot>
        <App />
      </RecoilRoot>,
    //</Provider>,
  document.getElementById('root')
);
