const express = require('express');

const router = express.Router();
const jwt = require('jsonwebtoken');

router.get("/", (req,res) =>{

    res.status(200);
    res.send('get User');
});

router.post("/login", (req,res) =>{

    const { username, password } = req.body;

    if(username && password && username=="Parag" && password=="12345"){

        const tkn = jwt.sign(
            {
                user:{
                    username:"Parag"
                }
            },
            "accesstokensecretvalue",
            {expiresIn:"5m"}
            );
        
        res.status(200).send({access_token: tkn});
    }else{
        console.log("1");
        res.status(400);
        throw new Error("Credentials did not match");
    }
})

module.exports = router