const express = require('express')
const cors=require('cors')
const login=require('./login')
const app = express()
const notification=require('./Adminoperation/notificationupdates')
const Count=require('./Adminoperation/StudentandFacultyCount')
const AddandDelete=require('./Adminoperation/AddandDelete')
const changepassword=require('./Adminoperation/changepassword')
const studenttableadmin=require('./Adminoperation/studenttable')
const studentindividual=require('./studentindividualdetail')
const facstudpswd=require('./FacstudChangePassword')
const mark=require('./mark')
const registration=require('./studentRegistration')

app.use(cors({
    origin:'http://localhost:4200'
}))

app.use(express.json())

app.post('/adminlogin',(req,res)=>{
    login.adminlogin(req.body.email,req.body.password)
    .then(result=>{
        if(result){
            res.status(result.statusCode).json(result)
        }
    })
})

app.post('/facultylogincs',(req,res)=>{
    login.csfaculty(req.body.Email,req.body.Password)
    .then(result=>{
        if(result){
            res.status(result.statusCode).json(result)
        }
    })
})

app.post('/facultyloginmech',(req,res)=>{
    login.mechfaculty(req.body.Email,req.body.Password)
    .then(result=>{
        if(result){
            res.status(result.statusCode).json(result)
        }
    })
})

app.post('/facultylogincivil',(req,res)=>{
    login.civilfaculty(req.body.Email,req.body.Password)
    .then(result=>{
        if(result){
            res.status(result.statusCode).json(result)
        }
    })
})


app.post('/notificationUpdate',(req,res)=>{
    notification.notificationUpdate(req.body.notification1,req.body.notification2,req.body.notification3)
    .then(result=>{
        if(result){
            res.status(result.statusCode).json(result)
        }
    })
})

app.get('/notificationplaceholder',(req,res)=>{
    notification.notificationplaceholder()
    .then(result=>{
        if(result){
            res.status(result.statusCode).json(result)
        }
    })
})


app.get('/CsstudentCount',(req,res)=>{
    Count.CsstudentCount()
    .then(result=>{
        if(result){
            res.status(result.statusCode).json(result)
        }
    })
})

app.get('/CivilstudentCount',(req,res)=>{
    Count.CivilstudentCount()
    .then(result=>{
        if(result){
            res.status(result.statusCode).json(result)
        }
    })
})

app.get('/MechstudentCount',(req,res)=>{
    Count.MechstudentCount()
    .then(result=>{
        if(result){
            res.status(result.statusCode).json(result)
        }
    })
})

app.get('/FacultyCount',(req,res)=>{
    Count.Facultycount()
    .then(result=>{
        if(result){
            res.status(result.statusCode).json(result)
        }
    })
})


app.post('/adminAdd',(req,res)=>{
    AddandDelete.addAdmin(req.body.Name,req.body.Email,req.body.DOB,req.body.Password)
    .then(result=>{
        if(result){
            res.status(result.statusCode).json(result)
        }
    })
})

app.delete('/deleteadmin/:Email',(req,res)=>{
    AddandDelete.deleteadmin(req.params.Email)
    .then(result=>{
        if(result){
            res.status(result.statusCode).json(result)
        }
    })
})

app.post('/addCsfaculty',(req,res)=>{
    AddandDelete.addCsfaculty(req.body.Name,req.body.Email,req.body.Department,req.body.sub1,req.body.sub2,req.body.sub3,req.body.sub4,req.body.Password)
    .then(result=>{
        if(result){
            res.status(result.statusCode).json(result)
        }
    })
})

app.post('/addMechfaculty',(req,res)=>{
    AddandDelete.addMechfaculty(req.body.Name,req.body.Email,req.body.Department,req.body.sub1,req.body.sub2,req.body.sub3,req.body.sub4,req.body.Password)
    .then(result=>{
        if(result){
            res.status(result.statusCode).json(result)
        }
    })
})

app.post('/addCivilfaculty',(req,res)=>{
    AddandDelete.addCivilfaculty(req.body.Name,req.body.Email,req.body.Department,req.body.sub1,req.body.sub2,req.body.sub3,req.body.sub4,req.body.Password)
    .then(result=>{
        if(result){
            res.status(result.statusCode).json(result)
        }
    })
})

app.delete('/deleteCsfaculty/:Email',(req,res)=>{
    AddandDelete.deleteCsfaculty(req.params.Email)
    .then(result=>{
        if(result){
            res.status(result.statusCode).json(result)
        }
    })
})

app.delete('/deleteMechfaculty/:Email',(req,res)=>{
    AddandDelete.deleteMechfaculty(req.params.Email)
    .then(result=>{
        if(result){
            res.status(result.statusCode).json(result)
        }
    })
})

app.delete('/deleteCivilfaculty/:Email',(req,res)=>{
    AddandDelete.deleteCivilfaculty(req.params.Email)
    .then(result=>{
        if(result){
            res.status(result.statusCode).json(result)
        }
    })
})

app.post('/addCsFirstyear',(req,res)=>{
    AddandDelete.addCsFirstyear(req.body.Email,req.body.Password)
    .then(result=>{
        if(result){
            res.status(result.statusCode).json(result)
        }
    })
})

app.post('/addCsSecondyear',(req,res)=>{
    AddandDelete.addCsSecondyear(req.body.Email,req.body.Password)
    .then(result=>{
        if(result){
            res.status(result.statusCode).json(result)
        }
    })
})

app.post('/addCsThirdyear',(req,res)=>{
    AddandDelete.addCsThirdyear(req.body.Email,req.body.Password)
    .then(result=>{
        if(result){
            res.status(result.statusCode).json(result)
        }
    })
})

app.post('/addCsFourthyear',(req,res)=>{
    AddandDelete.addCsFourthyear(req.body.Email,req.body.Password)
    .then(result=>{
        if(result){
            res.status(result.statusCode).json(result)
        }
    })
})


app.post('/addCivilFirstyear',(req,res)=>{
    AddandDelete.addCivilFirstyear(req.body.Email,req.body.Password)
    .then(result=>{
        if(result){
            res.status(result.statusCode).json(result)
        }
    })
})

app.post('/addCivilSecondyear',(req,res)=>{
    AddandDelete.addCivilSecondyear(req.body.Email,req.body.Password)
    .then(result=>{
        if(result){
            res.status(result.statusCode).json(result)
        }
    })
})

app.post('/addCivilThirdyear',(req,res)=>{
    AddandDelete.addCivilThirdyear(req.body.Email,req.body.Password)
    .then(result=>{
        if(result){
            res.status(result.statusCode).json(result)
        }
    })
})

