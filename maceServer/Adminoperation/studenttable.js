const mongodb = require('../mongoDB')

const csfirstyeartable = () => {
    return mongodb.Csfirstyear.find({})
        .then(result => {
            if (result) {
                return {
                    statusCode: 200,
                    status: true,
                    table: result
                }
            }
            else {
                return {
                    statusCode: 400,
                    status: true
                }
            }
        })
}
const cssecondyeartable = () => {
    return mongodb.Cssecondyear.find({})
        .then(result => {
            if (result) {
                return {
                    statusCode: 200,
                    status: true,
                    table: result
                }
            } else {
                return {
                    statusCode: 400,
                    status: true
                }
            }
        })
}
const csthirdyeartable = () => {
    return mongodb.Csthirdyear.find({})
        .then(result => {
            if (result) {
                return {
                    statusCode: 200,
                    status: true,
                    table: result
                }
            } else {
                return {
                    statusCode: 400,
                    status: true
                }
            }
        })
}
const csfourthyeartable = () => {
    return mongodb.Csfourthyear.find({})
        .then(result => {
            if (result) {
                return {
                    statusCode: 200,
                    status: true,
                    table: result
                }
            } else {
                return {
                    statusCode: 400,
                    status: true
                }
            }
        })
}


const civilfirstyeartable = () => {
    return mongodb.Civilfirstyear.find({})
        .then(result => {
            if (result) {
                return {
                    statusCode: 200,
                    status: true,
                    table: result
                }
            }
            else {
                return {
                    statusCode: 400,
                    status: true
                }
            }
        })
}
const civilsecondyeartable = () => {
    return mongodb.Civilsecondyear.find({})
        .then(result => {
            if (result) {
                return {
                    statusCode: 200,
                    status: true,
                    table: result
                }
            } else {
                return {
                    statusCode: 400,
                    status: true
                }
            }
        })
}
const civilthirdyeartable = () => {
    return mongodb.Civilthirdyear.find({})
        .then(result => {
            if (result) {
                return {
                    statusCode: 200,
                    status: true,
                    table: result
                }
            } else {
                return {
                    statusCode: 400,
                    status: true
                }
            }
        })
}
const civilfourthyeartable = () => {
    return mongodb.Civilfourthyear.find({})
        .then(result => {
            if (result) {
                return {
                    statusCode: 200,
                    status: true,
                    table: result
                }
            } else {
                return {
                    statusCode: 400,
                    status: true
                }
            }
        })
}

const mechfirstyeartable = () => {
    return mongodb.Mechfirstyear.find({})
        .then(result => {
            if (result) {
                return {
                    statusCode: 200,
                    status: true,
                    table: result
                }
            }
            else {
                return {
                    statusCode: 400,
                    status: true
                }
            }
        })
}
const mechsecondyeartable = () => {
    return mongodb.Mechsecondyear.find({})
        .then(result => {
            if (result) {
                return {
                    statusCode: 200,
                    status: true,
                    table: result
                }
            } else {
                return {
                    statusCode: 400,
                    status: true
                }
            }
        })
}
const mechthirdyeartable = () => {
    return mongodb.Mechthirdyear.find({})
        .then(result => {
            if (result) {
                return {
                    statusCode: 200,
                    status: true,
                    table: result
                }
            } else {
                return {
                    statusCode: 400,
                    status: true
                }
            }
        })
}
const mechfourthyeartable = () => {
    return mongodb.Mechfourthyear.find({})
        .then(result => {
            if (result) {
                return {
                    statusCode: 200,
                    status: true,
                    table: result
                }
            } else {
                return {
                    statusCode: 400,
                    status: true
                }
            }
        })
}

module.exports = { csfirstyeartable, cssecondyeartable, csthirdyeartable, csfourthyeartable,civilfirstyeartable,civilsecondyeartable,civilthirdyeartable,civilfourthyeartable,mechfirstyeartable,mechsecondyeartable,mechthirdyeartable,mechfourthyeartable }