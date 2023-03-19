import React from "react";
import { AiFillBulb } from "react-icons/ai";
import { Link} from "react-router-dom"

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand logo" to="/">
          <AiFillBulb/>
          Navbaris
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link className="nav-item nav-link active" to="/">
              Home <span class="sr-only">(current)</span>
            </Link>
            <Link className="nav-item nav-link" to="/products">
              Product
            </Link>
            <Link className="nav-item nav-link" to="/users">
              User
            </Link>
            <Link className="nav-item nav-link" to="/brands">
              Brand
            </Link>
          </div>
        </div>
      </nav>
      {/* <h1>ashyiap</h1>
       */}
    </div>
  );
};

export default Navbar;
