const express=require("express");
const app=express();
const db=require("./database");
app.use(express.json());

app.get("/users/:id",(userRequest,userResponse)=>{
    const mysql="SELECT * FROM users WHERE id = ?";
    const id=userRequest.params.id;
    db.query(mysql,[id],(error,result)=>{
        if(error) return userResponse.status(500).json({"message":"server error","data":[]});
        if(result.affectedRows ===0 ) return userResponse.status(404).json({"message":"user not found","data":[]});
        userResponse.status(200).json({"message":"data fetched","data":result});
    })
})


app.post("/user_post",(userRequest,userResponse)=>{
    const mysqlPost="INSERT INTO users ( name, age, address ) VALUES ( ?, ?, ? )";
    const {name,age,address}=userRequest.body;
    db.query(mysqlPost,[name,age,address],(error,result)=>{
        if(error) return userResponse.status(500).json({"message":"server error"});
        userResponse.status(200).json({"message":"data added"});
    })
})
app.listen(4253,(error)=>{
    if(error) return console.log("error :- " + error.message);
    console.log("Purushottam 👍")
})