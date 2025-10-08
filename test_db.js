const mysql=require("mysql2");

const dbHelper=mysql.createConnection({
    host:"localhost",user:"root",password:"",database:"products"
})

dbHelper.connect((error)=>{
    if(error) return console.log("Database error :- " + error.message);
    console.log("Database created");
})

module.exports=dbHelper;