const mongodb=require('./mongoDB')

const Civilfirstyearmark=(Email,SubjectAfirst,SubjectAsecond,SubjectAthird,SubjectAfinal,SubjectBfirst,SubjectBsecond,SubjectBthird,SubjectBfinal,SubjectCfirst,SubjectCsecond,SubjectCthird,SubjectCfinal,SubjectDfirst,SubjectDsecond,SubjectDthird,SubjectDfinal,SubjectEfirst,SubjectEsecond,SubjectEthird,SubjectEfinal,SubjectFfirst,SubjectFsecond,SubjectFthird,SubjectFfinal)=>{
    return mongodb.Civilfirstyearmark.findOne({Email})
    .then(result=>{
        if(result){
            result.SubjectAfirst=SubjectAfirst
            result.SubjectAsecond=SubjectAsecond
            result.SubjectAthird=SubjectAthird
            result.SubjectAfinal=SubjectAfinal
            result.SubjectBfirst=SubjectBfirst
            result.SubjectBsecond=SubjectBsecond
            result.SubjectBthird=SubjectBthird
            result.SubjectBfinal=SubjectBfinal
            result.SubjectCfirst=SubjectCfirst
            result.SubjectCsecond=SubjectCsecond
            result.SubjectCthird=SubjectCthird
            result.SubjectCfinal=SubjectCfinal
            result.SubjectDfirst=SubjectDfirst
            result.SubjectDsecond=SubjectDsecond
            result.SubjectDthird=SubjectDthird
            result.SubjectDfinal=SubjectDfinal
            result.SubjectEfirst=SubjectEfirst
            result.SubjectEsecond=SubjectEsecond
            result.SubjectEthird=SubjectEthird
            result.SubjectEfinal=SubjectEfinal
            result.SubjectFfirst=SubjectFfirst
            result.SubjectFsecond=SubjectFsecond
            result.SubjectFthird=SubjectFthird
            result.SubjectFfinal=SubjectFfinal
            result.save()
            return{
                statusCode:200,
                status:true,
                message:'Mark upload successful'
            }
        }else{
            const newStudentmark = new mongodb.Civilfirstyearmark({
                Email,
                SubjectAfirst,
                SubjectAsecond,
                SubjectAthird,
                SubjectAfinal,
                SubjectBfirst,
                SubjectBsecond,
                SubjectBthird,
                SubjectBfinal,
                SubjectCfirst,
                SubjectCsecond,
                SubjectCthird,
                SubjectCfinal,
                SubjectDfirst,
                SubjectDsecond,
                SubjectDthird,
                SubjectDfinal,
                SubjectEfirst,
                SubjectEsecond,
                SubjectEthird,
                SubjectEfinal,
                SubjectFfirst,
                SubjectFsecond,
                SubjectFthird,
                SubjectFfinal
            })
            newStudentmark.save()
            return{
                statusCode:202,
                status:true,
                message:'Mark upload successful'
            }
        }
    })
}

