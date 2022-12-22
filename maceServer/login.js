const mongodb=require('./mongoDB')

const adminlogin=(email,password)=>{
    return mongodb.Admin.findOne({"Email":email,"Password":password})
    .then(result=>{
        if(result){
            return{
                statusCode:200,
                status:true,
                message:'Successfully logged in',
                Email:result.Email,
                Name:result.Name
            }
            
        }else{
            return{
            statusCode:400,
            status:false,
            message:'loggin failed. Check your email and password'
        }
        }
    })
}

module.exports={adminlogin}