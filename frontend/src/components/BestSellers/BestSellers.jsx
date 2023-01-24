import React from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import "./bestSeller.scss";
const BestSellers = () => {
  return (
    <section className="container">
      <div className="best_seller_titles">
        <span id="best-sellet_title">Popular item in the market</span>
        <h1 id="best_seller_title">Best Sellers</h1>
      </div>
      <div className="best_seller_products">
        <Grid container spacing={2}>
          <Grid item xs={4} md={3}>
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                alt="green iguana"
                height="140"
                image="https://lh3.googleusercontent.com/K1bbR9KmFhGfIhjtcg-95TMq9CBbB2K3lxirr851mm8IQU-Mzx7YptINqMNIzFQaxP0R1xDBZkiina_eMwVSrXHdQElz8D98cBg=s0"
              />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="body2"
                  component="div"
                  color="text.secondary"
                >
                  Accessories
                </Typography>
                <Typography variant="h6">Quarts Belt Watch</Typography>
                <Typography variant="body2" color="text.secondary">
                  $150.00
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={4} md={3}>
            {" "}
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                alt="green iguana"
                height="140"
                image="https://lh3.googleusercontent.com/K1bbR9KmFhGfIhjtcg-95TMq9CBbB2K3lxirr851mm8IQU-Mzx7YptINqMNIzFQaxP0R1xDBZkiina_eMwVSrXHdQElz8D98cBg=s0"
              />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="body2"
                  component="div"
                  color="text.secondary"
                >
                  Beauty
                </Typography>
                <Typography variant="h6">Women FreshWash</Typography>
                <Typography variant="body2" color="text.secondary">
                  $150.00
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={4} md={3}>
            {" "}
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                alt="green iguana"
                height="140"
                image="https://lh3.googleusercontent.com/K1bbR9KmFhGfIhjtcg-95TMq9CBbB2K3lxirr851mm8IQU-Mzx7YptINqMNIzFQaxP0R1xDBZkiina_eMwVSrXHdQElz8D98cBg=s0"
              />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="body2"
                  component="div"
                  color="text.secondary"
                >
                  Decor
                </Typography>
                <Typography variant="h6">Room Flash Light</Typography>
                <Typography variant="body2" color="text.secondary">
                  $150.00
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={4} md={3}>
            {" "}
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                alt="green iguana"
                height="140"
                image="https://lh3.googleusercontent.com/K1bbR9KmFhGfIhjtcg-95TMq9CBbB2K3lxirr851mm8IQU-Mzx7YptINqMNIzFQaxP0R1xDBZkiina_eMwVSrXHdQElz8D98cBg=s0"
              />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="body2"
                  component="div"
                  color="text.secondary"
                >
                  Decor
                </Typography>
                <Typography variant="h6"> Room Flash Light</Typography>
                <Typography variant="body2" color="text.secondary">
                  $150.00
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </div>
    </section>
  );
};

export default BestSellers;
