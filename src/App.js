import './App.css';
import React from 'react';
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from './Pages/Home';
import About from './Pages/About';
import  ProductList from './Pages/ProductList';
import Contact from './Pages/Contact';
import SingleProduct from './Pages/ThankYou';
import Cart from './Pages/Cart';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Checkout from './Pages/Checkout';
import Header from './Pages/Header';
import ErrorPage from './Pages/ErrorPage';
import ThankYou from './Pages/ThankYou';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";


function App() {
  return (
    <BrowserRouter>
          <Header></Header>

    <Routes>
      <Route path="/totalitycorp-frontend-challenge" element={<Home/>}></Route>
      <Route path="/about" element={<About/>}></Route>
      <Route path="/productList" element={<ProductList/>}></Route>
      <Route path="/contact" element={<Contact/>}></Route>
      <Route path="/singleProduct/:id" element={<SingleProduct/>}></Route>
      <Route path="/cart" element={<Cart/>}></Route>
      <Route path="/login" element={<Login/>}></Route>
      <Route path="/register" element={<Register/>}></Route>
      <Route path="/checkout" element={<Checkout/>}></Route>
      <Route path="/header" element={<Header/>}></Route>
      <Route path='/thankyou' element={<ThankYou/>}></Route>
      <Route path="/* " element={<ErrorPage/>}></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
 