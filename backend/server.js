const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();
const app = express();
app.use(cors());
app.use(bodyParser.json());

const { Schema } = mongoose;
const productShceme = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    image: {
      type: String,
      required: false,
    },
  },
  { timestamps: true }
);

const Products = mongoose.model("/products", productShceme);

// get all products
app.get("/products", (req, res) => {
  Products.find({}, (err, docs) => {
    if (!err) {
      res.send(docs);
    } else {
      res.status(500).json({ message: err });
    }
  });
});

//get product by id
app.get("/products/:id", (req, res) => {
  const { id } = req.params;
  Products.findById(id, (err, docs) => {
    if (!err) {
      if (docs) {
        res.status(200);
        res.send(docs);
      } else {
        res.status(404);
        res.send("not found");
      }
    } else {
      res.status(500).json({ message: err });
    }
  });
});

//delete product
app.delete("/products/:id", (req, res) => {
  const { id } = req.params;
  Products.findByIdAndDelete(id, (err, docs) => {
    if (!err) {
      res.send("Product Deleted");
    } else {
      res.status(500).json({ message: err });
    }
  });
});

//add product
app.post("/products", (req, res) => {
  const product = new Products({
    name: req.body.name,
    category: req.body.category,
    price: req.pody.price,
    image: req.body.image,
  });
  product.save();
  res.send("Product Added!!!");
});

const PORT = process.env.PORT;
const URL = process.env.DB_URL.replace("<password>", process.env.DB_PASSWORD);
mongoose.connect(URL, (err) => {
  if (!err) {
    console.log("DB CONNECTED!!!");
    app.listen(PORT, () => {
      console.log("the server is up and running on the PORT:", PORT);
    });
  }
});
