const mongodb=require('./mongoDB')

const civilfacultychangePassword=(Email,Password,newPassword)=>{
    return mongodb.Civilfaculty.findOne({Email,Password})
    .then(result=>{
        if(result){
            result.Password=newPassword
            result.save()
            return{
                statusCode:200,
                status:true,
                message:'Password change successful'
            }
        }else{
            return{
                statusCode:400,
                status:false,
                message:'Incorrect Old Password'
            }
        }
    })
}

const csfacultychangePassword=(Email,Password,newPassword)=>{
    return mongodb.Csfaculty.findOne({Email,Password})
    .then(result=>{
        if(result){
            result.Password=newPassword
            result.save()
            return{
                statusCode:200,
                status:true,
                message:'Password change successful'
            }
        }else{
            return{
                statusCode:400,
                status:false,
                message:'Incorrect Old Password'
            }
        }
    })
}

const mechfacultychangePassword=(Email,Password,newPassword)=>{
    return mongodb.mechfaculty.findOne({Email,Password})
    .then(result=>{
        if(result){
            result.Password=newPassword
            result.save()
            return{
                statusCode:200,
                status:true,
                message:'Password change successful'
            }
        }else{
            return{
                statusCode:400,
                status:false,
                message:'Incorrect Old Password'
            }
        }
    })
}

module.exports={civilfacultychangePassword,csfacultychangePassword,mechfacultychangePassword}