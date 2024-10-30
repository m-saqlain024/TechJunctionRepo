import express from 'express'
import path from "path"
import posts from "./Routes/Posts.js"
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


app.use('/api/posts' , posts)

app.listen(port, () => console.log(`Server is running pn : ${port}`));
