import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import axios from "axios";
import "./add.scss";

const Add = () => {
  const initialState = {
    name: "",
    category: "",
    price: null,
    image: "",
  };
  let url = "http://localhost:7777/products";
  const [product, setProduct] = useState(initialState);

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };
  const addData = async (e) => {
    e.preventDefault();;
    await axios.post(url, product);
    setProduct(initialState);
  };
  return (
    <section id="add">
      <form onSubmit={addData} className="container form">
        <TextField
          onChange={(e) => handleChange(e)}
          name="name"
          id="outlined-basic"
          label="Product Name"
          variant="outlined"
        />
        <TextField
          onChange={(e) => handleChange(e)}
          name="category"
          id="outlined-basic"
          label="Category"
          variant="outlined"
        />
        <TextField
          onChange={(e) => handleChange(e)}
          name="image"
          id="outlined-basic"
          label="Product Image"
          variant="outlined"
        />
        <TextField
          onChange={(e) => handleChange(e)}
          name="price"
          id="outlined-number"
          label="Price"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
        />
        <button onClick={(e) => addData(e)}>ADD</button>
      </form>
    </section>
  );
};

export default Add;
