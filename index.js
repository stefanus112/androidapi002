const express = require("express");
const app = express();

app.get("/kelurahan",function(reg,res){
    res.send("importData")
});

app.listen(process.env.PORT || 8080);