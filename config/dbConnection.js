const mongoose = require("mongoose");

const connectdb = async () =>{

    
    try{

        const connect = await mongoose.connect(process.env.CONNECTION_STRING);
        console.log('Connection successfull', connect.connection.name);

    }catch(err){
        console.log(err);
        //res.status(400);
        throw new Error("connection failed");
        process.exit(1);
    }


}

module.exports = connectdb;