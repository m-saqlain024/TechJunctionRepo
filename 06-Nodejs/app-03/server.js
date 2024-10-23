import http from "http"
const  PORT = 8000;


const server = http.createServer((req, res)=>{
    res.writeHead(200 , {'Content-Type': 'Text/HTML'})
    res.end("<h1>hello world </h1>")
})


server.listen(PORT ,()=>{
    console.log(`Server is running : ${PORT}`)
})