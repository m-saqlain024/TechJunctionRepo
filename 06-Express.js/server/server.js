const express = require("express");
const path = require('path')

const PORT = process.env.PORT  || 3000

const app = express();

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname , "public" , "index.html"))
});

app.get('/about' , (req ,res)=>{
    res.sendFile(path.join(__dirname , "public" , "about.html"))

})

app.listen(PORT, () => console.log(`Server is running pn : ${PORT}`));