const Civilsecondyearmark=(Email,SubjectAfirst,SubjectAsecond,SubjectAthird,SubjectAfinal,SubjectBfirst,SubjectBsecond,SubjectBthird,SubjectBfinal,SubjectCfirst,SubjectCsecond,SubjectCthird,SubjectCfinal,SubjectDfirst,SubjectDsecond,SubjectDthird,SubjectDfinal,SubjectEfirst,SubjectEsecond,SubjectEthird,SubjectEfinal,SubjectFfirst,SubjectFsecond,SubjectFthird,SubjectFfinal)=>{
    return mongodb.Civilsecondyearmark.findOne({Email})
    .then(result=>{
        if(result){
            result.SubjectAfirst=SubjectAfirst
            result.SubjectAsecond=SubjectAsecond
            result.SubjectAthird=SubjectAthird
            result.SubjectAfinal=SubjectAfinal
            result.SubjectBfirst=SubjectBfirst
            result.SubjectBsecond=SubjectBsecond
            result.SubjectBthird=SubjectBthird
            result.SubjectBfinal=SubjectBfinal
            result.SubjectCfirst=SubjectCfirst
            result.SubjectCsecond=SubjectCsecond
            result.SubjectCthird=SubjectCthird
            result.SubjectCfinal=SubjectCfinal
            result.SubjectDfirst=SubjectDfirst
            result.SubjectDsecond=SubjectDsecond
            result.SubjectDthird=SubjectDthird
            result.SubjectDfinal=SubjectDfinal
            result.SubjectEfirst=SubjectEfirst
            result.SubjectEsecond=SubjectEsecond
            result.SubjectEthird=SubjectEthird
            result.SubjectEfinal=SubjectEfinal
            result.SubjectFfirst=SubjectFfirst
            result.SubjectFsecond=SubjectFsecond
            result.SubjectFthird=SubjectFthird
            result.SubjectFfinal=SubjectFfinal
            result.save()
            return{
                statusCode:200,
                status:true,
                message:'Mark upload successful'
            }
        }else{
            const newStudentmark = new mongodb.Civilsecondyearmark({
                SubjectAfirst,
                SubjectAsecond,
                SubjectAthird,
                SubjectAfinal,
                SubjectBfirst,
                SubjectBsecond,
                SubjectBthird,
                SubjectBfinal,
                SubjectCfirst,
                SubjectCsecond,
                SubjectCthird,
                SubjectCfinal,
                SubjectDfirst,
                SubjectDsecond,
                SubjectDthird,
                SubjectDfinal,
                SubjectEfirst,
                SubjectEsecond,
                SubjectEthird,
                SubjectEfinal,
                SubjectFfirst,
                SubjectFsecond,
                SubjectFthird,
                SubjectFfinal
            })
            newStudentmark.save()
            return{
                statusCode:202,
                status:true,
                message:'Mark upload successful'
            }
        }
    })
}

const Civilthirdyearmark=(Email,SubjectAfirst,SubjectAsecond,SubjectAthird,SubjectAfinal,SubjectBfirst,SubjectBsecond,SubjectBthird,SubjectBfinal,SubjectCfirst,SubjectCsecond,SubjectCthird,SubjectCfinal,SubjectDfirst,SubjectDsecond,SubjectDthird,SubjectDfinal,SubjectEfirst,SubjectEsecond,SubjectEthird,SubjectEfinal,SubjectFfirst,SubjectFsecond,SubjectFthird,SubjectFfinal)=>{
    return mongodb.Civilthirdyearmark.findOne({Email})
    .then(result=>{
        if(result){
            result.SubjectAfirst=SubjectAfirst
            result.SubjectAsecond=SubjectAsecond
            result.SubjectAthird=SubjectAthird
            result.SubjectAfinal=SubjectAfinal
            result.SubjectBfirst=SubjectBfirst
            result.SubjectBsecond=SubjectBsecond
            result.SubjectBthird=SubjectBthird
            result.SubjectBfinal=SubjectBfinal
            result.SubjectCfirst=SubjectCfirst
            result.SubjectCsecond=SubjectCsecond
            result.SubjectCthird=SubjectCthird
            result.SubjectCfinal=SubjectCfinal
            result.SubjectDfirst=SubjectDfirst
            result.SubjectDsecond=SubjectDsecond
            result.SubjectDthird=SubjectDthird
            result.SubjectDfinal=SubjectDfinal
            result.SubjectEfirst=SubjectEfirst
            result.SubjectEsecond=SubjectEsecond
            result.SubjectEthird=SubjectEthird
            result.SubjectEfinal=SubjectEfinal
            result.SubjectFfirst=SubjectFfirst
            result.SubjectFsecond=SubjectFsecond
            result.SubjectFthird=SubjectFthird
            result.SubjectFfinal=SubjectFfinal
            result.save()
            return{
                statusCode:200,
                status:true,
                message:'Mark upload successful'
            }
        }else{
            const newStudentmark = new mongodb.Civilthirdyearmark({
                SubjectAfirst,
                SubjectAsecond,
                SubjectAthird,
                SubjectAfinal,
                SubjectBfirst,
                SubjectBsecond,
                SubjectBthird,
                SubjectBfinal,
                SubjectCfirst,
                SubjectCsecond,
                SubjectCthird,
                SubjectCfinal,
                SubjectDfirst,
                SubjectDsecond,
                SubjectDthird,
                SubjectDfinal,
                SubjectEfirst,
                SubjectEsecond,
                SubjectEthird,
                SubjectEfinal,
                SubjectFfirst,
                SubjectFsecond,
                SubjectFthird,
                SubjectFfinal
            })
            newStudentmark.save()
            return{
                statusCode:202,
                status:true,
                message:'Mark upload successful'
            }
        }
    })
}

