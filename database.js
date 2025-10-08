const mysql=require("mysql2");
const db=mysql.createConnection({
    host:"localhost",user:"root",password:"",database:"user_details"
})

db.connect((error)=>{
    if(error) return console.log("database error :- "+ error);
    console.log("❤️ database created");
})

module.exports=db;