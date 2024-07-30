const mongoose=require('mongoose');
const userSchema=new mongoose.Schema({
    name:String,
    email:String,
    password:String,
    imageUrl:{
        type:String,
        default:'https://via.placeholder.com/50'
    },
    contactlist:{
        type:[{
            name:String,
            email:String,
            imageUrl:{
                type:String,
                default:'https://via.placeholder.com/50'
            }
        }],
        default:[]
    }
})
const userModel=mongoose.model("Users",userSchema)
module.exports=userModel