app.post('/addCivilFourthyear',(req,res)=>{
    AddandDelete.addCivilFourthyear(req.body.Email,req.body.Password)
    .then(result=>{
        if(result){
            res.status(result.statusCode).json(result)
        }
    })
})


app.post('/addMechFirstyear',(req,res)=>{
    AddandDelete.addMechFirstyear(req.body.Email,req.body.Password)
    .then(result=>{
        if(result){
            res.status(result.statusCode).json(result)
        }
    })
})

app.post('/addMechSecondyear',(req,res)=>{
    AddandDelete.addMechSecondyear(req.body.Email,req.body.Password)
    .then(result=>{
        if(result){
            res.status(result.statusCode).json(result)
        }
    })
})

app.post('/addMechThirdyear',(req,res)=>{
    AddandDelete.addMechThirdyear(req.body.Email,req.body.Password)
    .then(result=>{
        if(result){
            res.status(result.statusCode).json(result)
        }
    })
})

app.post('/addMechFourthyear',(req,res)=>{
    AddandDelete.addMechFourthyear(req.body.Email,req.body.Password)
    .then(result=>{
        if(result){
            res.status(result.statusCode).json(result)
        }
    })
})


app.delete('/deleteCsfirstyear/:Email',(req,res)=>{
    AddandDelete.deleteCsfirstyear(req.params.Email)
    .then(result=>{
        if(result){
            res.status(result.statusCode).json(result)
        }
    })
})

app.delete('/deleteCssecondyear/:Email',(req,res)=>{
    AddandDelete.deleteCssecondyear(req.params.Email)
    .then(result=>{
        if(result){
            res.status(result.statusCode).json(result)
        }
    })
})

app.delete('/deleteCsThirdyear/:Email',(req,res)=>{
    AddandDelete.deleteCsThirdyear(req.params.Email)
    .then(result=>{
        if(result){
            res.status(result.statusCode).json(result)
        }
    })
})

app.delete('/deleteCsfourthyear/:Email',(req,res)=>{
    AddandDelete.deleteCsfourthyear(req.params.Email)
    .then(result=>{
        if(result){
            res.status(result.statusCode).json(result)
        }
    })
})

app.delete('/deleteCivilfirstyear/:Email',(req,res)=>{
    AddandDelete.deleteCivilfirstyear(req.params.Email)
    .then(result=>{
        if(result){
            res.status(result.statusCode).json(result)
        }
    })
})

app.delete('/deleteCivilsecondyear/:Email',(req,res)=>{
    AddandDelete.deleteCivilsecondyear(req.params.Email)
    .then(result=>{
        if(result){
            res.status(result.statusCode).json(result)
        }
    })
})

app.delete('/deleteCivilThirdyear/:Email',(req,res)=>{
    AddandDelete.deleteCivilThirdyear(req.params.Email)
    .then(result=>{
        if(result){
            res.status(result.statusCode).json(result)
        }
    })
})

app.delete('/deleteCivilfourthyear/:Email',(req,res)=>{
    AddandDelete.deleteCivilfourthyear(req.params.Email)
    .then(result=>{
        if(result){
            res.status(result.statusCode).json(result)
        }
    })
})

app.delete('/deleteMechfirstyear/:Email',(req,res)=>{
    AddandDelete.deleteMechfirstyear(req.params.Email)
    .then(result=>{
        if(result){
            res.status(result.statusCode).json(result)
        }
    })
})

app.delete('/deleteMechsecondyear/:Email',(req,res)=>{
    AddandDelete.deleteMechsecondyear(req.params.Email)
    .then(result=>{
        if(result){
            res.status(result.statusCode).json(result)
        }
    })
})

app.delete('/deleteMechThirdyear/:Email',(req,res)=>{
    AddandDelete.deleteMechThirdyear(req.params.Email)
    .then(result=>{
        if(result){
            res.status(result.statusCode).json(result)
        }
    })
})

app.delete('/deleteMechfourthyear/:Email',(req,res)=>{
    AddandDelete.deleteMechfourthyear(req.params.Email)
    .then(result=>{
        if(result){
            res.status(result.statusCode).json(result)
        }
    })
})

app.post('/changepassword',(req,res)=>{
    changepassword.changepassword(req.body.Email,req.body.Password,req.body.newPassword)
    .then(result=>{
        if(result){
            res.status(result.statusCode).json(result)
        }
    })
})


app.get('/csfirstyeartable',(req,res)=>{
    studenttableadmin.csfirstyeartable()
    .then(result=>{
        if(result){
            res.status(result.statusCode).json(result)
        }
    })
})

app.get('/cssecondyeartable',(req,res)=>{
    studenttableadmin.cssecondyeartable()
    .then(result=>{
        if(result){
            res.status(result.statusCode).json(result)
        }
    })
})

app.get('/csthirdyeartable',(req,res)=>{
    studenttableadmin.csthirdyeartable()
    .then(result=>{
        if(result){
            res.status(result.statusCode).json(result)
        }
    })
})

app.get('/csfourthyeartable',(req,res)=>{
    studenttableadmin.csfourthyeartable()
    .then(result=>{
        if(result){
            res.status(result.statusCode).json(result)
        }
    })
})


app.get('/civilfirstyeartable',(req,res)=>{
    studenttableadmin.civilfirstyeartable()
    .then(result=>{
        if(result){
            res.status(result.statusCode).json(result)
        }
    })
})

app.get('/civilsecondyeartable',(req,res)=>{
    studenttableadmin.civilsecondyeartable()
    .then(result=>{
        if(result){
            res.status(result.statusCode).json(result)
        }
    })
})

app.get('/civilthirdyeartable',(req,res)=>{
    studenttableadmin.civilthirdyeartable()
    .then(result=>{
        if(result){
            res.status(result.statusCode).json(result)
        }
    })
})

app.get('/civilfourthyeartable',(req,res)=>{
    studenttableadmin.civilfourthyeartable()
    .then(result=>{
        if(result){
            res.status(result.statusCode).json(result)
        }
    })
})


app.get('/mechfirstyeartable',(req,res)=>{
    studenttableadmin.mechfirstyeartable()
    .then(result=>{
        if(result){
            res.status(result.statusCode).json(result)
        }
    })
})

app.get('/mechsecondyeartable',(req,res)=>{
    studenttableadmin.mechsecondyeartable()
    .then(result=>{
        if(result){
            res.status(result.statusCode).json(result)
        }
    })
})

app.get('/mechthirdyeartable',(req,res)=>{
    studenttableadmin.mechthirdyeartable()
    .then(result=>{
        if(result){
            res.status(result.statusCode).json(result)
        }
    })
})

