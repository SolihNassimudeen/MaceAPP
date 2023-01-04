const mongodb = require('./mongoDB')

const csfirstyearregistration = (Email, Name, DOB, ContactNo, Password) => {
    return mongodb.Csfirstyear.findOne({ Email })
        .then(result => {
            if (result) {
                result.Name = Name
                result.DOB = DOB
                result.ContactNo = ContactNo
                result.Password = Password
                result.Registration=true
                result.save()
                return {
                    statusCode: 200,
                    status: true,
                    message: 'Registration Successful. Please login again'
                }
            } else {
                return {
                    statusCode: 400,
                    status: false,
                    message: 'Registration failed'
                }
            }
        })
}

const cssecondyearregistration = (Email, Name, DOB, ContactNo, Password) => {
    return mongodb.Cssecondyear.findOne({ Email })
        .then(result => {
            if (result) {
                result.Name = Name
                result.DOB = DOB
                result.ContactNo = ContactNo
                result.Password = Password
                result.Registration=true
                result.save()
                return {
                    statusCode: 200,
                    status: true,
                    message: 'Registration Successful. Please login again'
                }
            } else {
                return {
                    statusCode: 400,
                    status: false,
                    message: 'Registration failed'
                }
            }
        })
}

const csthirdyearregistration = (Email, Name, DOB, ContactNo, Password) => {
    return mongodb.Csthirdyear.findOne({ Email })
        .then(result => {
            if (result) {
                result.Name = Name
                result.DOB = DOB
                result.ContactNo = ContactNo
                result.Password = Password
                result.Registration=true
                result.save()
                return {
                    statusCode: 200,
                    status: true,
                    message: 'Registration Successful. Please login again'
                }
            } else {
                return {
                    statusCode: 400,
                    status: false,
                    message: 'Registration failed'
                }
            }
        })
}

const csfourthyearregistration = (Email, Name, DOB, ContactNo, Password) => {
    return mongodb.Csfourthyear.findOne({ Email })
        .then(result => {
            if (result) {
                result.Name = Name
                result.DOB = DOB
                result.ContactNo = ContactNo
                result.Password = Password
                result.Registration=true
                result.save()
                return {
                    statusCode: 200,
                    status: true,
                    message: 'Registration Successful. Please login again'
                }
            } else {
                return {
                    statusCode: 400,
                    status: false,
                    message: 'Registration failed'
                }
            }
        })
}

const civilfirstyearregistration = (Email, Name, DOB, ContactNo, Password) => {
    return mongodb.Civilfirstyear.findOne({ Email })
        .then(result => {
            if (result) {
                result.Name = Name
                result.DOB = DOB
                result.ContactNo = ContactNo
                result.Password = Password
                result.Registration=true
                result.save()
                return {
                    statusCode: 200,
                    status: true,
                    message: 'Registration Successful. Please login again'
                }
            } else {
                return {
                    statusCode: 400,
                    status: false,
                    message: 'Registration failed'
                }
            }
        })
}

const civilsecondyearregistration = (Email, Name, DOB, ContactNo, Password) => {
    return mongodb.Civilsecondyear.findOne({ Email })
        .then(result => {
            if (result) {
                result.Name = Name
                result.DOB = DOB
                result.ContactNo = ContactNo
                result.Password = Password
                result.Registration=true
                result.save()
                return {
                    statusCode: 200,
                    status: true,
                    message: 'Registration Successful. Please login again'
                }
            } else {
                return {
                    statusCode: 400,
                    status: false,
                    message: 'Registration failed'
                }
            }
        })
}

const civilthirdyearregistration = (Email, Name, DOB, ContactNo, Password) => {
    return mongodb.Civilthirdyear.findOne({ Email })
        .then(result => {
            if (result) {
                result.Name = Name
                result.DOB = DOB
                result.ContactNo = ContactNo
                result.Password = Password
                result.Registration=true
                result.save()
                return {
                    statusCode: 200,
                    status: true,
                    message: 'Registration Successful. Please login again'
                }
            } else {
                return {
                    statusCode: 400,
                    status: false,
                    message: 'Registration failed'
                }
            }
        })
}

const civilfourthyearregistration = (Email, Name, DOB, ContactNo, Password) => {
    return mongodb.Civilfourthyear.findOne({ Email })
        .then(result => {
            if (result) {
                result.Name = Name
                result.DOB = DOB
                result.ContactNo = ContactNo
                result.Password = Password
                result.Registration=true
                result.save()
                return {
                    statusCode: 200,
                    status: true,
                    message: 'Registration Successful. Please login again'
                }
            } else {
                return {
                    statusCode: 400,
                    status: false,
                    message: 'Registration failed'
                }
            }
        })
}

const mechfirstyearregistration = (Email, Name, DOB, ContactNo, Password) => {
    return mongodb.Mechfirstyear.findOne({ Email })
        .then(result => {
            if (result) {
                result.Name = Name
                result.DOB = DOB
                result.ContactNo = ContactNo
                result.Password = Password
                result.Registration=true
                result.save()
                return {
                    statusCode: 200,
                    status: true,
                    message: 'Registration Successful. Please login again'
                }
            } else {
                return {
                    statusCode: 400,
                    status: false,
                    message: 'Registration failed'
                }
            }
        })
}

const mechsecondyearregistration = (Email, Name, DOB, ContactNo, Password) => {
    return mongodb.Mechsecondyear.findOne({ Email })
        .then(result => {
            if (result) {
                result.Name = Name
                result.DOB = DOB
                result.ContactNo = ContactNo
                result.Password = Password
                result.Registration=true
                result.save()
                return {
                    statusCode: 200,
                    status: true,
                    message: 'Registration Successful. Please login again'
                }
            } else {
                return {
                    statusCode: 400,
                    status: false,
                    message: 'Registration failed'
                }
            }
        })
}

const mechthirdyearregistration = (Email, Name, DOB, ContactNo, Password) => {
    return mongodb.Mechthirdyear.findOne({ Email })
        .then(result => {
            if (result) {
                result.Name = Name
                result.DOB = DOB
                result.ContactNo = ContactNo
                result.Password = Password
                result.Registration=true
                result.save()
                return {
                    statusCode: 200,
                    status: true,
                    message: 'Registration Successful. Please login again'
                }
            } else {
                return {
                    statusCode: 400,
                    status: false,
                    message: 'Registration failed'
                }
            }
        })
}

const mechfourthyearregistration = (Email, Name, DOB, ContactNo, Password) => {
    return mongodb.Mechfourthyear.findOne({ Email })
        .then(result => {
            if (result) {
                result.Name = Name
                result.DOB = DOB
                result.ContactNo = ContactNo
                result.Password = Password
                result.Registration=true
                result.save()
                return {
                    statusCode: 200,
                    status: true,
                    message: 'Registration Successful. Please login again'
                }
            } else {
                return {
                    statusCode: 400,
                    status: false,
                    message: 'Registration failed'
                }
            }
        })
}

module.exports = { csfirstyearregistration, cssecondyearregistration, csthirdyearregistration, csfourthyearregistration, civilfirstyearregistration, civilsecondyearregistration, civilthirdyearregistration, civilfourthyearregistration, mechfirstyearregistration, mechsecondyearregistration, mechthirdyearregistration, mechfourthyearregistration }