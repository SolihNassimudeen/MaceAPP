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
    AddandDelete.deleteCsfirstyear(req.params.Email)
    .then(result=>{
        if(result){
            res.status(result.statusCode).json(result)
        }
    })
})

app.delete('/deleteCsThirdyear/:Email',(req,res)=>{
    AddandDelete.deleteCsfirstyear(req.params.Email)
    .then(result=>{
        if(result){
            res.status(result.statusCode).json(result)
        }
    })
})

app.delete('/deleteCsfourthyear/:Email',(req,res)=>{
    AddandDelete.deleteCsfirstyear(req.params.Email)
    .then(result=>{
        if(result){
            res.status(result.statusCode).json(result)
        }
    })
})

app.delete('/deleteCivilfirstyear/:Email',(req,res)=>{
    AddandDelete.deleteCsfirstyear(req.params.Email)
    .then(result=>{
        if(result){
            res.status(result.statusCode).json(result)
        }
    })
})

app.delete('/deleteCivilsecondyear/:Email',(req,res)=>{
    AddandDelete.deleteCsfirstyear(req.params.Email)
    .then(result=>{
        if(result){
            res.status(result.statusCode).json(result)
        }
    })
})

app.delete('/deleteCivilThirdyear/:Email',(req,res)=>{
    AddandDelete.deleteCsfirstyear(req.params.Email)
    .then(result=>{
        if(result){
            res.status(result.statusCode).json(result)
        }
    })
})

app.delete('/deleteCivilfourthyear/:Email',(req,res)=>{
    AddandDelete.deleteCsfirstyear(req.params.Email)
    .then(result=>{
        if(result){
            res.status(result.statusCode).json(result)
        }
    })
})

app.delete('/deleteMechfirstyear/:Email',(req,res)=>{
    AddandDelete.deleteCsfirstyear(req.params.Email)
    .then(result=>{
        if(result){
            res.status(result.statusCode).json(result)
        }
    })
})

app.delete('/deleteMechsecondyear/:Email',(req,res)=>{
    AddandDelete.deleteCsfirstyear(req.params.Email)
    .then(result=>{
        if(result){
            res.status(result.statusCode).json(result)
        }
    })
})

app.delete('/deleteMechThirdyear/:Email',(req,res)=>{
    AddandDelete.deleteCsfirstyear(req.params.Email)
    .then(result=>{
        if(result){
            res.status(result.statusCode).json(result)
        }
    })
})

