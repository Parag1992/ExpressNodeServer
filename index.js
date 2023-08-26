const express=require('express');
const app=express();
const path = require("path");
const dotEnv = require('dotenv').config();
const validateToken = require('./middleware/validateTokenHandler');
const firstController=require("./router/FirstController");
const userController = require("./router/userController");
const errorHandler = require('./middleware/errorHandler');
const connectdb = require('./config/dbConnection');
console.log(path.join(__dirname,'../ExpressNodeServer/public'));
const pathServ=path.join(__dirname,'../ExpressNodeServer/public');
app.use(express.static(pathServ));

connectdb();
app.use(express.json());
//app.use(validateToken);
app.use("/api",firstController);
app.use("/user",userController);
app.use(errorHandler);

//app.get("/",)

const port=process.env.PORT;
app.listen(port,() => {
    console.log(`express is running on ${port} port`);
})