// import logo from './assets/images/logo.svg';
import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
// import 'bootstrap/dist/js/bootstrap.min.js'
// import 'bootstrap/dist/js/bootstrap.min.js'
import 'bootstrap/dist/js/bootstrap.min.js'
import Navbar from './components/Navbar';
// import Product from './components/Product';
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home';

// products
import Product from './pages/Products';
import Products from './pages/Products/Product.js'
import CreateProduct from './pages/Products/CreateProduct';

import User from './pages/Users';
import Brand from './pages/Brands';

function App() {
  return (
    <BrowserRouter>
      <div className='main-app'>
        <Navbar/>
        {/* <Product/> */}
        <Routes>
          <Route path='' element={<Home></Home>}></Route>
          <Route path='products' element={<Product/>}>
            <Route path='' element={<Products></Products>}></Route>
            <Route path='add' element={<CreateProduct></CreateProduct>}></Route>
          </Route>
          <Route path='users' element={<User/>}></Route>
          <Route path='brands' element={<Brand/>}></Route>
        </Routes>
      </div>
    
    </BrowserRouter>
    // <div className="App">
    //   <header className="App-header">
    //   <Navbar/>
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    // <div className='container-fluid'>
      // {/* <Navbar/> */}
      // {/* <h1>Hello bang</h1> */}
      // {/* <Product/> */}
      // {/* <p>hello world bang</p> */}
      

    // </div>

    
  );
}

export default App;