app.get('/mechfourthyeartable',(req,res)=>{
    studenttableadmin.mechfourthyeartable()
    .then(result=>{
        if(result){
            res.status(result.statusCode).json(result)
        }
    })
})



app.post('/csfirstyearindividual',(req,res)=>{
    studentindividual.csfirstyearindividual(req.body.id)
    .then(result=>{
        if(result){
            res.status(result.statusCode).json(result)
        }
    })
})

app.post('/cssecondyearindividual',(req,res)=>{
    studentindividual.cssecondyearindividual(req.body.id)
    .then(result=>{
        if(result){
            res.status(result.statusCode).json(result)
        }
    })
})

app.post('/csthirdyearindividual',(req,res)=>{
    studentindividual.csthirdyearindividual(req.body.id)
    .then(result=>{
        if(result){
            res.status(result.statusCode).json(result)
        }
    })
})


app.post('/csfourthyearindividual',(req,res)=>{
    studentindividual.csfourthyearindividual(req.body.id)
    .then(result=>{
        if(result){
            res.status(result.statusCode).json(result)
        }
    })
})

app.post('/civilfirstyearindividual',(req,res)=>{
    studentindividual.civilfirstyearindividual(req.body.id)
    .then(result=>{
        if(result){
            res.status(result.statusCode).json(result)
        }
    })
})

app.post('/civilsecondyearindividual',(req,res)=>{
    studentindividual.civilsecondyearindividual(req.body.id)
    .then(result=>{
        if(result){
            res.status(result.statusCode).json(result)
        }
    })
})

app.post('/civilthirdyearindividual',(req,res)=>{
    studentindividual.civilthirdyearindividual(req.body.id)
    .then(result=>{
        if(result){
            res.status(result.statusCode).json(result)
        }
    })
})


app.post('/civilfourthyearindividual',(req,res)=>{
    studentindividual.civilfourthyearindividual(req.body.id)
    .then(result=>{
        if(result){
            res.status(result.statusCode).json(result)
        }
    })
})

app.post('/mechfirstyearindividual',(req,res)=>{
    studentindividual.mechfirstyearindividual(req.body.id)
    .then(result=>{
        if(result){
            res.status(result.statusCode).json(result)
        }
    })
})

app.post('/mechsecondyearindividual',(req,res)=>{
    studentindividual.mechsecondyearindividual(req.body.id)
    .then(result=>{
        if(result){
            res.status(result.statusCode).json(result)
        }
    })
})

app.post('/mechthirdyearindividual',(req,res)=>{
    studentindividual.mechthirdyearindividual(req.body.id)
    .then(result=>{
        if(result){
            res.status(result.statusCode).json(result)
        }
    })
})

app.post('/mechfourthyearindividual',(req,res)=>{
    studentindividual.mechfourthyearindividual(req.body.id)
    .then(result=>{
        if(result){
            res.status(result.statusCode).json(result)
        }
    })
})


app.post('/csfacultychangePassword',(req,res)=>{
    facstudpswd.csfacultychangePassword(req.body.Email,req.body.Password,req.body.newPassword)
    .then(result=>{
        if(result){
            res.status(result.statusCode).json(result)
        }
    })
})

app.post('/mechfacultychangePassword',(req,res)=>{
    facstudpswd.mechfacultychangePassword(req.body.Email,req.body.Password,req.body.newPassword)
    .then(result=>{
        if(result){
            res.status(result.statusCode).json(result)
        }
    })
})

app.post('/civilfacultychangePassword',(req,res)=>{
    facstudpswd.civilfacultychangePassword(req.body.Email,req.body.Password,req.body.newPassword)
    .then(result=>{
        if(result){
            res.status(result.statusCode).json(result)
        }
    })
})


app.post('/civilfirstyearsubA',(req,res)=>{
    mark.civilfirstyearsubA(req.body.Email,req.body.subAfirst,req.body.subAsecond,req.body.subAthird)
    .then(result=>{
        if(result){
            res.status(result.statusCode).json(result)
        }
    })
})

app.post('/civilfirstyearsubB',(req,res)=>{
    mark.civilfirstyearsubB(req.body.Email,req.body.subBfirst,req.body.subBsecond,req.body.subBthird)
    .then(result=>{
        if(result){
            res.status(result.statusCode).json(result)
        }
    })
})

app.post('/civilfirstyearsubC',(req,res)=>{
    mark.civilfirstyearsubC(req.body.Email,req.body.subCfirst,req.body.subCsecond,req.body.subCthird)
    .then(result=>{
        if(result){
            res.status(result.statusCode).json(result)
        }
    })
})

app.post('/civilfirstyearsubD',(req,res)=>{
    mark.civilfirstyearsubD(req.body.Email,req.body.subDfirst,req.body.subDsecond,req.body.subDthird)
    .then(result=>{
        if(result){
            res.status(result.statusCode).json(result)
        }
    })
})

app.post('/civilfirstyearsubE',(req,res)=>{
    mark.civilfirstyearsubE(req.body.Email,req.body.subEfirst,req.body.subEsecond,req.body.subEthird)
    .then(result=>{
        if(result){
            res.status(result.statusCode).json(result)
        }
    })
})

app.post('/civilfirstyearsubF',(req,res)=>{
    mark.civilfirstyearsubF(req.body.Email,req.body.subFfirst,req.body.subFsecond,req.body.subFthird)
    .then(result=>{
        if(result){
            res.status(result.statusCode).json(result)
        }
    })
})

app.post('/csfirstyearsubA',(req,res)=>{
    mark.csfirstyearsubA(req.body.Email,req.body.subAfirst,req.body.subAsecond,req.body.subAthird)
    .then(result=>{
        if(result){
            res.status(result.statusCode).json(result)
        }
    })
})

app.post('/csfirstyearsubB',(req,res)=>{
    mark.csfirstyearsubB(req.body.Email,req.body.subBfirst,req.body.subBsecond,req.body.subBthird)
    .then(result=>{
        if(result){
            res.status(result.statusCode).json(result)
        }
    })
})

app.post('/csfirstyearsubC',(req,res)=>{
    mark.csfirstyearsubC(req.body.Email,req.body.subCfirst,req.body.subCsecond,req.body.subCthird)
    .then(result=>{
        if(result){
            res.status(result.statusCode).json(result)
        }
    })
})

app.post('/csfirstyearsubD',(req,res)=>{
    mark.csfirstyearsubD(req.body.Email,req.body.subDfirst,req.body.subDsecond,req.body.subDthird)
    .then(result=>{
        if(result){
            res.status(result.statusCode).json(result)
        }
    })
})

