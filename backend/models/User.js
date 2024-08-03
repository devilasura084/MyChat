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
            name:String,
            email:String,
            imageUrl:{
                type:String,
                default:'https://via.placeholder.com/50'
            },
            backgroundcolor:{
                type:String,
                default:"ffffff"
            },
            messages:{
                type:[
                    {
                        name:String,
                        message:String,
                        date:Date,
                        edited:{
                            type:Boolean,
                            default:false,
                        },
                        deleted:{
                            type:Boolean,
                            default:false
                        }
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