app.delete('/deleteMechfourthyear/:Email',(req,res)=>{
    AddandDelete.deleteCsfirstyear(req.params.Email)
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


app.post('/civilfirstyearmark',(req,res)=>{
    mark.Civilfirstyearmark(req.body.Email,req.body.subAfirst,req.body.subAsecond,req.body.subAthird,req.body.subAfinal,req.body.subBfirst,req.body.subBsecond,req.body.subBthird,req.body.subBfinal,req.body.subCfirst,req.body.subCsecond,req.body.subCthird,req.body.subCfinal,req.body.subDfirst,req.body.subDsecond,req.body.subDthird,req.body.subDfinal,req.body.subEfirst,req.body.subEsecond,req.body.subEthird,req.body.subEfinal,req.body.subFfirst,req.body.subFsecond,req.body.subFthird,req.body.subFfinal)
    .then(result=>{
        if(result){
            res.status(result.statusCode).json(result)
        }
    })
})

app.post('/civilsecondyearmark',(req,res)=>{
    mark.Civilsecondyearmark(req.body.Email,req.body.subAfirst,req.body.subAsecond,req.body.subAthird,req.body.subAfinal,req.body.subBfirst,req.body.subBsecond,req.body.subBthird,req.body.subBfinal,req.body.subCfirst,req.body.subCsecond,req.body.subCthird,req.body.subCfinal,req.body.subDfirst,req.body.subDsecond,req.body.subDthird,req.body.subDfinal,req.body.subEfirst,req.body.subEsecond,req.body.subEthird,req.body.subEfinal,req.body.subFfirst,req.body.subFsecond,req.body.subFthird,req.body.subFfinal)
    .then(result=>{
        if(result){
            res.status(result.statusCode).json(result)
        }
    })
})

app.post('/civilthirdyearmark',(req,res)=>{
    mark.Civilthirdyearmark(req.body.Email,req.body.subAfirst,req.body.subAsecond,req.body.subAthird,req.body.subAfinal,req.body.subBfirst,req.body.subBsecond,req.body.subBthird,req.body.subBfinal,req.body.subCfirst,req.body.subCsecond,req.body.subCthird,req.body.subCfinal,req.body.subDfirst,req.body.subDsecond,req.body.subDthird,req.body.subDfinal,req.body.subEfirst,req.body.subEsecond,req.body.subEthird,req.body.subEfinal,req.body.subFfirst,req.body.subFsecond,req.body.subFthird,req.body.subFfinal)
    .then(result=>{
        if(result){
            res.status(result.statusCode).json(result)
        }
    })
})

app.post('/civilfourthyearmark',(req,res)=>{
    mark.Civilfourthyearmark(req.body.Email,req.body.subAfirst,req.body.subAsecond,req.body.subAthird,req.body.subAfinal,req.body.subBfirst,req.body.subBsecond,req.body.subBthird,req.body.subBfinal,req.body.subCfirst,req.body.subCsecond,req.body.subCthird,req.body.subCfinal,req.body.subDfirst,req.body.subDsecond,req.body.subDthird,req.body.subDfinal,req.body.subEfirst,req.body.subEsecond,req.body.subEthird,req.body.subEfinal,req.body.subFfirst,req.body.subFsecond,req.body.subFthird,req.body.subFfinal)
    .then(result=>{
        if(result){
            res.status(result.statusCode).json(result)
        }
    })
})

app.post('/csfirstyearmark',(req,res)=>{
    mark.Csfirstyearmark(req.body.Email,req.body.subAfirst,req.body.subAsecond,req.body.subAthird,req.body.subAfinal,req.body.subBfirst,req.body.subBsecond,req.body.subBthird,req.body.subBfinal,req.body.subCfirst,req.body.subCsecond,req.body.subCthird,req.body.subCfinal,req.body.subDfirst,req.body.subDsecond,req.body.subDthird,req.body.subDfinal,req.body.subEfirst,req.body.subEsecond,req.body.subEthird,req.body.subEfinal,req.body.subFfirst,req.body.subFsecond,req.body.subFthird,req.body.subFfinal)
    .then(result=>{
        if(result){
            res.status(result.statusCode).json(result)
        }
    })
})

app.post('/cssecondyearmark',(req,res)=>{
    mark.Cssecondyearmark(req.body.Email,req.body.subAfirst,req.body.subAsecond,req.body.subAthird,req.body.subAfinal,req.body.subBfirst,req.body.subBsecond,req.body.subBthird,req.body.subBfinal,req.body.subCfirst,req.body.subCsecond,req.body.subCthird,req.body.subCfinal,req.body.subDfirst,req.body.subDsecond,req.body.subDthird,req.body.subDfinal,req.body.subEfirst,req.body.subEsecond,req.body.subEthird,req.body.subEfinal,req.body.subFfirst,req.body.subFsecond,req.body.subFthird,req.body.subFfinal)
    .then(result=>{
        if(result){
            res.status(result.statusCode).json(result)
        }
    })
})

app.post('/csthirdyearmark',(req,res)=>{
    mark.Csthirdyearmark(req.body.Email,req.body.subAfirst,req.body.subAsecond,req.body.subAthird,req.body.subAfinal,req.body.subBfirst,req.body.subBsecond,req.body.subBthird,req.body.subBfinal,req.body.subCfirst,req.body.subCsecond,req.body.subCthird,req.body.subCfinal,req.body.subDfirst,req.body.subDsecond,req.body.subDthird,req.body.subDfinal,req.body.subEfirst,req.body.subEsecond,req.body.subEthird,req.body.subEfinal,req.body.subFfirst,req.body.subFsecond,req.body.subFthird,req.body.subFfinal)
    .then(result=>{
        if(result){
            res.status(result.statusCode).json(result)
        }
    })
})

app.post('/csfourthyearmark',(req,res)=>{
    mark.Csfourthyearmark(req.body.Email,req.body.subAfirst,req.body.subAsecond,req.body.subAthird,req.body.subAfinal,req.body.subBfirst,req.body.subBsecond,req.body.subBthird,req.body.subBfinal,req.body.subCfirst,req.body.subCsecond,req.body.subCthird,req.body.subCfinal,req.body.subDfirst,req.body.subDsecond,req.body.subDthird,req.body.subDfinal,req.body.subEfirst,req.body.subEsecond,req.body.subEthird,req.body.subEfinal,req.body.subFfirst,req.body.subFsecond,req.body.subFthird,req.body.subFfinal)
    .then(result=>{
        if(result){
            res.status(result.statusCode).json(result)
        }
    })
})

app.post('/mechfirstyearmark',(req,res)=>{
    mark.Mechfirstyearmark(req.body.Email,req.body.subAfirst,req.body.subAsecond,req.body.subAthird,req.body.subAfinal,req.body.subBfirst,req.body.subBsecond,req.body.subBthird,req.body.subBfinal,req.body.subCfirst,req.body.subCsecond,req.body.subCthird,req.body.subCfinal,req.body.subDfirst,req.body.subDsecond,req.body.subDthird,req.body.subDfinal,req.body.subEfirst,req.body.subEsecond,req.body.subEthird,req.body.subEfinal,req.body.subFfirst,req.body.subFsecond,req.body.subFthird,req.body.subFfinal)
    .then(result=>{
        if(result){
            res.status(result.statusCode).json(result)
        }
    })
})

app.post('/mechsecondyearmark',(req,res)=>{
    mark.Mechsecondyearmark(req.body.Email,req.body.subAfirst,req.body.subAsecond,req.body.subAthird,req.body.subAfinal,req.body.subBfirst,req.body.subBsecond,req.body.subBthird,req.body.subBfinal,req.body.subCfirst,req.body.subCsecond,req.body.subCthird,req.body.subCfinal,req.body.subDfirst,req.body.subDsecond,req.body.subDthird,req.body.subDfinal,req.body.subEfirst,req.body.subEsecond,req.body.subEthird,req.body.subEfinal,req.body.subFfirst,req.body.subFsecond,req.body.subFthird,req.body.subFfinal)
    .then(result=>{
        if(result){
            res.status(result.statusCode).json(result)
        }
    })
})

app.post('/mechthirdyearmark',(req,res)=>{
    mark.Mechthirdyearmark(req.body.Email,req.body.subAfirst,req.body.subAsecond,req.body.subAthird,req.body.subAfinal,req.body.subBfirst,req.body.subBsecond,req.body.subBthird,req.body.subBfinal,req.body.subCfirst,req.body.subCsecond,req.body.subCthird,req.body.subCfinal,req.body.subDfirst,req.body.subDsecond,req.body.subDthird,req.body.subDfinal,req.body.subEfirst,req.body.subEsecond,req.body.subEthird,req.body.subEfinal,req.body.subFfirst,req.body.subFsecond,req.body.subFthird,req.body.subFfinal)
    .then(result=>{
        if(result){
            res.status(result.statusCode).json(result)
        }
    })
})

app.post('/mechfourthyearmark',(req,res)=>{
    mark.Mechfourthyearmark(req.body.Email,req.body.subAfirst,req.body.subAsecond,req.body.subAthird,req.body.subAfinal,req.body.subBfirst,req.body.subBsecond,req.body.subBthird,req.body.subBfinal,req.body.subCfirst,req.body.subCsecond,req.body.subCthird,req.body.subCfinal,req.body.subDfirst,req.body.subDsecond,req.body.subDthird,req.body.subDfinal,req.body.subEfirst,req.body.subEsecond,req.body.subEthird,req.body.subEfinal,req.body.subFfirst,req.body.subFsecond,req.body.subFthird,req.body.subFfinal)
    .then(result=>{
        if(result){
            res.status(result.statusCode).json(result)
        }
    })
})





app.listen(3002, () => { console.log(`Example app listening on port 3002!`) })