app.post('/csfirstyearsubE',(req,res)=>{
    mark.csfirstyearsubE(req.body.Email,req.body.subEfirst,req.body.subEsecond,req.body.subEthird)
    .then(result=>{
        if(result){
            res.status(result.statusCode).json(result)
        }
    })
})

app.post('/csfirstyearsubF',(req,res)=>{
    mark.csfirstyearsubF(req.body.Email,req.body.subFfirst,req.body.subFsecond,req.body.subFthird)
    .then(result=>{
        if(result){
            res.status(result.statusCode).json(result)
        }
    })
})


app.post('/mechfirstyearsubA',(req,res)=>{
    mark.mechfirstyearsubA(req.body.Email,req.body.subAfirst,req.body.subAsecond,req.body.subAthird)
    .then(result=>{
        if(result){
            res.status(result.statusCode).json(result)
        }
    })
})

app.post('/mechfirstyearsubB',(req,res)=>{
    mark.mechfirstyearsubB(req.body.Email,req.body.subBfirst,req.body.subBsecond,req.body.subBthird)
    .then(result=>{
        if(result){
            res.status(result.statusCode).json(result)
        }
    })
})

app.post('/mechfirstyearsubC',(req,res)=>{
    mark.mechfirstyearsubC(req.body.Email,req.body.subCfirst,req.body.subCsecond,req.body.subCthird)
    .then(result=>{
        if(result){
            res.status(result.statusCode).json(result)
        }
    })
})

app.post('/mechfirstyearsubD',(req,res)=>{
    mark.mechfirstyearsubD(req.body.Email,req.body.subDfirst,req.body.subDsecond,req.body.subDthird)
    .then(result=>{
        if(result){
            res.status(result.statusCode).json(result)
        }
    })
})

app.post('/mechfirstyearsubE',(req,res)=>{
    mark.mechfirstyearsubE(req.body.Email,req.body.subEfirst,req.body.subEsecond,req.body.subEthird)
    .then(result=>{
        if(result){
            res.status(result.statusCode).json(result)
        }
    })
})

app.post('/mechfirstyearsubF',(req,res)=>{
    mark.mechfirstyearsubF(req.body.Email,req.body.subFfirst,req.body.subFsecond,req.body.subFthird)
    .then(result=>{
        if(result){
            res.status(result.statusCode).json(result)
        }
    })
})


app.post('/civilsecondyearsubA',(req,res)=>{
    mark.civilsecondyearsubA(req.body.Email,req.body.subAfirst,req.body.subAsecond,req.body.subAthird)
    .then(result=>{
        if(result){
            res.status(result.statusCode).json(result)
        }
    })
})

app.post('/civilsecondyearsubB',(req,res)=>{
    mark.civilsecondyearsubB(req.body.Email,req.body.subBfirst,req.body.subBsecond,req.body.subBthird)
    .then(result=>{
        if(result){
            res.status(result.statusCode).json(result)
        }
    })
})

app.post('/civilsecondyearsubC',(req,res)=>{
    mark.civilsecondyearsubC(req.body.Email,req.body.subCfirst,req.body.subCsecond,req.body.subCthird)
    .then(result=>{
        if(result){
            res.status(result.statusCode).json(result)
        }
    })
})

app.post('/civilsecondyearsubD',(req,res)=>{
    mark.civilsecondyearsubD(req.body.Email,req.body.subDfirst,req.body.subDsecond,req.body.subDthird)
    .then(result=>{
        if(result){
            res.status(result.statusCode).json(result)
        }
    })
})

app.post('/civilsecondyearsubE',(req,res)=>{
    mark.civilsecondyearsubE(req.body.Email,req.body.subEfirst,req.body.subEsecond,req.body.subEthird)
    .then(result=>{
        if(result){
            res.status(result.statusCode).json(result)
        }
    })
})

app.post('/civilsecondyearsubF',(req,res)=>{
    mark.civilsecondyearsubF(req.body.Email,req.body.subFfirst,req.body.subFsecond,req.body.subFthird)
    .then(result=>{
        if(result){
            res.status(result.statusCode).json(result)
        }
    })
})

app.post('/cssecondyearsubA',(req,res)=>{
    mark.cssecondyearsubA(req.body.Email,req.body.subAfirst,req.body.subAsecond,req.body.subAthird)
    .then(result=>{
        if(result){
            res.status(result.statusCode).json(result)
        }
    })
})

app.post('/csfirstyearsubB',(req,res)=>{
    mark.cssecondyearsubB(req.body.Email,req.body.subBfirst,req.body.subBsecond,req.body.subBthird)
    .then(result=>{
        if(result){
            res.status(result.statusCode).json(result)
        }
    })
})

app.post('/cssecondyearsubC',(req,res)=>{
    mark.cssecondyearsubC(req.body.Email,req.body.subCfirst,req.body.subCsecond,req.body.subCthird)
    .then(result=>{
        if(result){
            res.status(result.statusCode).json(result)
        }
    })
})

app.post('/cssecondyearsubD',(req,res)=>{
    mark.cssecondyearsubD(req.body.Email,req.body.subDfirst,req.body.subDsecond,req.body.subDthird)
    .then(result=>{
        if(result){
            res.status(result.statusCode).json(result)
        }
    })
})

app.post('/cssecondyearsubE',(req,res)=>{
    mark.cssecondyearsubE(req.body.Email,req.body.subEfirst,req.body.subEsecond,req.body.subEthird)
    .then(result=>{
        if(result){
            res.status(result.statusCode).json(result)
        }
    })
})

app.post('/cssecondyearsubF',(req,res)=>{
    mark.cssecondyearsubF(req.body.Email,req.body.subFfirst,req.body.subFsecond,req.body.subFthird)
    .then(result=>{
        if(result){
            res.status(result.statusCode).json(result)
        }
    })
})


app.post('/mechsecondyearsubA',(req,res)=>{
    mark.mechsecondyearsubA(req.body.Email,req.body.subAfirst,req.body.subAsecond,req.body.subAthird)
    .then(result=>{
        if(result){
            res.status(result.statusCode).json(result)
        }
    })
})

app.post('/mechsecondyearsubB',(req,res)=>{
    mark.mechsecondyearsubB(req.body.Email,req.body.subBfirst,req.body.subBsecond,req.body.subBthird)
    .then(result=>{
        if(result){
            res.status(result.statusCode).json(result)
        }
    })
})

