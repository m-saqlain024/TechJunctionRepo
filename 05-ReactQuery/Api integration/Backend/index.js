const express = require('express')


const app = express();

app.get("/api/product", (req, res) => {
  const product = [
    {
      id: 1,
      name: "product 1",
      price: 200,
    },
    {
      id: 1,
      name: "product 1",
      price: 200,
    },
    {
      id: 1,
      name: "product 1",
      price: 200,
    },
    {
      id: 1,
      name: "product 1",
      price: 200,
    },
  ];

  // localhost//:3000/api/product?search=metal

  if (req.query.search) {
    const filterProduct = product.filter((product) =>
      product.name.includes(req.query.search)
    );
  }

  setTimeout(() => {
    res.send(product);
  }, 3000);
});

const port = 3000;

app.listen(port, () => {
  console.log(`app in running on localhost://${port}`);
});
