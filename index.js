const express = require("express");
const app = express();
const importData = require("./data.json");

app.get("/",function(reg,res){
    res.send(importData)
});

app.listen(process.env.PORT || 8080);