import React, { useState, useEffect } from "react";
import axios from "axios";

function Product() {
  const [products, setProducts] = useState([]);
  //   const URL = "http://localhost:3000/api"
  const URL = "http://192.168.11.145:3000/api";
  
  // form
  const [name, setName] = useState("")
  const [image, setImage] = useState("")
  const [price, setPrice] = useState(0)
  const [stock, setStock] = useState(0)
   
  const addProduct = async () => {
    try {
        let result = await axios({
            url: `${URL}/products/store`,
            method: "POST",
            data: {
                name, image, price, stock,
                UserId:1,
                BrandId:2
            }
        })
        getProducts();

    }
    catch (err) {
        alert(err)
    }
  }
  const submitHandler = (e) =>{
        e.preventDefault();
        addProduct();
    }



  const getProducts = async () => {
    try {
      let temp = await axios({
        url: `${URL}/products`,
        method: "GET",
      });
      console.log(temp.data);
      setProducts(temp.data);
    } catch (error) {
      alert(error);
    }
  };

  const getProductHandler = () => {
    // alert("Product hasil");
    getProducts();
  };

    useEffect(() => {
      console.log("use effect berjalan")
      getProducts()
    }, []);

//   (() => {
//     getProducts();
//   })();

  return (
    <div className="container">
      <h3>Product Page</h3>
      <p>isi dari product</p>
      <button className="btn btn-primary" onClick={getProductHandler}>
        Hasil
      </button>
      <div className="row p-3">
        <div className="col-4">
          <form>
            <div className="mb-3">
              <label>Name</label>
              <input
                onChange={e => setName(e.target.value)}
                type="text"
                className="form-control"
                placeholder="Input name"
              ></input>
            </div>
            <div className="mb-3">
              <label>Image</label>
              <input
              onChange={e => setImage(e.target.value)}
                type="text"
                className="form-control"
                placeholder="Input image"
              ></input>
            </div>
            <div className="mb-3">
              <label>Price</label>
              <input
              onChange={e => setPrice(e.target.value)}
                type="text"
                className="form-control"
                placeholder="Input price"
              ></input>
            </div>
            <div className="mb-3">
              <label>Stock</label>
              <input
              onChange={e => setStock(e.target.value)}
                type="text"
                className="form-control"
                placeholder="Input stock"
              ></input>
            </div>
            <div className="mb-3">
              <button className="btn btn-success w-100" onClick={submitHandler}>submit</button>
            </div>
          </form>
        </div>

        <div className="col-8">
          <table className="table table-bordered border-success">
            <thead>
              <tr>
                <td>Id</td>
                <td>name</td>
                <td>Action</td>
              </tr>
            </thead>
            <tbody>
                {/* <td>1</td> */}
              {products.length !== 0 ? (
                products.map((product) => {
                  const { id, name, price, stock, image, User, Brand } = product;
                  return (
                    
                    <tr>
                        <td>1</td> 
                        <div className="row">
                            <div className="col-3">
                                <img src={image}></img>
                            </div>
                            <div className="col-9">
                                <h3>{name}</h3>
                                <h5>Rp. {price}</h5>
                                <p>Stock {stock}</p>
                                {/* <small>{User.username}</small> */}
                            </div>
                        </div>
                      {/* <td>{price}</td>
                      <td>{stock}</td> */}
                      <td>
                        <button className="btn btn-warning">Remove</button>
                        <button className="btn btn-info">Edit</button>
                      </td>
                    </tr>
                  );
                })
              ) : (
                <div> Please wait </div>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Product;