const Civilfourthyearmark=(Email,SubjectAfirst,SubjectAsecond,SubjectAthird,SubjectAfinal,SubjectBfirst,SubjectBsecond,SubjectBthird,SubjectBfinal,SubjectCfirst,SubjectCsecond,SubjectCthird,SubjectCfinal,SubjectDfirst,SubjectDsecond,SubjectDthird,SubjectDfinal,SubjectEfirst,SubjectEsecond,SubjectEthird,SubjectEfinal,SubjectFfirst,SubjectFsecond,SubjectFthird,SubjectFfinal)=>{
    return mongodb.Civilfourthyearmark.findOne({Email})
    .then(result=>{
        if(result){
            result.SubjectAfirst=SubjectAfirst
            result.SubjectAsecond=SubjectAsecond
            result.SubjectAthird=SubjectAthird
            result.SubjectAfinal=SubjectAfinal
            result.SubjectBfirst=SubjectBfirst
            result.SubjectBsecond=SubjectBsecond
            result.SubjectBthird=SubjectBthird
            result.SubjectBfinal=SubjectBfinal
            result.SubjectCfirst=SubjectCfirst
            result.SubjectCsecond=SubjectCsecond
            result.SubjectCthird=SubjectCthird
            result.SubjectCfinal=SubjectCfinal
            result.SubjectDfirst=SubjectDfirst
            result.SubjectDsecond=SubjectDsecond
            result.SubjectDthird=SubjectDthird
            result.SubjectDfinal=SubjectDfinal
            result.SubjectEfirst=SubjectEfirst
            result.SubjectEsecond=SubjectEsecond
            result.SubjectEthird=SubjectEthird
            result.SubjectEfinal=SubjectEfinal
            result.SubjectFfirst=SubjectFfirst
            result.SubjectFsecond=SubjectFsecond
            result.SubjectFthird=SubjectFthird
            result.SubjectFfinal=SubjectFfinal
            result.save()
            return{
                statusCode:200,
                status:true,
                message:'Mark upload successful'
            }
        }else{
            const newStudentmark = new mongodb.Civilfourthyearmark({
                SubjectAfirst,
                SubjectAsecond,
                SubjectAthird,
                SubjectAfinal,
                SubjectBfirst,
                SubjectBsecond,
                SubjectBthird,
                SubjectBfinal,
                SubjectCfirst,
                SubjectCsecond,
                SubjectCthird,
                SubjectCfinal,
                SubjectDfirst,
                SubjectDsecond,
                SubjectDthird,
                SubjectDfinal,
                SubjectEfirst,
                SubjectEsecond,
                SubjectEthird,
                SubjectEfinal,
                SubjectFfirst,
                SubjectFsecond,
                SubjectFthird,
                SubjectFfinal
            })
            newStudentmark.save()
            return{
                statusCode:202,
                status:true,
                message:'Mark upload successful'
            }
        }
    })
}

const Csfirstyearmark=(Email,SubjectAfirst,SubjectAsecond,SubjectAthird,SubjectAfinal,SubjectBfirst,SubjectBsecond,SubjectBthird,SubjectBfinal,SubjectCfirst,SubjectCsecond,SubjectCthird,SubjectCfinal,SubjectDfirst,SubjectDsecond,SubjectDthird,SubjectDfinal,SubjectEfirst,SubjectEsecond,SubjectEthird,SubjectEfinal,SubjectFfirst,SubjectFsecond,SubjectFthird,SubjectFfinal)=>{
    return mongodb.Csfirstyearmark.findOne({Email})
    .then(result=>{
        if(result){
            result.SubjectAfirst=SubjectAfirst
            result.SubjectAsecond=SubjectAsecond
            result.SubjectAthird=SubjectAthird
            result.SubjectAfinal=SubjectAfinal
            result.SubjectBfirst=SubjectBfirst
            result.SubjectBsecond=SubjectBsecond
            result.SubjectBthird=SubjectBthird
            result.SubjectBfinal=SubjectBfinal
            result.SubjectCfirst=SubjectCfirst
            result.SubjectCsecond=SubjectCsecond
            result.SubjectCthird=SubjectCthird
            result.SubjectCfinal=SubjectCfinal
            result.SubjectDfirst=SubjectDfirst
            result.SubjectDsecond=SubjectDsecond
            result.SubjectDthird=SubjectDthird
            result.SubjectDfinal=SubjectDfinal
            result.SubjectEfirst=SubjectEfirst
            result.SubjectEsecond=SubjectEsecond
            result.SubjectEthird=SubjectEthird
            result.SubjectEfinal=SubjectEfinal
            result.SubjectFfirst=SubjectFfirst
            result.SubjectFsecond=SubjectFsecond
            result.SubjectFthird=SubjectFthird
            result.SubjectFfinal=SubjectFfinal
            result.save()
            return{
                statusCode:200,
                status:true,
                message:'Mark upload successful'
            }
        }else{
            const newStudentmark = new mongodb.Csfirstyearmark({
                SubjectAfirst,
                SubjectAsecond,
                SubjectAthird,
                SubjectAfinal,
                SubjectBfirst,
                SubjectBsecond,
                SubjectBthird,
                SubjectBfinal,
                SubjectCfirst,
                SubjectCsecond,
                SubjectCthird,
                SubjectCfinal,
                SubjectDfirst,
                SubjectDsecond,
                SubjectDthird,
                SubjectDfinal,
                SubjectEfirst,
                SubjectEsecond,
                SubjectEthird,
                SubjectEfinal,
                SubjectFfirst,
                SubjectFsecond,
                SubjectFthird,
                SubjectFfinal
            })
            newStudentmark.save()
            return{
                statusCode:202,
                status:true,
                message:'Mark upload successful'
            }
        }
    })
}