app.post('/mechsecondyearsubC',(req,res)=>{
    mark.mechsecondyearsubC(req.body.Email,req.body.subCfirst,req.body.subCsecond,req.body.subCthird)
    .then(result=>{
        if(result){
            res.status(result.statusCode).json(result)
        }
    })
})

app.post('/mechsecondyearsubD',(req,res)=>{
    mark.mechsecondyearsubD(req.body.Email,req.body.subDfirst,req.body.subDsecond,req.body.subDthird)
    .then(result=>{
        if(result){
            res.status(result.statusCode).json(result)
        }
    })
})

app.post('/mechsecondyearsubE',(req,res)=>{
    mark.mechsecondyearsubE(req.body.Email,req.body.subEfirst,req.body.subEsecond,req.body.subEthird)
    .then(result=>{
        if(result){
            res.status(result.statusCode).json(result)
        }
    })
})

app.post('/mechsecondyearsubF',(req,res)=>{
    mark.mechsecondyearsubF(req.body.Email,req.body.subFfirst,req.body.subFsecond,req.body.subFthird)
    .then(result=>{
        if(result){
            res.status(result.statusCode).json(result)
        }
    })
})


app.post('/civilthirdyearsubA',(req,res)=>{
    mark.civilthirdyearsubA(req.body.Email,req.body.subAfirst,req.body.subAsecond,req.body.subAthird)
    .then(result=>{
        if(result){
            res.status(result.statusCode).json(result)
        }
    })
})

app.post('/civilthirdyearsubB',(req,res)=>{
    mark.civilthirdyearsubB(req.body.Email,req.body.subBfirst,req.body.subBsecond,req.body.subBthird)
    .then(result=>{
        if(result){
            res.status(result.statusCode).json(result)
        }
    })
})

app.post('/civilthirdyearsubC',(req,res)=>{
    mark.civilthirdyearsubC(req.body.Email,req.body.subCfirst,req.body.subCsecond,req.body.subCthird)
    .then(result=>{
        if(result){
            res.status(result.statusCode).json(result)
        }
    })
})

app.post('/civilthirdyearsubD',(req,res)=>{
    mark.civilthirdyearsubD(req.body.Email,req.body.subDfirst,req.body.subDsecond,req.body.subDthird)
    .then(result=>{
        if(result){
            res.status(result.statusCode).json(result)
        }
    })
})

app.post('/civilthirdyearsubE',(req,res)=>{
    mark.civilthirdyearsubE(req.body.Email,req.body.subEfirst,req.body.subEsecond,req.body.subEthird)
    .then(result=>{
        if(result){
            res.status(result.statusCode).json(result)
        }
    })
})

app.post('/civilthirdyearsubF',(req,res)=>{
    mark.civilthirdyearsubF(req.body.Email,req.body.subFfirst,req.body.subFsecond,req.body.subFthird)
    .then(result=>{
        if(result){
            res.status(result.statusCode).json(result)
        }
    })
})

app.post('/csthirdyearsubA',(req,res)=>{
    mark.csthirdyearsubA(req.body.Email,req.body.subAfirst,req.body.subAsecond,req.body.subAthird)
    .then(result=>{
        if(result){
            res.status(result.statusCode).json(result)
        }
    })
})

app.post('/csthirdyearsubB',(req,res)=>{
    mark.csthirdyearsubB(req.body.Email,req.body.subBfirst,req.body.subBsecond,req.body.subBthird)
    .then(result=>{
        if(result){
            res.status(result.statusCode).json(result)
        }
    })
})

app.post('/csthirdyearsubC',(req,res)=>{
    mark.csthirdyearsubC(req.body.Email,req.body.subCfirst,req.body.subCsecond,req.body.subCthird)
    .then(result=>{
        if(result){
            res.status(result.statusCode).json(result)
        }
    })
})

app.post('/csthirdyearsubD',(req,res)=>{
    mark.csthirdyearsubD(req.body.Email,req.body.subDfirst,req.body.subDsecond,req.body.subDthird)
    .then(result=>{
        if(result){
            res.status(result.statusCode).json(result)
        }
    })
})

app.post('/csthirdyearsubE',(req,res)=>{
    mark.csthirdyearsubE(req.body.Email,req.body.subEfirst,req.body.subEsecond,req.body.subEthird)
    .then(result=>{
        if(result){
            res.status(result.statusCode).json(result)
        }
    })
})

app.post('/csthirdyearsubF',(req,res)=>{
    mark.csthirdyearsubF(req.body.Email,req.body.subFfirst,req.body.subFsecond,req.body.subFthird)
    .then(result=>{
        if(result){
            res.status(result.statusCode).json(result)
        }
    })
})


app.post('/mechthirdyearsubA',(req,res)=>{
    mark.mechthirdyearsubA(req.body.Email,req.body.subAfirst,req.body.subAsecond,req.body.subAthird)
    .then(result=>{
        if(result){
            res.status(result.statusCode).json(result)
        }
    })
})

app.post('/mechthirdyearsubB',(req,res)=>{
    mark.mechthirdyearsubB(req.body.Email,req.body.subBfirst,req.body.subBsecond,req.body.subBthird)
    .then(result=>{
        if(result){
            res.status(result.statusCode).json(result)
        }
    })
})

app.post('/mechthirdyearsubC',(req,res)=>{
    mark.mechthirdyearsubC(req.body.Email,req.body.subCfirst,req.body.subCsecond,req.body.subCthird)
    .then(result=>{
        if(result){
            res.status(result.statusCode).json(result)
        }
    })
})

app.post('/mechthirdyearsubD',(req,res)=>{
    mark.mechthirdyearsubD(req.body.Email,req.body.subDfirst,req.body.subDsecond,req.body.subDthird)
    .then(result=>{
        if(result){
            res.status(result.statusCode).json(result)
        }
    })
})

app.post('/mechthirdyearsubE',(req,res)=>{
    mark.mechthirdyearsubE(req.body.Email,req.body.subEfirst,req.body.subEsecond,req.body.subEthird)
    .then(result=>{
        if(result){
            res.status(result.statusCode).json(result)
        }
    })
})

app.post('/mechthirdyearsubF',(req,res)=>{
    mark.mechthirdyearsubF(req.body.Email,req.body.subFfirst,req.body.subFsecond,req.body.subFthird)
    .then(result=>{
        if(result){
            res.status(result.statusCode).json(result)
        }
    })
})


app.post('/civilfourthyearsubA',(req,res)=>{
    mark.civilfourthyearsubA(req.body.Email,req.body.subAfirst,req.body.subAsecond,req.body.subAthird)
    .then(result=>{
        if(result){
            res.status(result.statusCode).json(result)
        }
    })
})

