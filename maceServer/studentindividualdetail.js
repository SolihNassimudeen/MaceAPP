const mongodb=require('./mongoDB')

const csfirstyearindividual=(id)=>{
    return mongodb.Csfirstyear.findOne({"_id":id})
    .then(result=>{
        if(result){
            return{
                statusCode:200,
                status:true,
                Name:result.Name,
                Registration:result.Registration,
                Email:result.Email,
                DOB:result.DOB,
                contact:result.ContactNo
            }
        }
    })
}
const cssecondyearindividual=(id)=>{
    return mongodb.Cssecondyear.findOne({"_id":id})
    .then(result=>{
        if(result){
            return{
                statusCode:200,
                status:true,
                Name:result.Name,
                Registration:result.Registration,
                Email:result.Email,
                DOB:result.DOB,
                contact:result.ContactNo
            }
        }
    })
}
const csthirdyearindividual=(id)=>{
    return mongodb.Csthirdyear.findOne({"_id":id})
    .then(result=>{
        if(result){
            return{
                statusCode:200,
                status:true,
                Name:result.Name,
                Registration:result.Registration,
                Email:result.Email,
                DOB:result.DOB,
                contact:result.ContactNo
            }
        }
    })
}
const csfourthyearindividual=(id)=>{
    return mongodb.Csfourthyear.findOne({"_id":id})
    .then(result=>{
        if(result){
            return{
                statusCode:200,
                status:true,
                Name:result.Name,
                Registration:result.Registration,
                Email:result.Email,
                DOB:result.DOB,
                contact:result.ContactNo
            }
        }
    })
}

const civilfirstyearindividual=(id)=>{
    return mongodb.Civilfirstyear.findOne({"_id":id})
    .then(result=>{
        if(result){
            return{
                statusCode:200,
                status:true,
                Name:result.Name,
                Registration:result.Registration,
                Email:result.Email,
                DOB:result.DOB,
                contact:result.ContactNo
            }
        }
    })
}
const civilsecondyearindividual=(id)=>{
    return mongodb.Civilsecondyear.findOne({"_id":id})
    .then(result=>{
        if(result){
            return{
                statusCode:200,
                status:true,
                Name:result.Name,
                Registration:result.Registration,
                Email:result.Email,
                DOB:result.DOB,
                contact:result.ContactNo
            }
        }
    })
}
const civilthirdyearindividual=(id)=>{
    return mongodb.Civilthirdyear.findOne({"_id":id})
    .then(result=>{
        if(result){
            return{
                statusCode:200,
                status:true,
                Name:result.Name,
                Registration:result.Registration,
                Email:result.Email,
                DOB:result.DOB,
                contact:result.ContactNo
            }
        }
    })
}
const civilfourthyearindividual=(id)=>{
    return mongodb.Civilfourthyear.findOne({"_id":id})
    .then(result=>{
        if(result){
            return{
                statusCode:200,
                status:true,
                Name:result.Name,
                Registration:result.Registration,
                Email:result.Email,
                DOB:result.DOB,
                contact:result.ContactNo
            }
        }
    })
}

const mechfirstyearindividual=(id)=>{
    return mongodb.Mechfirstyear.findOne({"_id":id})
    .then(result=>{
        if(result){
            return{
                statusCode:200,
                status:true,
                Name:result.Name,
                Registration:result.Registration,
                Email:result.Email,
                DOB:result.DOB,
                contact:result.ContactNo
            }
        }
    })
}
const mechsecondyearindividual=(id)=>{
    return mongodb.Mechsecondyear.findOne({"_id":id})
    .then(result=>{
        if(result){
            return{
                statusCode:200,
                status:true,
                Name:result.Name,
                Registration:result.Registration,
                Email:result.Email,
                DOB:result.DOB,
                contact:result.ContactNo
            }
        }
    })
}
const mechthirdyearindividual=(id)=>{
    return mongodb.Mechthirdyear.findOne({"_id":id})
    .then(result=>{
        if(result){
            return{
                statusCode:200,
                status:true,
                Name:result.Name,
                Registration:result.Registration,
                Email:result.Email,
                DOB:result.DOB,
                contact:result.ContactNo
            }
        }
    })
}
const mechfourthyearindividual=(id)=>{
    return mongodb.Mechfourthyear.findOne({"_id":id})
    .then(result=>{
        if(result){
            return{
                statusCode:200,
                status:true,
                Name:result.Name,
                Registration:result.Registration,
                Email:result.Email,
                DOB:result.DOB,
                contact:result.ContactNo
            }
        }
    })
}

module.exports ={ csfirstyearindividual,cssecondyearindividual,csthirdyearindividual,csfourthyearindividual,civilfirstyearindividual,civilsecondyearindividual,civilthirdyearindividual,civilfourthyearindividual,mechfirstyearindividual,mechsecondyearindividual,mechthirdyearindividual,mechfourthyearindividual}