const Cssecondyearmark=(Email,SubjectAfirst,SubjectAsecond,SubjectAthird,SubjectAfinal,SubjectBfirst,SubjectBsecond,SubjectBthird,SubjectBfinal,SubjectCfirst,SubjectCsecond,SubjectCthird,SubjectCfinal,SubjectDfirst,SubjectDsecond,SubjectDthird,SubjectDfinal,SubjectEfirst,SubjectEsecond,SubjectEthird,SubjectEfinal,SubjectFfirst,SubjectFsecond,SubjectFthird,SubjectFfinal)=>{
    return mongodb.Cssecondyearmark.findOne({Email})
    .then(result=>{
        if(result){
            result.SubjectAfirst=SubjectAfirst
            result.SubjectAsecond=SubjectAsecond
            result.SubjectAthird=SubjectAthird
            result.SubjectAfinal=SubjectAfinal
            result.SubjectBfirst=SubjectBfirst
            result.SubjectBsecond=SubjectBsecond
            result.SubjectBthird=SubjectBthird
            result.SubjectBfinal=SubjectBfinal
            result.SubjectCfirst=SubjectCfirst
            result.SubjectCsecond=SubjectCsecond
            result.SubjectCthird=SubjectCthird
            result.SubjectCfinal=SubjectCfinal
            result.SubjectDfirst=SubjectDfirst
            result.SubjectDsecond=SubjectDsecond
            result.SubjectDthird=SubjectDthird
            result.SubjectDfinal=SubjectDfinal
            result.SubjectEfirst=SubjectEfirst
            result.SubjectEsecond=SubjectEsecond
            result.SubjectEthird=SubjectEthird
            result.SubjectEfinal=SubjectEfinal
            result.SubjectFfirst=SubjectFfirst
            result.SubjectFsecond=SubjectFsecond
            result.SubjectFthird=SubjectFthird
            result.SubjectFfinal=SubjectFfinal
            result.save()
            return{
                statusCode:200,
                status:true,
                message:'Mark upload successful'
            }
        }else{
            const newStudentmark = new mongodb.Cssecondyearmark({
                SubjectAfirst,
                SubjectAsecond,
                SubjectAthird,
                SubjectAfinal,
                SubjectBfirst,
                SubjectBsecond,
                SubjectBthird,
                SubjectBfinal,
                SubjectCfirst,
                SubjectCsecond,
                SubjectCthird,
                SubjectCfinal,
                SubjectDfirst,
                SubjectDsecond,
                SubjectDthird,
                SubjectDfinal,
                SubjectEfirst,
                SubjectEsecond,
                SubjectEthird,
                SubjectEfinal,
                SubjectFfirst,
                SubjectFsecond,
                SubjectFthird,
                SubjectFfinal
            })
            newStudentmark.save()
            return{
                statusCode:202,
                status:true,
                message:'Mark upload successful'
            }
        }
    })
}

