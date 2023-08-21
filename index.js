import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Details from './Details';
// import UserCondition from './UserCondition';
// import Eventclass from './Eventclass';
// import Greet from './components/greet';
// import Eventclick from './Eventclick';
// import Welcome from './components/Welcome';
// import Counter from './components/Counter';
// import Parentcomponent from './Parentcomponent';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Details/>
    {/* <UserCondition/> */}
     {/* <Parentcomponent/> */}
    {/* <Eventclass/> */}
    {/* <Eventclick/> */}
     {/* <Greet/> */}
    {/* <Welcome/>   */ }
    {/* <Message/> */}
    {/* <Counter/> */}
  
  
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
