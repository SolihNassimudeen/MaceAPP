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



module.exports = { addAdmin, deleteadmin, addCsfaculty, addCivilfaculty, addMechfaculty, deleteCivilfaculty, deleteCsfaculty, deleteMechfaculty }