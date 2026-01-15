//Imported express framework into server
const express=require("express");
const app=express()

//To use json format files
app.use(express.json());

//app.use(express.urlencoded()) can work for normal json but not nested json
app.use(express.urlencoded({extended:true}))

//If cors error occurs
const cors=require("cors"); 
app.use(cors("*"));

//Defining server
app.listen(3000,()=>{
    console.log("Server is running on http://localhost:3000")
});

//Importing Database
const Database=require("better-sqlite3")
const db=new Database("login.db") //db object in database class
db.exec(
`
create table if not exists login(
id integer primary key autoincrement,
name text not null,
password text not null
)
`
)
//const logindata=[]

//Making sections
app.get("/",(req,res)=>{
    res.end("Welcome to my server.");
});

app.get("/admin",(req,res)=>{
    const sqlQuery=db.prepare(
        `
        select * from login`);
        const data=sqlQuery.all();   
    res.json(data);
});

app.get("/about",(req,res)=>{
    res.end("Sanskriti Adhikari");
});

//Sending in json format
app.get("/products",(req,res)=>{
    res.json({
        id:1,
        name:"locus"
    });
});

//needs postman extension
app.post("/login",(req,res)=>{
    const data=req.body
    console.log("Login information arried",data)
    //if data comes push it to the list and print list content in /admin
    if (data && data.name, data.password){
    //logindata.push(data)
    //inserting stuff into login.db
    const sqlQuery=db.prepare(
        `
        insert into login(name,password) values(?,?)
        `
    )
    sqlQuery.run(data.name,data.password);
    }
    res.json({
        status:true,
        message:"Data recieved sucessfully"
    })
})