app.post('/civilfourthyearsubB',(req,res)=>{
    mark.civilfourthyearsubB(req.body.Email,req.body.subBfirst,req.body.subBsecond,req.body.subBthird)
    .then(result=>{
        if(result){
            res.status(result.statusCode).json(result)
        }
    })
})

app.post('/civilfourthyearsubC',(req,res)=>{
    mark.civilfourthyearsubC(req.body.Email,req.body.subCfirst,req.body.subCsecond,req.body.subCthird)
    .then(result=>{
        if(result){
            res.status(result.statusCode).json(result)
        }
    })
})

app.post('/civilfourthyearsubD',(req,res)=>{
    mark.civilfourthyearsubD(req.body.Email,req.body.subDfirst,req.body.subDsecond,req.body.subDthird)
    .then(result=>{
        if(result){
            res.status(result.statusCode).json(result)
        }
    })
})

app.post('/civilfourthyearsubE',(req,res)=>{
    mark.civilfourthyearsubE(req.body.Email,req.body.subEfirst,req.body.subEsecond,req.body.subEthird)
    .then(result=>{
        if(result){
            res.status(result.statusCode).json(result)
        }
    })
})

app.post('/civilfourthyearsubF',(req,res)=>{
    mark.civilfourthyearsubF(req.body.Email,req.body.subFfirst,req.body.subFsecond,req.body.subFthird)
    .then(result=>{
        if(result){
            res.status(result.statusCode).json(result)
        }
    })
})

app.post('/csfourthyearsubA',(req,res)=>{
    mark.csfourthyearsubA(req.body.Email,req.body.subAfirst,req.body.subAsecond,req.body.subAthird)
    .then(result=>{
        if(result){
            res.status(result.statusCode).json(result)
        }
    })
})

app.post('/csfourthyearsubB',(req,res)=>{
    mark.csfourthyearsubB(req.body.Email,req.body.subBfirst,req.body.subBsecond,req.body.subBthird)
    .then(result=>{
        if(result){
            res.status(result.statusCode).json(result)
        }
    })
})

app.post('/csfourthyearsubC',(req,res)=>{
    mark.csfourthyearsubC(req.body.Email,req.body.subCfirst,req.body.subCsecond,req.body.subCthird)
    .then(result=>{
        if(result){
            res.status(result.statusCode).json(result)
        }
    })
})

app.post('/csfourthyearsubD',(req,res)=>{
    mark.csfourthyearsubD(req.body.Email,req.body.subDfirst,req.body.subDsecond,req.body.subDthird)
    .then(result=>{
        if(result){
            res.status(result.statusCode).json(result)
        }
    })
})

app.post('/csfourthyearsubE',(req,res)=>{
    mark.csfourthyearsubE(req.body.Email,req.body.subEfirst,req.body.subEsecond,req.body.subEthird)
    .then(result=>{
        if(result){
            res.status(result.statusCode).json(result)
        }
    })
})

app.post('/csfourthyearsubF',(req,res)=>{
    mark.csfourthyearsubF(req.body.Email,req.body.subFfirst,req.body.subFsecond,req.body.subFthird)
    .then(result=>{
        if(result){
            res.status(result.statusCode).json(result)
        }
    })
})


app.post('/mechfourthyearsubA',(req,res)=>{
    mark.mechfourthyearsubA(req.body.Email,req.body.subAfirst,req.body.subAsecond,req.body.subAthird)
    .then(result=>{
        if(result){
            res.status(result.statusCode).json(result)
        }
    })
})

app.post('/mechfourthyearsubB',(req,res)=>{
    mark.mechfourthyearsubB(req.body.Email,req.body.subBfirst,req.body.subBsecond,req.body.subBthird)
    .then(result=>{
        if(result){
            res.status(result.statusCode).json(result)
        }
    })
})

app.post('/mechfourthyearsubC',(req,res)=>{
    mark.mechfourthyearsubC(req.body.Email,req.body.subCfirst,req.body.subCsecond,req.body.subCthird)
    .then(result=>{
        if(result){
            res.status(result.statusCode).json(result)
        }
    })
})

app.post('/mechfourthyearsubD',(req,res)=>{
    mark.mechfourthyearsubD(req.body.Email,req.body.subDfirst,req.body.subDsecond,req.body.subDthird)
    .then(result=>{
        if(result){
            res.status(result.statusCode).json(result)
        }
    })
})

app.post('/mechfourthyearsubE',(req,res)=>{
    mark.mechfourthyearsubE(req.body.Email,req.body.subEfirst,req.body.subEsecond,req.body.subEthird)
    .then(result=>{
        if(result){
            res.status(result.statusCode).json(result)
        }
    })
})

app.post('/mechfourthyearsubF',(req,res)=>{
    mark.mechfourthyearsubF(req.body.Email,req.body.subFfirst,req.body.subFsecond,req.body.subFthird)
    .then(result=>{
        if(result){
            res.status(result.statusCode).json(result)
        }
    })
})

app.post('/csfirstyearlogin',(req,res)=>{
    login.csfirstyearlogin(req.body.Email,req.body.Password)
    .then(result=>{
        if(result){
            res.status(result.statusCode).json(result)
        }
    })
})

app.post('/cssecondyearlogin',(req,res)=>{
    login.cssecondyearlogin(req.body.Email,req.body.Password)
    .then(result=>{
        if(result){
            res.status(result.statusCode).json(result)
        }
    })
})

app.post('/csthirdyearlogin',(req,res)=>{
    login.csthirdyearlogin(req.body.Email,req.body.Password)
    .then(result=>{
        if(result){
            res.status(result.statusCode).json(result)
        }
    })
})

app.post('/csfourthyearlogin',(req,res)=>{
    login.csfourthyearlogin(req.body.Email,req.body.Password)
    .then(result=>{
        if(result){
            res.status(result.statusCode).json(result)
        }
    })
})

app.post('/civilfirstyearlogin',(req,res)=>{
    login.civilfirstyearlogin(req.body.Email,req.body.Password)
    .then(result=>{
        if(result){
            res.status(result.statusCode).json(result)
        }
    })
})

app.post('/civilsecondyearlogin',(req,res)=>{
    login.civilsecondyearlogin(req.body.Email,req.body.Password)
    .then(result=>{
        if(result){
            res.status(result.statusCode).json(result)
        }
    })
})

app.post('/civilthirdyearlogin',(req,res)=>{
    login.civilthirdyearlogin(req.body.Email,req.body.Password)
    .then(result=>{
        if(result){
            res.status(result.statusCode).json(result)
        }
    })
})

