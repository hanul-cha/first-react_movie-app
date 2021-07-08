import React from 'react';
import ReactDOM from 'react-dom';
/* import './index.css'; */
import App from './App';
/* import reportWebVitals from './reportWebVitals'; */


ReactDOM.render(//이부분엔 하나의 컴포넌트만(App) 올수 있고 다른 컴포넌트를 넣고 싶으면 하나의 컴포넌트 안에 넣어주는 식으로 작동함 
  <React.StrictMode>
    <App />
    
  </React.StrictMode>,
  document.getElementById('root')
);

