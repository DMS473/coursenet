import React, { useState } from "react";
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'
// import navigate from useNavigate();

function CreateProduct() {
    const navigate = useNavigate();
  const URL = "http://192.168.11.145:3000/api";
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState(0);
  const [stock, setStock] = useState(0);

  const addProduct = async () => {
    try {
      let result = await axios({
        url: `${URL}/products/store`,
        method: "POST",
        data: {
          name,
          image,
          price,
          stock,
          UserId: 1,
          BrandId: 2,
        },
      });
      //   getProducts();
      Swal.fire(
        'Product created',
        'Product has been added to the list',
        'success'
      )
      navigate("/products");
    } catch (err) {
      alert(err);
    }
  };
  const submitHandler = (e) => {
    e.preventDefault();
    addProduct();
  };

  return (
    // <div>CreateProduct</div>
    <div className="container">
      <div className="row">
        <div className="col-12 text-center p-2">
          <h3>Create Product</h3>
        </div>
        <div className="col-6 form-submit mx-auto">
          <form>
            <div className="mb-3">
              <label>Name</label>
              <input
                onChange={(e) => setName(e.target.value)}
                type="text"
                className="form-control"
                placeholder="Input name"
              ></input>
            </div>
            <div className="mb-3">
              <label>Image</label>
              <input
                onChange={(e) => setImage(e.target.value)}
                type="text"
                className="form-control"
                placeholder="Input image"
              ></input>
            </div>
            <div className="mb-3">
              <label>Price</label>
              <input
                onChange={(e) => setPrice(e.target.value)}
                type="text"
                className="form-control"
                placeholder="Input price"
              ></input>
            </div>
            <div className="mb-3">
              <label>Stock</label>
              <input
                onChange={(e) => setStock(e.target.value)}
                type="text"
                className="form-control"
                placeholder="Input stock"
              ></input>
            </div>
            <div className="mb-3">
              <button className="btn btn-success w-100" onClick={submitHandler}>
                submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CreateProduct;
