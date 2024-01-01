const express= require("express")
const mongoose = require("mongoose");
const expressLayouts=require("express-ejs-layouts");
const userRouters=require("./routes/user")
const app=express();



//view engine
app.use(expressLayouts); //using ejs layout // this will require to create a new layout.ejs file that will be the main index page //this will take contents from different ejs pages
app.set("view engine","ejs");

app.get("/",(req,res)=>{
    res.render("index");
})
//mongoose db con
mongoose.connect("mongodb://localhost:27017/blogwebsite",{
    useNewUrlParser:true
})

//body parser
app.use(express.json());
app.use(express.urlencoded({extended:true}));

//userRouters
app.use("/article",userRouters);
//public folder for css
app.use(express.static("public"))

const PORT = process.env.PORT || 3001
app.listen(PORT,()=>{
    console.log("working on Port 3001")
});