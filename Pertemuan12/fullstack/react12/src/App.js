// import logo from './assets/images/logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import Navbar from './components/Navbar';
import Product from './components/Product';

function App() {
  return (
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
    <div className='container-fluid'>
      <Navbar/>
      {/* <h1>Hello bang</h1> */}
      <Product/>
      {/* <p>hello world bang</p> */}
      

    </div>
  );
}

export default App;
