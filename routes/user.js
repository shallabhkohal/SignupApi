const express = require("express");
const router = express.Router();

const user = require("../model/model");

router.post("/signup",(req,res)=>{
    try{
        const userRec = new user(req.body);
        console.log(req.body);
        const insrtUser = userRec.save();
        res.send(insrtUser).status(201);

    }catch(err){
        res.status(400).send(err)
    }
})


router.get("/fetch/:id",async(req,res)=>{
    try{
        const _id = req.params.id;
        const fetchUser = await user.findById(_id);
        res.send(fetchUser)
    }catch(err){
        res.send(400).send(err)
    }
})

router.patch("/update/:id",async(req,res)=>{
    try{
        const _id = req.params.id;
        const updateUser = await user.findById(_id);
        res.send(updateUser)
    }catch(err){
        res.status(400).send(err)
    }
})

router.delete("/delete/:id",async(req,res)=>{
    try{
        const dltUser = await user.findByIdAndDelete(req.params.id);
        res.send(dltUser)
    }catch(err){
        res.send(400).send(err)
    }
})

module.exports = router;
