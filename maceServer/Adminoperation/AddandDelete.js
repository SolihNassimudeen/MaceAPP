const mongodb = require('../mongoDB')
//admin register and delete
const addAdmin = (Name, Email, DOB, Password) => {
    return mongodb.Admin.findOne({ Email })
        .then(result => {
            if (result) {
                return {
                    statusCode: 400,
                    status: false,
                    message: 'Admin Registration failed'
                }
            }
            else {
                const newAdmin = new mongodb.Admin({
                    Name,
                    Email,
                    DOB,
                    Password
                })
                newAdmin.save()
                return {
                    statusCode: 200,
                    status: true,
                    message: 'Admin Registration Success'
                }
            }
        })
}
const deleteadmin = (Email) => {
    return mongodb.Admin.deleteOne({ Email })
        .then(result => {
            if (result) {
                if (result.deletedCount == 0) {
                    return {
                        statusCode: 400,
                        status: false,
                        message: 'Not such an Account',
                        result
                    }
                } else {
                    return {
                        statusCode: 200,
                        status: true,
                        message: 'Account deletion success',
                    }
                }

            }
        })
}

//faculty register
const addCsfaculty = (Name, Email, Department, sub1, sub2, sub3, sub4, Password) => {
    return mongodb.Csfaculty.findOne({ Email })
        .then(result => {
            if (result) {
                return {
                    statusCode: 400,
                    status: false,
                    message: 'Faculty already exist'
                }
            }
            else {
                const newfaculty = new mongodb.Csfaculty({
                    Name,
                    Email,
                    Department,
                    "Subject1": sub1,
                    "Subject2": sub2,
                    "Subject3": sub3,
                    "Subject4": sub4,
                    Password
                })
                newfaculty.save()
                return {
                    statusCode: 200,
                    status: true,
                    message: 'Faculty Registration Success'
                }
            }
        })
}
const addCivilfaculty = (Name, Email, Department, sub1, sub2, sub3, sub4, Password) => {
    return mongodb.Civilfaculty.findOne({ Email })
        .then(result => {
            if (result) {
                return {
                    statusCode: 400,
                    status: false,
                    message: 'Faculty already exist'
                }
            }
            else {
                const newfaculty = new mongodb.Civilfaculty({
                    Name,
                    Email,
                    Department,
                    "Subject1": sub1,
                    "Subject2": sub2,
                    "Subject3": sub3,
                    "Subject4": sub4,
                    Password
                })
                newfaculty.save()
                return {
                    statusCode: 200,
                    status: true,
                    message: 'Faculty Registration Success'
                }
            }
        })
}
const addMechfaculty = (Name, Email, Department, sub1, sub2, sub3, sub4, Password) => {
    return mongodb.Mechfaculty.findOne({ Email })
        .then(result => {
            if (result) {
                return {
                    statusCode: 400,
                    status: false,
                    message: 'Faculty already exist'
                }
            }
            else {
                const newfaculty = new mongodb.Mechfaculty({
                    Name,
                    Email,
                    Department,
                    "Subject1": sub1,
                    "Subject2": sub2,
                    "Subject3": sub3,
                    "Subject4": sub4,
                    Password
                })
                newfaculty.save()
                return {
                    statusCode: 200,
                    status: true,
                    message: 'Faculty Registration Success'
                }
            }
        })
}
//faculty delete

const deleteCsfaculty = (Email) => {
    return mongodb.Csfaculty.deleteOne({ Email })
        .then(result => {
            if (result) {
                if (result.deletedCount == 0) {
                    return {
                        statusCode: 400,
                        status: false,
                        message: 'Not such an Account',
                        result
                    }
                } else {
                    return {
                        statusCode: 200,
                        status: true,
                        message: 'Account deletion success',
                    }
                }

            }
        })
}
const deleteMechfaculty = (Email) => {
    return mongodb.Mechfaculty.deleteOne({ Email })
        .then(result => {
            if (result) {
                if (result.deletedCount == 0) {
                    return {
                        statusCode: 400,
                        status: false,
                        message: 'Not such an Account',
                        result
                    }
                } else {
                    return {
                        statusCode: 200,
                        status: true,
                        message: 'Account deletion success',
                    }
                }

            }
        })
}
const deleteCivilfaculty = (Email) => {
    return mongodb.Civilfaculty.deleteOne({ Email })
        .then(result => {
            if (result) {
                if (result.deletedCount == 0) {
                    return {
                        statusCode: 400,
                        status: false,
                        message: 'Not such an Account',
                        result
                    }
                } else {
                    return {
                        statusCode: 200,
                        status: true,
                        message: 'Account deletion success',
                    }
                }

            }
        })
}

