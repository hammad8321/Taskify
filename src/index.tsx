import React from 'react';
import ReactDOM from 'react-dom/client';
import "./App.css";
import ContactIndex from './Components/ContactPages/ContactIndex';
import reportWebVitals from './reportWebVitals';
import  {InputFieldIndex} from './Components/ContactPages/InputFieldIndex';
import ProductApp from './Components/ContactPages/ProductApp';


//import ContactIndex from  "../Components/ContactPages/ContactIndex"

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode >
    {/* <InputFieldIndex /> */}
    <ProductApp />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