app.post('/civilfourthyearlogin',(req,res)=>{
    login.civilfourthyearlogin(req.body.Email,req.body.Password)
    .then(result=>{
        if(result){
            res.status(result.statusCode).json(result)
        }
    })
})

app.post('/mechfirstyearlogin',(req,res)=>{
    login.mechfirstyearlogin(req.body.Email,req.body.Password)
    .then(result=>{
        if(result){
            res.status(result.statusCode).json(result)
        }
    })
})

app.post('/mechsecondyearlogin',(req,res)=>{
    login.mechsecondyearlogin(req.body.Email,req.body.Password)
    .then(result=>{
        if(result){
            res.status(result.statusCode).json(result)
        }
    })
})

app.post('/mechthirdyearlogin',(req,res)=>{
    login.mechthirdyearlogin(req.body.Email,req.body.Password)
    .then(result=>{
        if(result){
            res.status(result.statusCode).json(result)
        }
    })
})

app.post('/mechfourthyearlogin',(req,res)=>{
    login.mechfourthyearlogin(req.body.Email,req.body.Password)
    .then(result=>{
        if(result){
            res.status(result.statusCode).json(result)
        }
    })
})


app.post('/csfirstyearregistration',(req,res)=>{
    registration.csfirstyearregistration(req.body.Email,req.body.Name,req.body.DOB,req.body.ContactNo,req.body.Password)
    .then(result=>{
        if(result){
            res.status(result.statusCode).json(result)
        }
    })
})

app.post('/cssecondyearregistration',(req,res)=>{
    registration.cssecondyearregistration(req.body.Email,req.body.Name,req.body.DOB,req.body.ContactNo,req.body.Password)
    .then(result=>{
        if(result){
            res.status(result.statusCode).json(result)
        }
    })
})

app.post('/csthirdyearregistration',(req,res)=>{
    registration.csthirdyearregistration(req.body.Email,req.body.Name,req.body.DOB,req.body.ContactNo,req.body.Password)
    .then(result=>{
        if(result){
            res.status(result.statusCode).json(result)
        }
    })
})

app.post('/csfourthyearregistration',(req,res)=>{
    registration.csfourthyearregistration(req.body.Email,req.body.Name,req.body.DOB,req.body.ContactNo,req.body.Password)
    .then(result=>{
        if(result){
            res.status(result.statusCode).json(result)
        }
    })
})

app.post('/civilfirstyearregistration',(req,res)=>{
    registration.civilfirstyearregistration(req.body.Email,req.body.Name,req.body.DOB,req.body.ContactNo,req.body.Password)
    .then(result=>{
        if(result){
            res.status(result.statusCode).json(result)
        }
    })
})

app.post('/civilsecondyearregistration',(req,res)=>{
    registration.civilsecondyearregistration(req.body.Email,req.body.Name,req.body.DOB,req.body.ContactNo,req.body.Password)
    .then(result=>{
        if(result){
            res.status(result.statusCode).json(result)
        }
    })
})

app.post('/civilthirdyearregistration',(req,res)=>{
    registration.civilthirdyearregistration(req.body.Email,req.body.Name,req.body.DOB,req.body.ContactNo,req.body.Password)
    .then(result=>{
        if(result){
            res.status(result.statusCode).json(result)
        }
    })
})

app.post('/civilfourthyearregistration',(req,res)=>{
    registration.civilfourthyearregistration(req.body.Email,req.body.Name,req.body.DOB,req.body.ContactNo,req.body.Password)
    .then(result=>{
        if(result){
            res.status(result.statusCode).json(result)
        }
    })
})

app.post('/mechfirstyearregistration',(req,res)=>{
    registration.mechfirstyearregistration(req.body.Email,req.body.Name,req.body.DOB,req.body.ContactNo,req.body.Password)
    .then(result=>{
        if(result){
            res.status(result.statusCode).json(result)
        }
    })
})

app.post('/mechsecondyearregistration',(req,res)=>{
    registration.mechsecondyearregistration(req.body.Email,req.body.Name,req.body.DOB,req.body.ContactNo,req.body.Password)
    .then(result=>{
        if(result){
            res.status(result.statusCode).json(result)
        }
    })
})

app.post('/mechthirdyearregistration',(req,res)=>{
    registration.mechthirdyearregistration(req.body.Email,req.body.Name,req.body.DOB,req.body.ContactNo,req.body.Password)
    .then(result=>{
        if(result){
            res.status(result.statusCode).json(result)
        }
    })
})

app.post('/mechfourthyearregistration',(req,res)=>{
    registration.mechfourthyearregistration(req.body.Email,req.body.Name,req.body.DOB,req.body.ContactNo,req.body.Password)
    .then(result=>{
        if(result){
            res.status(result.statusCode).json(result)
        }
    })
})


app.post('/csfirstyear',(req,res)=>{
    studentindividual.csfirstyear(req.body.Email)
    .then(result=>{
        if(result){
            res.status(result.statusCode).json(result)
        }
    })
})

app.post('/cssecondyear',(req,res)=>{
    studentindividual.cssecondyear(req.body.Email)
    .then(result=>{
        if(result){
            res.status(result.statusCode).json(result)
        }
    })
})

app.post('/csthirdyear',(req,res)=>{
    studentindividual.csthirdyear(req.body.Email)
    .then(result=>{
        if(result){
            res.status(result.statusCode).json(result)
        }
    })
})

app.post('/csfourthyear',(req,res)=>{
    studentindividual.csfourthyear(req.body.Email)
    .then(result=>{
        if(result){
            res.status(result.statusCode).json(result)
        }
    })
})

app.post('/civilfirstyear',(req,res)=>{
    studentindividual.civilfirstyear(req.body.Email)
    .then(result=>{
        if(result){
            res.status(result.statusCode).json(result)
        }
    })
})

app.post('/civilsecondyear',(req,res)=>{
    studentindividual.civilsecondyear(req.body.Email)
    .then(result=>{
        if(result){
            res.status(result.statusCode).json(result)
        }
    })
})

app.post('/civilthirdyear',(req,res)=>{
    studentindividual.civilthirdyear(req.body.Email)
    .then(result=>{
        if(result){
            res.status(result.statusCode).json(result)
        }
    })
})

app.post('/civilfourthyear',(req,res)=>{
    studentindividual.civilfourthyear(req.body.Email)
    .then(result=>{
        if(result){
            res.status(result.statusCode).json(result)
        }
    })
})

app.post('/mechfirstyear',(req,res)=>{
    studentindividual.mechfirstyear(req.body.Email)
    .then(result=>{
        if(result){
            res.status(result.statusCode).json(result)
        }
    })
})