const Csthirdyearmark=(Email,SubjectAfirst,SubjectAsecond,SubjectAthird,SubjectAfinal,SubjectBfirst,SubjectBsecond,SubjectBthird,SubjectBfinal,SubjectCfirst,SubjectCsecond,SubjectCthird,SubjectCfinal,SubjectDfirst,SubjectDsecond,SubjectDthird,SubjectDfinal,SubjectEfirst,SubjectEsecond,SubjectEthird,SubjectEfinal,SubjectFfirst,SubjectFsecond,SubjectFthird,SubjectFfinal)=>{
    return mongodb.Csthirdyearmark.findOne({Email})
    .then(result=>{
        if(result){
            result.SubjectAfirst=SubjectAfirst
            result.SubjectAsecond=SubjectAsecond
            result.SubjectAthird=SubjectAthird
            result.SubjectAfinal=SubjectAfinal
            result.SubjectBfirst=SubjectBfirst
            result.SubjectBsecond=SubjectBsecond
            result.SubjectBthird=SubjectBthird
            result.SubjectBfinal=SubjectBfinal
            result.SubjectCfirst=SubjectCfirst
            result.SubjectCsecond=SubjectCsecond
            result.SubjectCthird=SubjectCthird
            result.SubjectCfinal=SubjectCfinal
            result.SubjectDfirst=SubjectDfirst
            result.SubjectDsecond=SubjectDsecond
            result.SubjectDthird=SubjectDthird
            result.SubjectDfinal=SubjectDfinal
            result.SubjectEfirst=SubjectEfirst
            result.SubjectEsecond=SubjectEsecond
            result.SubjectEthird=SubjectEthird
            result.SubjectEfinal=SubjectEfinal
            result.SubjectFfirst=SubjectFfirst
            result.SubjectFsecond=SubjectFsecond
            result.SubjectFthird=SubjectFthird
            result.SubjectFfinal=SubjectFfinal
            result.save()
            return{
                statusCode:200,
                status:true,
                message:'Mark upload successful'
            }
        }else{
            const newStudentmark = new mongodb.Csthirdyearmark({
                SubjectAfirst,
                SubjectAsecond,
                SubjectAthird,
                SubjectAfinal,
                SubjectBfirst,
                SubjectBsecond,
                SubjectBthird,
                SubjectBfinal,
                SubjectCfirst,
                SubjectCsecond,
                SubjectCthird,
                SubjectCfinal,
                SubjectDfirst,
                SubjectDsecond,
                SubjectDthird,
                SubjectDfinal,
                SubjectEfirst,
                SubjectEsecond,
                SubjectEthird,
                SubjectEfinal,
                SubjectFfirst,
                SubjectFsecond,
                SubjectFthird,
                SubjectFfinal
            })
            newStudentmark.save()
            return{
                statusCode:202,
                status:true,
                message:'Mark upload successful'
            }
        }
    })
}

const Csfourthyearmark=(Email,SubjectAfirst,SubjectAsecond,SubjectAthird,SubjectAfinal,SubjectBfirst,SubjectBsecond,SubjectBthird,SubjectBfinal,SubjectCfirst,SubjectCsecond,SubjectCthird,SubjectCfinal,SubjectDfirst,SubjectDsecond,SubjectDthird,SubjectDfinal,SubjectEfirst,SubjectEsecond,SubjectEthird,SubjectEfinal,SubjectFfirst,SubjectFsecond,SubjectFthird,SubjectFfinal)=>{
    return mongodb.Csfourthyearmark.findOne({Email})
    .then(result=>{
        if(result){
            result.SubjectAfirst=SubjectAfirst
            result.SubjectAsecond=SubjectAsecond
            result.SubjectAthird=SubjectAthird
            result.SubjectAfinal=SubjectAfinal
            result.SubjectBfirst=SubjectBfirst
            result.SubjectBsecond=SubjectBsecond
            result.SubjectBthird=SubjectBthird
            result.SubjectBfinal=SubjectBfinal
            result.SubjectCfirst=SubjectCfirst
            result.SubjectCsecond=SubjectCsecond
            result.SubjectCthird=SubjectCthird
            result.SubjectCfinal=SubjectCfinal
            result.SubjectDfirst=SubjectDfirst
            result.SubjectDsecond=SubjectDsecond
            result.SubjectDthird=SubjectDthird
            result.SubjectDfinal=SubjectDfinal
            result.SubjectEfirst=SubjectEfirst
            result.SubjectEsecond=SubjectEsecond
            result.SubjectEthird=SubjectEthird
            result.SubjectEfinal=SubjectEfinal
            result.SubjectFfirst=SubjectFfirst
            result.SubjectFsecond=SubjectFsecond
            result.SubjectFthird=SubjectFthird
            result.SubjectFfinal=SubjectFfinal
            result.save()
            return{
                statusCode:200,
                status:true,
                message:'Mark upload successful'
            }
        }else{
            const newStudentmark = new mongodb.Csfourthyearmark({
                SubjectAfirst,
                SubjectAsecond,
                SubjectAthird,
                SubjectAfinal,
                SubjectBfirst,
                SubjectBsecond,
                SubjectBthird,
                SubjectBfinal,
                SubjectCfirst,
                SubjectCsecond,
                SubjectCthird,
                SubjectCfinal,
                SubjectDfirst,
                SubjectDsecond,
                SubjectDthird,
                SubjectDfinal,
                SubjectEfirst,
                SubjectEsecond,
                SubjectEthird,
                SubjectEfinal,
                SubjectFfirst,
                SubjectFsecond,
                SubjectFthird,
                SubjectFfinal
            })
            newStudentmark.save()
            return{
                statusCode:202,
                status:true,
                message:'Mark upload successful'
            }
        }
    })
}

