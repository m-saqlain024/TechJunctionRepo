import express from 'express';


const app = express();

app.get("/api/product", (req, res) => {
  const product = [
    {
      id: 1,
      name: "metal",
      price: 200,
    },
    {
      id: 1,
      name: "room",
      price: 200,
    },
    {
      id: 1,
      name: "fan",
      price: 200,
    },
    {
      id: 1,
      name: "bulp",
      price: 200,
    },
  ];


  if (req.query.search) {
    const filterProduct = product.filter((product) =>
      product.name.includes(req.query.search)
    );
    return res.send(filterProduct)
  }

  setTimeout(() => {
    res.send(product);
  }, 3000);
});

const port = 4000;

app.listen(port, () => {
  console.log(`app in running on localhost://${port}`);
});
