const mongoose = require('mongoose');

const contactSchema = mongoose.Schema({
    name:{
        type:String,
        required:[true,"Please add name"]
    },
    number:{
        type:String,
        required:[true,"Please add number"]
    }
},
{
    timestamps:true
})

module.exports = mongoose.model("Contacts", contactSchema);