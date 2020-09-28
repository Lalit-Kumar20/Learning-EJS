const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended:true}));
var Items = [];
var Item;
app.get("/",function(req,res){
    console.log("abc");
    var d = new Date();
   var options = {
       weekday:"long",
       day:"numeric",
       month:"long"
   };
   
   var day = d.toLocaleDateString("en-us"),options;
res.render("list",{kindOfDay:day,newListItem:Item});

});

app.post("/",function(req,res){
 Item =   req.body.newItem;
res.redirect("/");
console.log(Item);
});

app.listen(3000,function(){
    console.log("Server started on 3000");
});

