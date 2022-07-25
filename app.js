const express = require('express');
const bodyParser = require('body-parser');

// This date.js file is for date function.
const date = require(__dirname + '/date.js');

const app = express();

// These two array are to add items into and show on webpage. -> lists of items.
let items = ["Buy Food","Cook Food","Eat Food"];
let workItems = [];

app.set('view engine','ejs');

app.use(bodyParser.urlencoded({extended:true}));
// public folder is now of static nature and all file inside public folder(like css,js,etc.) can
// be accessed when someone opens our website.
app.use(express.static("public"));

app.get("/",function(req,res){

    // Date function is from date.js file.We exported that function
    // and saved in date variable.(See line 3).
    let day = date.getDate();

    // Replace listTitle by day and newListItems by items in list.ejs file.
    res.render("list",{listTitle: day , newListItems: items});
}); 

// When we click on Add button in webpage then it pushes that item
// into items array and then redirect to app.get("/") page in which
// it render on line 28 and send items arr to list.ejs file.
// res.redirect("/") -> redirect to app.get("/").
app.post("/",function(req,res){
    let item = req.body.newItem; 

    if(req.body.list === "Work"){
        workItems.push(item);
        res.redirect("/work");
    }
    else{
        items.push(item);
        res.redirect("/");
    }
    
});

app.get("/work",function(req,res){
    res.render("list",{listTitle: "Work List",newListItems: workItems});
});

app.post("/work",function(req,res){
    let item = req.body.newItem;
    workItems.push(item);
    res.redirect("/work");
});

app.listen(3000,function(){
    console.log("Server is running on port 3000");
});