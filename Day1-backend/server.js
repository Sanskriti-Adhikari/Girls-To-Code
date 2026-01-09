//console.log("I am the server.")

//imports http model of node
const http=require("http")

//Created a server
const server=http.createServer((req,res)=>{
    if(req.method=="GET" && req.url=="/api"){
    return res.end("In api section.")
    }
    if(req.method=="GET" && req.url=="/about"){
    res.setHeader("Content-Type","text/html")
    return res.end("<h2>Hi, I am addicted to fantasy novels.")
    }
    res.end("Welcome to my server. I provide service.")
})

//Asked for server's access in this specified location
server.listen(4000,"localhost",()=>{
    console.log("Your server is running on http://localhost:4000")
})

//client le server lai request garera aako

//