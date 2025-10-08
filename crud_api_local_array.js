const express=require("express");
const app=express();

app.use(express.json());

const village=[{"id":1,"name":"Amnour","people":4000,"area":"450 KM"}];

app.get("/village",(vRequest,vResponse)=>{
    vResponse.status(200).json({"message":"villagers data fetched","data":village});
})

app.post("/post_village",(vRequest,vResponse)=>{
    const {id,name,people,area}=vRequest.body;
   const add= village.push({"id":id,"name":name,"people":people,"area":area});
   vResponse.status(201).json({"message":"villegers data added","data":add});
})

app.put("/put_village/:id", (vRequest, vResponse) => {
  const { id } = vRequest.params;
  const { name, people, area } = vRequest.body;
  const villageId = parseInt(id);
  const index = village.findIndex(user => user.id === villageId);

  if(index){
    village[index].name=name;
    village[index].people=people;
    village[index].area=area;
  }

  vResponse.status(200).json({
    message: "Village data updated successfully",
    data: village[index]
  });
});

app.delete("/delete_village/:id",(vRequest,vResponse)=>{
    const {id}=vRequest.params;
    const index=village.findIndex(user => user.id === parseInt(id));
    const deleteVillage=village.splice(index,1);
    vResponse.status(200).json({"message":"villagers data deleted","deletedData":deleteVillage[0]});
})
app.listen(5000,(error)=>{
    if(error) return console.log("server error :- "+ error.message);
    console.log("👍 purushottam");
})