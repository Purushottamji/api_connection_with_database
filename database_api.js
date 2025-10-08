const express=require("express");
const app=express();
const db=require("./test_db");
app.use(express.json());

app.get("/get_product",(productReq,productRes)=>{
    const mysqlGet="SELECT * FROM data";
    db.query(mysqlGet,(error,result)=>{
        if(error) return productRes.status(500).json({"message":"data fetched failed"});
        productRes.status(200).json({"message":"data fetched","data":result});
    })
})

app.post("/post_product",(productReq,productRes)=>{
    const mysqlPost="INSERT INTO data (name, price, description, image_url) VALUES ( ?, ?, ?, ?)";
    const {name,price,description,image_url}=productReq.body;
    db.query(mysqlPost,[name,price,description,image_url],(error,result)=>{
        if(error) return productRes.status(500).json({"message":"server error"});
        productRes.status(201).json({"message":"Product added","data":result});
    })
})

app.listen(6000,(error)=>{
    if(error) return console.log("server error :- "+ error.message);
    console.log("All Ok 👍")
})