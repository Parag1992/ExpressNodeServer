const asyncHandler = require('express-async-handler');
const jwt = require('jsonwebtoken');

const validateToken = asyncHandler(async(req,res,next) =>{

    let token;

    let authHeader = req.headers.authorization;
    token = authHeader.split(" ")[1];
    //console.log('auth',authHeader);
    jwt.verify(token,"accesstokensecretvalue",(err, decoded) =>{
      console.log(1)
       if(err){
        console.log(err)
         res.status(401);
         throw new Error("User not authorized");
       }
       next();
    })
})
module.exports = validateToken;