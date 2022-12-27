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
            message:'loggin failed. Check your Email and Password'
        }
        }
    })
}

const csfaculty=(Email,Password)=>{
    return mongodb.Csfaculty.findOne({Email,Password})
    .then(result=>{
        if(result){
            return{
                statusCode:200,
                status:true,
                message:'login successful',
                Name:result.Name,
                Email:result.Email
            }
        }else{
            return{
                statusCode:400,
                status:true,
                message:'login failed. Check your Email and Password'
            }
        }
    })
}
const civilfaculty=(Email,Password)=>{
    return mongodb.Civilfaculty.findOne({Email,Password})
    .then(result=>{
        if(result){
            return{
                statusCode:200,
                status:true,
                message:'login successful',
                Name:result.Name,
                Email:result.Email
            }
        }else{
            return{
                statusCode:400,
                status:true,
                message:'login failed. Check your Email and Password'
            }
        }
    })
}
const mechfaculty=(Email,Password)=>{
    return mongodb.Mechfaculty.findOne({Email,Password})
    .then(result=>{
        if(result){
            return{
                statusCode:200,
                status:true,
                message:'login successful',
                Name:result.Name,
                Email:result.Email
            }
        }else{
            return{
                statusCode:400,
                status:true,
                message:'login failed. Check your Email and Password'
            }
        }
    })
}

module.exports={adminlogin ,csfaculty,civilfaculty,mechfaculty}