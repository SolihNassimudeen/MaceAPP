const express = require('express')
const cors=require('cors')
const login=require('./login')
const app = express()
const notification=require('./Adminoperation/notificationupdates')
const Count=require('./Adminoperation/StudentandFacultyCount')
const AddandDelete=require('./Adminoperation/AddandDelete')

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


app.listen(3002, () => { console.log(`Example app listening on port 3002!`) })