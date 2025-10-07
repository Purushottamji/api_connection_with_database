const express=require("express");
const app=express();
const db=require("./database");
app.use(express.json());


app.listen(4253,(error)=>{
    if(error) return console.log("error :- " + error.message);
    console.log("Purushottam 👍")
})