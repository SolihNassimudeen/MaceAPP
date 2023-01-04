const mongodb = require('./mongoDB')

const adminlogin = (email, password) => {
    return mongodb.Admin.findOne({ "Email": email, "Password": password })
        .then(result => {
            if (result) {
                return {
                    statusCode: 200,
                    status: true,
                    message: 'Successfully logged in',
                    Email: result.Email,
                    Name: result.Name
                }

            } else {
                return {
                    statusCode: 400,
                    status: false,
                    message: 'loggin failed. Check your Email and Password'
                }
            }
        })
}

const csfaculty = (Email, Password) => {
    return mongodb.Csfaculty.findOne({ Email, Password })
        .then(result => {
            if (result) {
                return {
                    statusCode: 200,
                    status: true,
                    message: 'login successful',
                    Name: result.Name,
                    Email: result.Email
                }
            } else {
                return {
                    statusCode: 400,
                    status: true,
                    message: 'login failed. Check your Email and Password'
                }
            }
        })
}
const civilfaculty = (Email, Password) => {
    return mongodb.Civilfaculty.findOne({ Email, Password })
        .then(result => {
            if (result) {
                return {
                    statusCode: 200,
                    status: true,
                    message: 'login successful',
                    Name: result.Name,
                    Email: result.Email
                }
            } else {
                return {
                    statusCode: 400,
                    status: true,
                    message: 'login failed. Check your Email and Password'
                }
            }
        })
}
const mechfaculty = (Email, Password) => {
    return mongodb.Mechfaculty.findOne({ Email, Password })
        .then(result => {
            if (result) {
                return {
                    statusCode: 200,
                    status: true,
                    message: 'login successful',
                    Name: result.Name,
                    Email: result.Email
                }
            } else {
                return {
                    statusCode: 400,
                    status: true,
                    message: 'login failed. Check your Email and Password'
                }
            }
        })
}


const csfirstyearlogin = (Email, Password) => {
    return mongodb.Csfirstyear.findOne({ Email, Password })
        .then(result => {
            if (result) {
                return {
                    statusCode: 200,
                    status: true,
                    message: 'Login successful',
                    Email: result.Email,
                    Registration: result.Registration
                }
            } else {
                return {
                    statusCode: 400,
                    status: false,
                    message: 'Student not found. Login failed'
                }
            }
        })
}

const cssecondyearlogin = (Email, Password) => {
    return mongodb.Cssecondyear.findOne({ Email, Password })
        .then(result => {
            if (result) {
                return {
                    statusCode: 200,
                    status: true,
                    message: 'Login successful',
                    Email: result.Email,
                    Registration: result.Registration
                }
            } else {
                return {
                    statusCode: 400,
                    status: false,
                    message: 'Student not found. Login failed'
                }
            }
        })
}

const csthirdyearlogin = (Email, Password) => {
    return mongodb.Csthirdyear.findOne({ Email, Password })
        .then(result => {
            if (result) {
                return {
                    statusCode: 200,
                    status: true,
                    message: 'Login successful',
                    Email: result.Email,
                    Registration: result.Registration
                }
            } else {
                return {
                    statusCode: 400,
                    status: false,
                    message: 'Student not found. Login failed'
                }
            }
        })
}

const csfourthyearlogin = (Email, Password) => {
    return mongodb.Csfourthyear.findOne({ Email, Password })
        .then(result => {
            if (result) {
                return {
                    statusCode: 200,
                    status: true,
                    message: 'Login successful',
                    Email: result.Email,
                    Registration: result.Registration
                }
            } else {
                return {
                    statusCode: 400,
                    status: false,
                    message: 'Student not found. Login failed'
                }
            }
        })
}


const civilfirstyearlogin = (Email, Password) => {
    return mongodb.Civilfirstyear.findOne({ Email, Password })
        .then(result => {
            if (result) {
                return {
                    statusCode: 200,
                    status: true,
                    message: 'Login successful',
                    Email: result.Email,
                    Registration: result.Registration
                }
            } else {
                return {
                    statusCode: 400,
                    status: false,
                    message: 'Student not found. Login failed'
                }
            }
        })
}

const civilsecondyearlogin = (Email, Password) => {
    return mongodb.Civilsecondyear.findOne({ Email, Password })
        .then(result => {
            if (result) {
                return {
                    statusCode: 200,
                    status: true,
                    message: 'Login successful',
                    Email: result.Email,
                    Registration: result.Registration
                }
            } else {
                return {
                    statusCode: 400,
                    status: false,
                    message: 'Student not found. Login failed'
                }
            }
        })
}

const civilthirdyearlogin = (Email, Password) => {
    return mongodb.Civilthirdyear.findOne({ Email, Password })
        .then(result => {
            if (result) {
                return {
                    statusCode: 200,
                    status: true,
                    message: 'Login successful',
                    Email: result.Email,
                    Registration: result.Registration
                }
            } else {
                return {
                    statusCode: 400,
                    status: false,
                    message: 'Student not found. Login failed'
                }
            }
        })
}

const civilfourthyearlogin = (Email, Password) => {
    return mongodb.Civilfourthyear.findOne({ Email, Password })
        .then(result => {
            if (result) {
                return {
                    statusCode: 200,
                    status: true,
                    message: 'Login successful',
                    Email: result.Email,
                    Registration: result.Registration
                }
            } else {
                return {
                    statusCode: 400,
                    status: false,
                    message: 'Student not found. Login failed'
                }
            }
        })
}


const mechfirstyearlogin = (Email, Password) => {
    return mongodb.Mechfirstyear.findOne({ Email, Password })
        .then(result => {
            if (result) {
                return {
                    statusCode: 200,
                    status: true,
                    message: 'Login successful',
                    Email: result.Email,
                    Registration: result.Registration
                }
            } else {
                return {
                    statusCode: 400,
                    status: false,
                    message: 'Student not found. Login failed'
                }
            }
        })
}

const mechsecondyearlogin = (Email, Password) => {
    return mongodb.Mechsecondyear.findOne({ Email, Password })
        .then(result => {
            if (result) {
                return {
                    statusCode: 200,
                    status: true,
                    message: 'Login successful',
                    Email: result.Email,
                    Registration: result.Registration
                }
            } else {
                return {
                    statusCode: 400,
                    status: false,
                    message: 'Student not found. Login failed'
                }
            }
        })
}

const mechthirdyearlogin = (Email, Password) => {
    return mongodb.Mechthirdyear.findOne({ Email, Password })
        .then(result => {
            if (result) {
                return {
                    statusCode: 200,
                    status: true,
                    message: 'Login successful',
                    Email: result.Email,
                    Registration: result.Registration
                }
            } else {
                return {
                    statusCode: 400,
                    status: false,
                    message: 'Student not found. Login failed'
                }
            }
        })
}

const mechfourthyearlogin = (Email, Password) => {
    return mongodb.Mechfourthyear.findOne({ Email, Password })
        .then(result => {
            if (result) {
                return {
                    statusCode: 200,
                    status: true,
                    message: 'Login successful',
                    Email: result.Email,
                    Registration: result.Registration
                }
            } else {
                return {
                    statusCode: 400,
                    status: false,
                    message: 'Student not found. Login failed'
                }
            }
        })
}



module.exports = { adminlogin, csfaculty, civilfaculty, mechfaculty, csfirstyearlogin, cssecondyearlogin, csthirdyearlogin, csfourthyearlogin, civilfirstyearlogin, civilsecondyearlogin, civilthirdyearlogin, civilfourthyearlogin, mechfirstyearlogin, mechsecondyearlogin, mechthirdyearlogin, mechfourthyearlogin }