//student registration
const addCsFirstyear = (Email, Password) => {
    return mongodb.Csfirstyear.findOne({ Email })
        .then(result => {
            if (result) {
                return {
                    statusCode: 400,
                    status: true,
                    message: 'Student already registered'
                }
            } else {
                const newStudent = new mongodb.Csfirstyear({
                    Email,
                    Password,
                    "Registration":false
                })
                newStudent.save()
                return {
                    statusCode: 200,
                    status: true,
                    message: 'Student Registration Success'
                }
            }
        })
}
const addCsSecondyear = (Email, Password) => {
    return mongodb.Cssecondyear.findOne({ Email })
        .then(result => {
            if (result) {
                return {
                    statusCode: 400,
                    status: true,
                    message: 'Student already registered'
                }
            } else {
                const newStudent = new mongodb.Cssecondyear({
                    Email,
                    Password,
                    "Registration":false
                })
                newStudent.save()
                return {
                    statusCode: 200,
                    status: true,
                    message: 'Student Registration Success'
                }
            }
        })
}
const addCsThirdyear = (Email, Password) => {
    return mongodb.Csthirdyear.findOne({ Email })
        .then(result => {
            if (result) {
                return {
                    statusCode: 400,
                    status: true,
                    message: 'Student already registered'
                }
            } else {
                const newStudent = new mongodb.Csthirdyear({
                    Email,
                    Password,
                    "Registration":false
                })
                newStudent.save()
                return {
                    statusCode: 200,
                    status: true,
                    message: 'Student Registration Success'
                }
            }
        })
}
const addCsFourthyear = (Email, Password) => {
    return mongodb.Csfourthyear.findOne({ Email })
        .then(result => {
            if (result) {
                return {
                    statusCode: 400,
                    status: true,
                    message: 'Student already registered'
                }
            } else {
                const newStudent = new mongodb.Csfourthyear({
                    Email,
                    Password,
                    "Registration":false
                })
                newStudent.save()
                return {
                    statusCode: 200,
                    status: true,
                    message: 'Student Registration Success'
                }
            }
        })
}

const addCivilFirstyear = (Email, Password) => {
    return mongodb.Civilfirstyear.findOne({ Email })
        .then(result => {
            if (result) {
                return {
                    statusCode: 400,
                    status: true,
                    message: 'Student already registered'
                }
            } else {
                const newStudent = new mongodb.Civilfirstyear({
                    Email,
                    Password,
                    "Registration":false
                })
                newStudent.save()
                return {
                    statusCode: 200,
                    status: true,
                    message: 'Student Registration Success'
                }
            }
        })
}
const addCivilSecondyear = (Email, Password) => {
    return mongodb.Civilsecondyear.findOne({ Email })
        .then(result => {
            if (result) {
                return {
                    statusCode: 400,
                    status: true,
                    message: 'Student already registered'
                }
            } else {
                const newStudent = new mongodb.Civilsecondyear({
                    Email,
                    Password,
                    "Registration":false
                })
                newStudent.save()
                return {
                    statusCode: 200,
                    status: true,
                    message: 'Student Registration Success'
                }
            }
        })
}
const addCivilThirdyear = (Email, Password) => {
    return mongodb.Civilthirdyear.findOne({ Email })
        .then(result => {
            if (result) {
                return {
                    statusCode: 400,
                    status: true,
                    message: 'Student already registered'
                }
            } else {
                const newStudent = new mongodb.Civilthirdyear({
                    Email,
                    Password,
                    "Registration":false
                })
                newStudent.save()
                return {
                    statusCode: 200,
                    status: true,
                    message: 'Student Registration Success'
                }
            }
        })
}
const addCivilFourthyear = (Email, Password) => {
    return mongodb.Civilfourthyear.findOne({ Email })
        .then(result => {
            if (result) {
                return {
                    statusCode: 400,
                    status: true,
                    message: 'Student already registered'
                }
            } else {
                const newStudent = new mongodb.Civilfourthyear({
                    Email,
                    Password,
                    "Registration":false
                })
                newStudent.save()
                return {
                    statusCode: 200,
                    status: true,
                    message: 'Student Registration Success'
                }
            }
        })
}


