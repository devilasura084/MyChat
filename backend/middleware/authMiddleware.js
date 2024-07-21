const jwt=require('jsonwebtoken');
const authenticateJWT=(req,res,next)=>{
    const token=req.header('Authorization');
    if(token)
    {
        jwt.verify(token,'your_secret_key',(err,user)=>{
            if(err){
                return res.status(403);
            }
            req.user=user;
            next();
        })
    }
    else{
        res.status(401);
    }
}
module.exports=authenticateJWT;