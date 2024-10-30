const express = require("express");
const path = require("path");

const port = process.env.PORT || 3000;

const app = express();

// setup static floder
// app.use(express.static(path.join(__dirname, "public")));

// app.get("/", (req, res) => {
//   res.sendFile(path.join(__dirname , "public" , "index.html"))
// });

// app.get('/about' , (req ,res)=>{
//     res.sendFile(path.join(__dirname , "public" , "about.html"))

// })

let posts = [
  { id: 1, name: "saqlain" },
  { id: 2, name: "rashid" },
  { id: 3, name: "muzimil" },
  { id: 4, name: "kashif" },
  { id: 5, name: "abbas" },
];

// Get all posts
app.get("/api/posts", (req, res) => {
  // console.log(req.query)
  const limit = parseInt(req.query.limit);
  if (!isNaN(limit) && limit > 0) {
    res.status(200).send(posts.slice(0, limit));
  } else {
    res.status(200).json(posts);
  }
});

// Get single posts
app.get("/api/posts/:id", (req, res) => {
  // get param
  // console.log(req.params)
  const id = req.params.id;
  // the type of id is a string
  //  console.log(typeof(id) , "log id")
  const numid = parseInt(id);
  const checkingPost = posts.find((post) => post.id === numid);
  const filterData = posts.filter((post) => post.id === numid);
  //   console.log(filterData)
  if (!checkingPost) {
    res.status(404).json({ message: "Not Found" });
  } else {
    res.status(200).json(filterData);
  }
});

app.listen(port, () => console.log(`Server is running pn : ${port}`));