const addMechFirstyear = (Email, Password) => {
    return mongodb.Mechfirstyear.findOne({ Email })
        .then(result => {
            if (result) {
                return {
                    statusCode: 400,
                    status: true,
                    message: 'Student already registered'
                }
            } else {
                const newStudent = new mongodb.Mechfirstyear({
                    Email,
                    Password,
                    "Registration":false
                })
                newStudent.save()
                return {
                    statusCode: 200,
                    status: true,
                    message: 'Student Registration Success'
                }
            }
        })
}
const addMechSecondyear = (Email, Password) => {
    return mongodb.Mechsecondyear.findOne({ Email })
        .then(result => {
            if (result) {
                return {
                    statusCode: 400,
                    status: true,
                    message: 'Student already registered'
                }
            } else {
                const newStudent = new mongodb.Mechsecondyear({
                    Email,
                    Password,
                    "Registration":false
                })
                newStudent.save()
                return {
                    statusCode: 200,
                    status: true,
                    message: 'Student Registration Success'
                }
            }
        })
}
const addMechThirdyear = (Email, Password) => {
    return mongodb.Mechthirdyear.findOne({ Email })
        .then(result => {
            if (result) {
                return {
                    statusCode: 400,
                    status: true,
                    message: 'Student already registered'
                }
            } else {
                const newStudent = new mongodb.Mechthirdyear({
                    Email,
                    Password,
                    "Registration":false
                })
                newStudent.save()
                return {
                    statusCode: 200,
                    status: true,
                    message: 'Student Registration Success'
                }
            }
        })
}
const addMechFourthyear = (Email, Password) => {
    return mongodb.Mechfourthyear.findOne({ Email })
        .then(result => {
            if (result) {
                return {
                    statusCode: 400,
                    status: true,
                    message: 'Student already registered'
                }
            } else {
                const newStudent = new mongodb.Mechfourthyear({
                    Email,
                    Password,
                    "Registration":false
                })
                newStudent.save()
                return {
                    statusCode: 200,
                    status: true,
                    message: 'Student Registration Success'
                }
            }
        })
}

//student deletion
const deleteCsfirstyear=(Email)=>{
    return mongodb.Csfirstyear.deleteOne({ Email })
        .then(result => {
            if (result) {
                if (result.deletedCount == 0) {
                    return {
                        statusCode: 400,
                        status: false,
                        message: 'Not such an Account',
                        result
                    }
                } else {
                    return {
                        statusCode: 200,
                        status: true,
                        message: 'Account deletion success',
                    }
                }

            }
        })
}
const deleteCssecondyear=(Email)=>{
    return mongodb.Cssecondyear.deleteOne({ Email })
        .then(result => {
            if (result) {
                if (result.deletedCount == 0) {
                    return {
                        statusCode: 400,
                        status: false,
                        message: 'Not such an Account',
                        result
                    }
                } else {
                    return {
                        statusCode: 200,
                        status: true,
                        message: 'Account deletion success',
                    }
                }

            }
        })
}
const deleteCsThirdyear=(Email)=>{
    return mongodb.Csthirdyear.deleteOne({ Email })
        .then(result => {
            if (result) {
                if (result.deletedCount == 0) {
                    return {
                        statusCode: 400,
                        status: false,
                        message: 'Not such an Account',
                        result
                    }
                } else {
                    return {
                        statusCode: 200,
                        status: true,
                        message: 'Account deletion success',
                    }
                }

            }
        })
}
const deleteCsfourthyear=(Email)=>{
    return mongodb.Csfourthyear.deleteOne({ Email })
        .then(result => {
            if (result) {
                if (result.deletedCount == 0) {
                    return {
                        statusCode: 400,
                        status: false,
                        message: 'Not such an Account',
                        result
                    }
                } else {
                    return {
                        statusCode: 200,
                        status: true,
                        message: 'Account deletion success',
                    }
                }

            }
        })
}


