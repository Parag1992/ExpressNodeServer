const express = require('express');
const router = express.Router();
const asyncHandler = require('express-async-handler');
const Contacts = require("../model/contactModel");

router.get("/",asyncHandler(async (req,res) => {
    const contacts = await Contacts.find();
    res.send(contacts);
}));

router.get("/getById/:id",asyncHandler( async (req,res) => {
    const contact = await Contacts.findById(req.params.id);
    if(!contact){
        res.status(400);
        throw new Error("Contact not found");
    }
    res.status(200).send(contact);
}))

router.post("/add",asyncHandler( async (req,res,next) =>{
    const { name, number } = req.body;
    if(!name && !number){
        res.status(400);
        throw new Error("Name is mandatory");
    }

    const contacts = await Contacts.create({
        name,
        number
    });

    res.status(201);
    res.send(contacts);
}))

router.put("/update/:id",asyncHandler( async (req,res,next) =>{

    const contact = await Contacts.findById(req.params.id);
    
    if(!contact){
        res.status(400);
        throw new Error("Contact not found");
    }
    
    const { name, number } = req.body;
    if(!name && !number){
        res.status(400);
        throw new Error("Name is mandatory");
    }

    const updatedContact = await Contacts.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new:true}
    );

    res.status(201);
    res.send(updatedContact);
}))

router.delete("/remove/:id",asyncHandler( async (req,res) => {
    console.log(req.params.id);
    const contact = await Contacts.findByIdAndDelete(req.params.id, function (err, docs) {
        if (err){
            console.log(err)
        }
        else{
            console.log("Deleted : ", docs);
        }
    });
    res.status(200).json(contact);
}))

module.exports=router;