app.post('/mechsecondyear',(req,res)=>{
    studentindividual.mechsecondyear(req.body.Email)
    .then(result=>{
        if(result){
            res.status(result.statusCode).json(result)
        }
    })
})

app.post('/mechthirdyear',(req,res)=>{
    studentindividual.mechthirdyear(req.body.Email)
    .then(result=>{
        if(result){
            res.status(result.statusCode).json(result)
        }
    })
})

app.post('/mechfourthyear',(req,res)=>{
    studentindividual.mechfourthyear(req.body.Email)
    .then(result=>{
        if(result){
            res.status(result.statusCode).json(result)
        }
    })
})

app.post('/csfirstyearchangepassword',(req,res)=>{
    facstudpswd.csfirstyearchangepassword(req.body.Email,req.body.Password)
    .then(result=>{
        if(result){
            res.status(result.statusCode).json(result)
        }
    })
})

app.post('/cssecondyearchangepassword',(req,res)=>{
    facstudpswd.cssecondyearchangepassword(req.body.Email,req.body.Password)
    .then(result=>{
        if(result){
            res.status(result.statusCode).json(result)
        }
    })
})

app.post('/csthirdyearchangepassword',(req,res)=>{
    facstudpswd.csthirdyearchangepassword(req.body.Email,req.body.Password)
    .then(result=>{
        if(result){
            res.status(result.statusCode).json(result)
        }
    })
})

app.post('/csfourthyearchangepassword',(req,res)=>{
    facstudpswd.csfourthyearchangepassword(req.body.Email,req.body.Password)
    .then(result=>{
        if(result){
            res.status(result.statusCode).json(result)
        }
    })
})

app.post('/civilfirstyearchangepassword',(req,res)=>{
    facstudpswd.civilfirstyearchangepassword(req.body.Email,req.body.Password)
    .then(result=>{
        if(result){
            res.status(result.statusCode).json(result)
        }
    })
})

app.post('/civilsecondyearchangepassword',(req,res)=>{
    facstudpswd.civilsecondyearchangepassword(req.body.Email,req.body.Password)
    .then(result=>{
        if(result){
            res.status(result.statusCode).json(result)
        }
    })
})

app.post('/civilthirdyearchangepassword',(req,res)=>{
    facstudpswd.civilthirdyearchangepassword(req.body.Email,req.body.Password)
    .then(result=>{
        if(result){
            res.status(result.statusCode).json(result)
        }
    })
})

app.post('/civilfourthyearchangepassword',(req,res)=>{
    facstudpswd.civilfourthyearchangepassword(req.body.Email,req.body.Password)
    .then(result=>{
        if(result){
            res.status(result.statusCode).json(result)
        }
    })
})

app.post('/mechfirstyearchangepassword',(req,res)=>{
    facstudpswd.mechfirstyearchangepassword(req.body.Email,req.body.Password)
    .then(result=>{
        if(result){
            res.status(result.statusCode).json(result)
        }
    })
})

app.post('/mechsecondyearchangepassword',(req,res)=>{
    facstudpswd.mechsecondyearchangepassword(req.body.Email,req.body.Password)
    .then(result=>{
        if(result){
            res.status(result.statusCode).json(result)
        }
    })
})

app.post('/mechthirdyearchangepassword',(req,res)=>{
    facstudpswd.mechthirdyearchangepassword(req.body.Email,req.body.Password)
    .then(result=>{
        if(result){
            res.status(result.statusCode).json(result)
        }
    })
})

app.post('/mechfourthyearchangepassword',(req,res)=>{
    facstudpswd.mechfourthyearchangepassword(req.body.Email,req.body.Password)
    .then(result=>{
        if(result){
            res.status(result.statusCode).json(result)
        }
    })
})


app.post('/csfirstmarkdisplay',(req,res)=>{
    mark.csfirstmarkdisplay(req.body.Email)
    .then(result=>{
        if(result){
            res.status(result.statusCode).json(result)
        }
    })
})

app.post('/cssecondmarkdisplay',(req,res)=>{
    mark.cssecondmarkdisplay(req.body.Email)
    .then(result=>{
        if(result){
            res.status(result.statusCode).json(result)
        }
    })
})

app.post('/csthirdmarkdisplay',(req,res)=>{
    mark.csthirdmarkdisplay(req.body.Email)
    .then(result=>{
        if(result){
            res.status(result.statusCode).json(result)
        }
    })
})

app.post('/csfourthmarkdisplay',(req,res)=>{
    mark.csfourthmarkdisplay(req.body.Email)
    .then(result=>{
        if(result){
            res.status(result.statusCode).json(result)
        }
    })
})

app.post('/civilfirstmarkdisplay',(req,res)=>{
    mark.civilfirstmarkdisplay(req.body.Email)
    .then(result=>{
        if(result){
            res.status(result.statusCode).json(result)
        }
    })
})

app.post('/civilsecondmarkdisplay',(req,res)=>{
    mark.civilsecondmarkdisplay(req.body.Email)
    .then(result=>{
        if(result){
            res.status(result.statusCode).json(result)
        }
    })
})

app.post('/civilthirdmarkdisplay',(req,res)=>{
    mark.civilthirdmarkdisplay(req.body.Email)
    .then(result=>{
        if(result){
            res.status(result.statusCode).json(result)
        }
    })
})

app.post('/civilfourthmarkdisplay',(req,res)=>{
    mark.civilfourthmarkdisplay(req.body.Email)
    .then(result=>{
        if(result){
            res.status(result.statusCode).json(result)
        }
    })
})

app.post('/mechfirstmarkdisplay',(req,res)=>{
    mark.mechfirstmarkdisplay(req.body.Email)
    .then(result=>{
        if(result){
            res.status(result.statusCode).json(result)
        }
    })
})

app.post('/mechsecondmarkdisplay',(req,res)=>{
    mark.mechsecondmarkdisplay(req.body.Email)
    .then(result=>{
        if(result){
            res.status(result.statusCode).json(result)
        }
    })
})

app.post('/mechthirdmarkdisplay',(req,res)=>{
    mark.mechthirdmarkdisplay(req.body.Email)
    .then(result=>{
        if(result){
            res.status(result.statusCode).json(result)
        }
    })
})

app.post('/mechfourthmarkdisplay',(req,res)=>{
    mark.mechfourthmarkdisplay(req.body.Email)
    .then(result=>{
        if(result){
            res.status(result.statusCode).json(result)
        }
    })
})

app.listen(3002, () => { console.log(`Example app listening on port 3002!`) })