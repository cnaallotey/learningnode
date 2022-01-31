const mongoose = require ('mongoose')
const { Schema } = mongoose;


//crate schema and model
const ClientSchema = new Schema ({
    firstName:String, 
    lastName:String,
    email:String,
    role:String,
    department:String,
    id:Number
})

const Client = mongoose.model('client', ClientSchema);

module.exports = Client; 