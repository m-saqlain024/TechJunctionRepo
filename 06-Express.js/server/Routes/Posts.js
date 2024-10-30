import express from 'express'
const router = express.Router()

let posts = [
    { id: 1, name: "saqlain" },
    { id: 2, name: "rashid" },
    { id: 3, name: "muzimil" },
    { id: 4, name: "kashif" },
    { id: 5, name: "abbas" },
  ];
  
  // Get all posts
  router.get("/", (req, res) => {
    // console.log(req.query)
    const limit = parseInt(req.query.limit);
    if (!isNaN(limit) && limit > 0) {
      res.status(200).send(posts.slice(0, limit));
    } else {
      res.status(200).json(posts);
    }
  });
  
  // Get single posts
  router.get("/:id", (req, res) => {
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
export default router;