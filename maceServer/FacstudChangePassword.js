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
    return mongodb.Mechfaculty.findOne({Email,Password})
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

const csfirstyearchangepassword=(Email,Password)=>{
    return mongodb.Csfirstyear.findOne({Email})
    .then(result=>{
        if(result){
            result.Password=Password
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
                message:'Password change failed'
            }
        }
    })
}

const cssecondyearchangepassword=(Email,Password)=>{
    return mongodb.Cssecondyear.findOne({Email})
    .then(result=>{
        if(result){
            result.Password=Password
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
                message:'Password change failed'
            }
        }
    })
}

const csthirdyearchangepassword=(Email,Password)=>{
    return mongodb.Csthirdyear.findOne({Email})
    .then(result=>{
        if(result){
            result.Password=Password
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
                message:'Password change failed'
            }
        }
    })
}

const csfourthyearchangepassword=(Email,Password)=>{
    return mongodb.Csfourthyear.findOne({Email})
    .then(result=>{
        if(result){
            result.Password=Password
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
                message:'Password change failed'
            }
        }
    })
}

const civilfirstyearchangepassword=(Email,Password)=>{
    return mongodb.Civilfirstyear.findOne({Email})
    .then(result=>{
        if(result){
            result.Password=Password
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
                message:'Password change failed'
            }
        }
    })
}

const civilsecondyearchangepassword=(Email,Password)=>{
    return mongodb.Civilsecondyear.findOne({Email})
    .then(result=>{
        if(result){
            result.Password=Password
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
                message:'Password change failed'
            }
        }
    })
}

const civilthirdyearchangepassword=(Email,Password)=>{
    return mongodb.Civilthirdyear.findOne({Email})
    .then(result=>{
        if(result){
            result.Password=Password
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
                message:'Password change failed'
            }
        }
    })
}

const civilfourthyearchangepassword=(Email,Password)=>{
    return mongodb.Civilfourthyear.findOne({Email})
    .then(result=>{
        if(result){
            result.Password=Password
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
                message:'Password change failed'
            }
        }
    })
}

const mechfirstyearchangepassword=(Email,Password)=>{
    return mongodb.Mechfirstyear.findOne({Email})
    .then(result=>{
        if(result){
            result.Password=Password
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
                message:'Password change failed'
            }
        }
    })
}

const mechsecondyearchangepassword=(Email,Password)=>{
    return mongodb.Mechsecondyear.findOne({Email})
    .then(result=>{
        if(result){
            result.Password=Password
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
                message:'Password change failed'
            }
        }
    })
}

const mechthirdyearchangepassword=(Email,Password)=>{
    return mongodb.Mechthirdyear.findOne({Email})
    .then(result=>{
        if(result){
            result.Password=Password
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
                message:'Password change failed'
            }
        }
    })
}

const mechfourthyearchangepassword=(Email,Password)=>{
    return mongodb.Mechfourthyear.findOne({Email})
    .then(result=>{
        if(result){
            result.Password=Password
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
                message:'Password change failed'
            }
        }
    })
}



module.exports={civilfacultychangePassword,csfacultychangePassword,mechfacultychangePassword,csfirstyearchangepassword,cssecondyearchangepassword,csthirdyearchangepassword,csfourthyearchangepassword,civilfirstyearchangepassword,civilsecondyearchangepassword,civilthirdyearchangepassword,civilfourthyearchangepassword,mechfirstyearchangepassword,mechsecondyearchangepassword,mechthirdyearchangepassword,mechfourthyearchangepassword}