const deleteCivilfirstyear=(Email)=>{
    return mongodb.Civilfirstyear.deleteOne({ Email })
        .then(result => {
            if (result) {
                if (result.deletedCount == 0) {
                    return {
                        statusCode: 400,
                        status: false,
                        message: 'Not such an Account',
                        result
                    }
                } else {
                    return {
                        statusCode: 200,
                        status: true,
                        message: 'Account deletion success',
                    }
                }

            }
        })
}
const deleteCivilsecondyear=(Email)=>{
    return mongodb.Civilsecondyear.deleteOne({ Email })
        .then(result => {
            if (result) {
                if (result.deletedCount == 0) {
                    return {
                        statusCode: 400,
                        status: false,
                        message: 'Not such an Account',
                        result
                    }
                } else {
                    return {
                        statusCode: 200,
                        status: true,
                        message: 'Account deletion success',
                    }
                }

            }
        })
}
const deleteCivilThirdyear=(Email)=>{
    return mongodb.Civilthirdyear.deleteOne({ Email })
        .then(result => {
            if (result) {
                if (result.deletedCount == 0) {
                    return {
                        statusCode: 400,
                        status: false,
                        message: 'Not such an Account',
                        result
                    }
                } else {
                    return {
                        statusCode: 200,
                        status: true,
                        message: 'Account deletion success',
                    }
                }

            }
        })
}
const deleteCivilfourthyear=(Email)=>{
    return mongodb.Civilfourthyear.deleteOne({ Email })
        .then(result => {
            if (result) {
                if (result.deletedCount == 0) {
                    return {
                        statusCode: 400,
                        status: false,
                        message: 'Not such an Account',
                        result
                    }
                } else {
                    return {
                        statusCode: 200,
                        status: true,
                        message: 'Account deletion success',
                    }
                }

            }
        })
}


const deleteMechfirstyear=(Email)=>{
    return mongodb.Mechfirstyear.deleteOne({ Email })
        .then(result => {
            if (result) {
                if (result.deletedCount == 0) {
                    return {
                        statusCode: 400,
                        status: false,
                        message: 'Not such an Account',
                        result
                    }
                } else {
                    return {
                        statusCode: 200,
                        status: true,
                        message: 'Account deletion success',
                    }
                }

            }
        })
}
const deleteMechsecondyear=(Email)=>{
    return mongodb.Mechsecondyear.deleteOne({ Email })
        .then(result => {
            if (result) {
                if (result.deletedCount == 0) {
                    return {
                        statusCode: 400,
                        status: false,
                        message: 'Not such an Account',
                        result
                    }
                } else {
                    return {
                        statusCode: 200,
                        status: true,
                        message: 'Account deletion success',
                    }
                }

            }
        })
}
const deleteMechThirdyear=(Email)=>{
    return mongodb.Mechthirdyear.deleteOne({ Email })
        .then(result => {
            if (result) {
                if (result.deletedCount == 0) {
                    return {
                        statusCode: 400,
                        status: false,
                        message: 'Not such an Account',
                        result
                    }
                } else {
                    return {
                        statusCode: 200,
                        status: true,
                        message: 'Account deletion success',
                    }
                }

            }
        })
}
const deleteMechfourthyear=(Email)=>{
    return mongodb.Mechfourthyear.deleteOne({ Email })
        .then(result => {
            if (result) {
                if (result.deletedCount == 0) {
                    return {
                        statusCode: 400,
                        status: false,
                        message: 'Not such an Account',
                        result
                    }
                } else {
                    return {
                        statusCode: 200,
                        status: true,
                        message: 'Account deletion success',
                    }
                }

            }
        })
}


module.exports = { addAdmin, deleteadmin, addCsfaculty, addCivilfaculty, addMechfaculty, deleteCivilfaculty, deleteCsfaculty, deleteMechfaculty, addCsFirstyear,addCsSecondyear,addCsThirdyear,addCsFourthyear,addCivilFirstyear,addCivilSecondyear,addCivilThirdyear,addCivilFourthyear,addMechFirstyear,addMechSecondyear,addMechThirdyear,addMechFourthyear,deleteCsfirstyear,deleteCssecondyear,deleteCsThirdyear,deleteCsfourthyear,deleteCivilfirstyear,deleteCivilsecondyear,deleteCivilThirdyear,deleteCivilfourthyear,deleteMechfirstyear,deleteMechsecondyear,deleteMechThirdyear,deleteMechfourthyear }