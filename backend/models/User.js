const mongoose=require('mongoose');
const userSchema=new mongoose.Schema({
    name:String,
    email:String,
    password:String,
    imageUrl:String,
    contactlist:{
        type:[{
            name:String,
            email:String,
            imageUrl:String
        }],
        default:[]
    }
})
const userModel=mongoose.model("Users",userSchema)
module.exports=userModel