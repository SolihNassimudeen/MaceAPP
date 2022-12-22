const mongodb=require('../mongoDB')

const changepassword=(Email,Password,newPassword)=>{
    return mongodb.Admin.findOne({Email,Password})
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
                message:'Incorrect current password'
            }
        }
    })
}

module.exports={changepassword}
