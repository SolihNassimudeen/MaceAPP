const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/MACE', {
    useNewUrlParser: true
})

const Admin = mongoose.model('Admin', {
    Name: String,
    Email: String,
    DOB: Date,
    Password: String
})
const Notification = mongoose.model('Notification', {
    Notification1: String,
    Notification2: String,
    Notification3: String
})
//cs student and faculty
const Csfirstyear = mongoose.model('Csfirstyear', {
    Name: String,
    Email: String,
    DOB: Date,
    Password: String,
    Academic_year: Number,
    Department: String,
    Registration: Boolean,
    ContactNo: Number
})
const Cssecondyear = mongoose.model('Cssecondyear', {
    Name: String,
    Email: String,
    DOB: Date,
    Password: String,
    Academic_year: Number,
    Department: String,
    Registration: Boolean,
    ContactNo: Number
})
const Csthirdyear = mongoose.model('Csthirdyear', {
    Name: String,
    Email: String,
    DOB: Date,
    Password: String,
    Academic_year: Number,
    Department: String,
    Registration: Boolean,
    ContactNo: Number
})
const Csfourthyear = mongoose.model('Csforthyear', {
    Name: String,
    Email: String,
    DOB: Date,
    Password: String,
    Academic_year: Number,
    Department: String,
    Registration: Boolean,
    ContactNo: Number
})

const Csfaculty = mongoose.model('Csfaculty', {
    Name: String,
    Email: String,
    Department: String,
    Password: String,
    Subject1: String,
    Subject2: String,
    Subject3: String,
    Subject4: String
})

//civil student and faculty
const Civilfirstyear = mongoose.model('Civilfirstyear', {
    Name: String,
    Email: String,
    DOB: Date,
    Password: String,
    Academic_year: Number,
    Department: String,
    Registration: Boolean,
    ContactNo: Number
})
const Civilsecondyear = mongoose.model('Civilsecondyear', {
    Name: String,
    Email: String,
    DOB: Date,
    Password: String,
    Academic_year: Number,
    Department: String,
    Registration: Boolean,
    ContactNo: Number
})
const Civilthirdyear = mongoose.model('Civilthirdyear', {
    Name: String,
    Email: String,
    DOB: Date,
    Password: String,
    Academic_year: Number,
    Department: String,
    Registration: Boolean,
    ContactNo: Number
})
const Civilfourthyear = mongoose.model('Civilforthyear', {
    Name: String,
    Email: String,
    DOB: Date,
    Password: String,
    Academic_year: Number,
    Department: String,
    Registration: Boolean,
    ContactNo: Number
})

const Civilfaculty = mongoose.model('Civilfaculty', {
    Name: String,
    Email: String,
    Department: String,
    Password: String,
    Subject1: String,
    Subject2: String,
    Subject3: String,
    Subject4: String
})

//mech student and faculty
const Mechfirstyear=mongoose.model('Mechfirstyear',{
    Name:String,
    Email:String,
    DOB:Date,
    Password:String,
    Academic_year:Number,
    Department:String,
    Registration:Boolean,
    ContactNo:Number
})
const Mechsecondyear=mongoose.model('Mechsecondyear',{
    Name:String,
    Email:String,
    DOB:Date,
    Password:String,
    Academic_year:Number,
    Department:String,
    Registration:Boolean,
    ContactNo:Number
})
const Mechthirdyear=mongoose.model('Mechthirdyear',{
    Name:String,
    Email:String,
    DOB:Date,
    Password:String,
    Academic_year:Number,
    Department:String,
    Registration:Boolean,
    ContactNo:Number
})
const Mechfourthyear=mongoose.model('Mechforthyear',{
    Name:String,
    Email:String,
    DOB:Date,
    Password:String,
    Academic_year:Number,
    Department:String,
    Registration:Boolean,
    ContactNo:Number
})

const Mechfaculty=mongoose.model('mechfaculty',{
    Name:String,
    Email:String,
    Department:String,
    Password:String,
    Subject1:String,
    Subject2:String,
    Subject3:String,
    Subject4:String
})

module.exports = { Admin, Notification, Csfirstyear, Cssecondyear, Csthirdyear, Csfourthyear, Csfaculty, Civilfaculty, Civilfirstyear, Civilsecondyear, Civilthirdyear, Civilfourthyear, Mechfaculty,Mechfirstyear,Mechsecondyear,Mechthirdyear,Mechfourthyear}