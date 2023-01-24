import React, { useState } from "react";
import "./crud.scss";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import axios from "axios";
import { useEffect } from "react";

const Crud = () => {
  const [products, setProducts] = useState([]);
  let URL = "http://localhost:7777/products";
  const getData = async () => {
    await axios.get(URL).then((res) => setProducts(res.data));
  };

  const deleteProduct = async (id) => {
    await axios.delete(`${URL}/${id}`);
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <section className="crud_section">
      <div className="container">
        <div className="titles ">
          <span id="crud_title">Popular item in the market</span>
          <h3 id="crud-title">Trending Product</h3>
        </div>
        <div className="card">
          <Grid container spacing={2}>
            {products &&
              products.map((product) => (
                <Grid item xs={4} md={3} key={product.id}>
                  <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                      component="img"
                      alt={product.name}
                      height="140"
                      image={product.image}
                    />
                    <CardContent>
                      <Typography
                        gutterBottom
                        variant="body2"
                        component="div"
                        color="text.secondary"
                      >
                        {product.category}
                      </Typography>
                      <Typography variant="h6">{product.name}</Typography>
                      <Typography variant="body2" color="text.secondary">
                        {product.price}
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button
                        onClick={() => deleteProduct(product.id)}
                        size="small"
                      >
                        Delete
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
              ))}
          </Grid>
        </div>
      </div>
    </section>
  );
};

export default Crud;
