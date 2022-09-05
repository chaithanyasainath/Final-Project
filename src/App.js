import React from 'react';
import {Routes ,Route} from "react-router-dom";
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import Details from "./components/Details";
import Cart from "./components/Cart";
import Default from "./components/Default";
import Modal from './components/Modal';
import PaymentTab from './components/PaymentTab/paymenttab';


function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<ProductList/>} />
        <Route path="/details" element={<Details/>} />
       
        <Route path="/paymenttab" element={<PaymentTab/>} /> 
       
        <Route path="/cart" element={<Cart/>} />
        <Route element={<Default/>} />
      </Routes>
      <Modal />
    </React.Fragment>
  );
}

export default App;