const Mechfirstyearmark=(Email,SubjectAfirst,SubjectAsecond,SubjectAthird,SubjectAfinal,SubjectBfirst,SubjectBsecond,SubjectBthird,SubjectBfinal,SubjectCfirst,SubjectCsecond,SubjectCthird,SubjectCfinal,SubjectDfirst,SubjectDsecond,SubjectDthird,SubjectDfinal,SubjectEfirst,SubjectEsecond,SubjectEthird,SubjectEfinal,SubjectFfirst,SubjectFsecond,SubjectFthird,SubjectFfinal)=>{
    return mongodb.Mechfirstyearmark.findOne({Email})
    .then(result=>{
        if(result){
            result.SubjectAfirst=SubjectAfirst
            result.SubjectAsecond=SubjectAsecond
            result.SubjectAthird=SubjectAthird
            result.SubjectAfinal=SubjectAfinal
            result.SubjectBfirst=SubjectBfirst
            result.SubjectBsecond=SubjectBsecond
            result.SubjectBthird=SubjectBthird
            result.SubjectBfinal=SubjectBfinal
            result.SubjectCfirst=SubjectCfirst
            result.SubjectCsecond=SubjectCsecond
            result.SubjectCthird=SubjectCthird
            result.SubjectCfinal=SubjectCfinal
            result.SubjectDfirst=SubjectDfirst
            result.SubjectDsecond=SubjectDsecond
            result.SubjectDthird=SubjectDthird
            result.SubjectDfinal=SubjectDfinal
            result.SubjectEfirst=SubjectEfirst
            result.SubjectEsecond=SubjectEsecond
            result.SubjectEthird=SubjectEthird
            result.SubjectEfinal=SubjectEfinal
            result.SubjectFfirst=SubjectFfirst
            result.SubjectFsecond=SubjectFsecond
            result.SubjectFthird=SubjectFthird
            result.SubjectFfinal=SubjectFfinal
            result.save()
            return{
                statusCode:200,
                status:true,
                message:'Mark upload successful'
            }
        }else{
            const newStudentmark = new mongodb.Mechfirstyearmark({
                SubjectAfirst,
                SubjectAsecond,
                SubjectAthird,
                SubjectAfinal,
                SubjectBfirst,
                SubjectBsecond,
                SubjectBthird,
                SubjectBfinal,
                SubjectCfirst,
                SubjectCsecond,
                SubjectCthird,
                SubjectCfinal,
                SubjectDfirst,
                SubjectDsecond,
                SubjectDthird,
                SubjectDfinal,
                SubjectEfirst,
                SubjectEsecond,
                SubjectEthird,
                SubjectEfinal,
                SubjectFfirst,
                SubjectFsecond,
                SubjectFthird,
                SubjectFfinal
            })
            newStudentmark.save()
            return{
                statusCode:202,
                status:true,
                message:'Mark upload successful'
            }
        }
    })
}
const Mechsecondyearmark=(Email,SubjectAfirst,SubjectAsecond,SubjectAthird,SubjectAfinal,SubjectBfirst,SubjectBsecond,SubjectBthird,SubjectBfinal,SubjectCfirst,SubjectCsecond,SubjectCthird,SubjectCfinal,SubjectDfirst,SubjectDsecond,SubjectDthird,SubjectDfinal,SubjectEfirst,SubjectEsecond,SubjectEthird,SubjectEfinal,SubjectFfirst,SubjectFsecond,SubjectFthird,SubjectFfinal)=>{
    return mongodb.Mechsecondyearmark.findOne({Email})
    .then(result=>{
        if(result){
            result.SubjectAfirst=SubjectAfirst
            result.SubjectAsecond=SubjectAsecond
            result.SubjectAthird=SubjectAthird
            result.SubjectAfinal=SubjectAfinal
            result.SubjectBfirst=SubjectBfirst
            result.SubjectBsecond=SubjectBsecond
            result.SubjectBthird=SubjectBthird
            result.SubjectBfinal=SubjectBfinal
            result.SubjectCfirst=SubjectCfirst
            result.SubjectCsecond=SubjectCsecond
            result.SubjectCthird=SubjectCthird
            result.SubjectCfinal=SubjectCfinal
            result.SubjectDfirst=SubjectDfirst
            result.SubjectDsecond=SubjectDsecond
            result.SubjectDthird=SubjectDthird
            result.SubjectDfinal=SubjectDfinal
            result.SubjectEfirst=SubjectEfirst
            result.SubjectEsecond=SubjectEsecond
            result.SubjectEthird=SubjectEthird
            result.SubjectEfinal=SubjectEfinal
            result.SubjectFfirst=SubjectFfirst
            result.SubjectFsecond=SubjectFsecond
            result.SubjectFthird=SubjectFthird
            result.SubjectFfinal=SubjectFfinal
            result.save()
            return{
                statusCode:200,
                status:true,
                message:'Mark upload successful'
            }
        }else{
            const newStudentmark = new mongodb.Mechsecondyearmark({
                SubjectAfirst,
                SubjectAsecond,
                SubjectAthird,
                SubjectAfinal,
                SubjectBfirst,
                SubjectBsecond,
                SubjectBthird,
                SubjectBfinal,
                SubjectCfirst,
                SubjectCsecond,
                SubjectCthird,
                SubjectCfinal,
                SubjectDfirst,
                SubjectDsecond,
                SubjectDthird,
                SubjectDfinal,
                SubjectEfirst,
                SubjectEsecond,
                SubjectEthird,
                SubjectEfinal,
                SubjectFfirst,
                SubjectFsecond,
                SubjectFthird,
                SubjectFfinal
            })
            newStudentmark.save()
            return{
                statusCode:202,
                status:true,
                message:'Mark upload successful'
            }
        }
    })
}
const Mechthirdyearmark=(Email,SubjectAfirst,SubjectAsecond,SubjectAthird,SubjectAfinal,SubjectBfirst,SubjectBsecond,SubjectBthird,SubjectBfinal,SubjectCfirst,SubjectCsecond,SubjectCthird,SubjectCfinal,SubjectDfirst,SubjectDsecond,SubjectDthird,SubjectDfinal,SubjectEfirst,SubjectEsecond,SubjectEthird,SubjectEfinal,SubjectFfirst,SubjectFsecond,SubjectFthird,SubjectFfinal)=>{
    return mongodb.Mechthirdyearmark.findOne({Email})
    .then(result=>{
        if(result){
            result.SubjectAfirst=SubjectAfirst
            result.SubjectAsecond=SubjectAsecond
            result.SubjectAthird=SubjectAthird
            result.SubjectAfinal=SubjectAfinal
            result.SubjectBfirst=SubjectBfirst
            result.SubjectBsecond=SubjectBsecond
            result.SubjectBthird=SubjectBthird
            result.SubjectBfinal=SubjectBfinal
            result.SubjectCfirst=SubjectCfirst
            result.SubjectCsecond=SubjectCsecond
            result.SubjectCthird=SubjectCthird
            result.SubjectCfinal=SubjectCfinal
            result.SubjectDfirst=SubjectDfirst
            result.SubjectDsecond=SubjectDsecond
            result.SubjectDthird=SubjectDthird
            result.SubjectDfinal=SubjectDfinal
            result.SubjectEfirst=SubjectEfirst
            result.SubjectEsecond=SubjectEsecond
            result.SubjectEthird=SubjectEthird
            result.SubjectEfinal=SubjectEfinal
            result.SubjectFfirst=SubjectFfirst
            result.SubjectFsecond=SubjectFsecond
            result.SubjectFthird=SubjectFthird
            result.SubjectFfinal=SubjectFfinal
            result.save()
            return{
                statusCode:200,
                status:true,
                message:'Mark upload successful'
            }
        }else{
            const newStudentmark = new mongodb.Mechthirdyearmark({
                SubjectAfirst,
                SubjectAsecond,
                SubjectAthird,
                SubjectAfinal,
                SubjectBfirst,
                SubjectBsecond,
                SubjectBthird,
                SubjectBfinal,
                SubjectCfirst,
                SubjectCsecond,
                SubjectCthird,
                SubjectCfinal,
                SubjectDfirst,
                SubjectDsecond,
                SubjectDthird,
                SubjectDfinal,
                SubjectEfirst,
                SubjectEsecond,
                SubjectEthird,
                SubjectEfinal,
                SubjectFfirst,
                SubjectFsecond,
                SubjectFthird,
                SubjectFfinal
            })
            newStudentmark.save()
            return{
                statusCode:202,
                status:true,
                message:'Mark upload successful'
            }
        }
    })
}
const Mechfourthyearmark=(Email,SubjectAfirst,SubjectAsecond,SubjectAthird,SubjectAfinal,SubjectBfirst,SubjectBsecond,SubjectBthird,SubjectBfinal,SubjectCfirst,SubjectCsecond,SubjectCthird,SubjectCfinal,SubjectDfirst,SubjectDsecond,SubjectDthird,SubjectDfinal,SubjectEfirst,SubjectEsecond,SubjectEthird,SubjectEfinal,SubjectFfirst,SubjectFsecond,SubjectFthird,SubjectFfinal)=>{
    return mongodb.Mechfourthyearmark.findOne({Email})
    .then(result=>{
        if(result){
            result.SubjectAfirst=SubjectAfirst
            result.SubjectAsecond=SubjectAsecond
            result.SubjectAthird=SubjectAthird
            result.SubjectAfinal=SubjectAfinal
            result.SubjectBfirst=SubjectBfirst
            result.SubjectBsecond=SubjectBsecond
            result.SubjectBthird=SubjectBthird
            result.SubjectBfinal=SubjectBfinal
            result.SubjectCfirst=SubjectCfirst
            result.SubjectCsecond=SubjectCsecond
            result.SubjectCthird=SubjectCthird
            result.SubjectCfinal=SubjectCfinal
            result.SubjectDfirst=SubjectDfirst
            result.SubjectDsecond=SubjectDsecond
            result.SubjectDthird=SubjectDthird
            result.SubjectDfinal=SubjectDfinal
            result.SubjectEfirst=SubjectEfirst
            result.SubjectEsecond=SubjectEsecond
            result.SubjectEthird=SubjectEthird
            result.SubjectEfinal=SubjectEfinal
            result.SubjectFfirst=SubjectFfirst
            result.SubjectFsecond=SubjectFsecond
            result.SubjectFthird=SubjectFthird
            result.SubjectFfinal=SubjectFfinal
            result.save()
            return{
                statusCode:200,
                status:true,
                message:'Mark upload successful'
            }
        }else{
            const newStudentmark = new mongodb.Mechfourthyearmark({
                SubjectAfirst,
                SubjectAsecond,
                SubjectAthird,
                SubjectAfinal,
                SubjectBfirst,
                SubjectBsecond,
                SubjectBthird,
                SubjectBfinal,
                SubjectCfirst,
                SubjectCsecond,
                SubjectCthird,
                SubjectCfinal,
                SubjectDfirst,
                SubjectDsecond,
                SubjectDthird,
                SubjectDfinal,
                SubjectEfirst,
                SubjectEsecond,
                SubjectEthird,
                SubjectEfinal,
                SubjectFfirst,
                SubjectFsecond,
                SubjectFthird,
                SubjectFfinal
            })
            newStudentmark.save()
            return{
                statusCode:202,
                status:true,
                message:'Mark upload successful'
            }
        }
    })
}

module.exports={Civilfirstyearmark,Civilsecondyearmark,Civilthirdyearmark,Civilfourthyearmark,Csfirstyearmark,Cssecondyearmark,Csthirdyearmark,Csfourthyearmark,Mechfirstyearmark,Mechsecondyearmark,Mechthirdyearmark,Mechfourthyearmark}