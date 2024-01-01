const express =require("express");
const Router = express.Router();
const Article = require("../models/article")

Router.get("/new",(req,res)=>{
    res.render("article/new");
})

Router.post("/",(req,res)=>{
    const article=new Article({
        title:req.body.title,
        post1:req.body.post1,
        info:req.body.info
    })
    article.save().then(()=>{
        res.redirect("/");
    })
    
})
module.exports=Router;