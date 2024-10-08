const mongoose=require('mongoose');
const userSchema=new mongoose.Schema({
    name:String,
    email:String,
    password:String,
    imageUrl:{
        type:String,
        default:'https://via.placeholder.com/50'
    },
    backgroundcolor:String,
    contactlist:{
        type:[{
            email:String,
            messages:{
                type:[
                    {
                        email:String,
                        message:String,
                        date:String,
                        edited:Boolean,
                        deleted:Boolean,
                        seen:Boolean
                    }
                ],
                default:[]
            }
        }],
        default:[]
    }
})
const userModel=mongoose.model("Users",userSchema)
module.exports=userModel