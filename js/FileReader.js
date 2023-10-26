
const fs= require("fs");


fs.readFile("./Data/DeisgnGallaryTextFiles/lShaped.txt",(err,data)=>{
    console.log(data.toString());
})