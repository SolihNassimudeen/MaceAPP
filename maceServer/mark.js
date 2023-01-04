const mongodb = require('./mongoDB')

const civilfirstyearsubA = (Email, SubjectAfirst, SubjectAsecond, SubjectAthird) => {
    return mongodb.Civilfirstyearmark.findOne({ Email })
        .then(result => {
            if (result) {
                result.SubjectAfirst = SubjectAfirst
                result.SubjectAsecond = SubjectAsecond
                result.SubjectAthird = SubjectAthird
                result.save()
                return {
                    statusCode: 200,
                    status: true,
                    message: 'Mark upload successful'
                }
            } else {
                const newStudentmark = new mongodb.Civilfirstyearmark({
                    Email,
                    SubjectAfirst,
                    SubjectAsecond,
                    SubjectAthird,
                })
                newStudentmark.save()
                return {
                    statusCode: 202,
                    status: true,
                    message: 'Mark upload successful'
                }
            }
        })
}

const civilfirstyearsubB = (Email, SubjectBfirst, SubjectBsecond, SubjectBthird) => {
    return mongodb.Civilfirstyearmark.findOne({ Email })
        .then(result => {
            if (result) {
                result.SubjectBfirst = SubjectBfirst
                result.SubjectBsecond = SubjectBsecond
                result.SubjectBthird = SubjectBthird
                result.save()
                return {
                    statusCode: 200,
                    status: true,
                    message: 'Mark upload successful'
                }
            } else {
                const newStudentmark = new mongodb.Civilfirstyearmark({
                    Email,
                    SubjectBfirst,
                    SubjectBsecond,
                    SubjectBthird,
                })
                newStudentmark.save()
                return {
                    statusCode: 202,
                    status: true,
                    message: 'Mark upload successful'
                }
            }
        })
}

const civilfirstyearsubC = (Email, SubjectCfirst, SubjectCsecond, SubjectCthird) => {
    return mongodb.Civilfirstyearmark.findOne({ Email })
        .then(result => {
            if (result) {
                result.SubjectCfirst = SubjectCfirst
                result.SubjectCsecond = SubjectCsecond
                result.SubjectCthird = SubjectCthird
                result.save()
                return {
                    statusCode: 200,
                    status: true,
                    message: 'Mark upload successful'
                }
            } else {
                const newStudentmark = new mongodb.Civilfirstyearmark({
                    Email,
                    SubjectCfirst,
                    SubjectCsecond,
                    SubjectCthird,
                })
                newStudentmark.save()
                return {
                    statusCode: 202,
                    status: true,
                    message: 'Mark upload successful'
                }
            }
        })
}

const civilfirstyearsubD = (Email, SubjectDfirst, SubjectDsecond, SubjectDthird) => {
    return mongodb.Civilfirstyearmark.findOne({ Email })
        .then(result => {
            if (result) {
                result.SubjectDfirst = SubjectDfirst
                result.SubjectDsecond = SubjectDsecond
                result.SubjectDthird = SubjectDthird
                result.save()
                return {
                    statusCode: 200,
                    status: true,
                    message: 'Mark upload successful'
                }
            } else {
                const newStudentmark = new mongodb.Civilfirstyearmark({
                    Email,
                    SubjectDfirst,
                    SubjectDsecond,
                    SubjectDthird
                })
                newStudentmark.save()
                return {
                    statusCode: 202,
                    status: true,
                    message: 'Mark upload successful'
                }
            }
        })
}

const civilfirstyearsubE = (Email, SubjectEfirst, SubjectEsecond, SubjectEthird) => {
    return mongodb.Civilfirstyearmark.findOne({ Email })
        .then(result => {
            if (result) {
                result.SubjectEfirst = SubjectEfirst
                result.SubjectEsecond = SubjectEsecond
                result.SubjectEthird = SubjectEthird
                result.save()
                return {
                    statusCode: 200,
                    status: true,
                    message: 'Mark upload successful'
                }
            } else {
                const newStudentmark = new mongodb.Civilfirstyearmark({
                    Email,
                    SubjectEfirst,
                    SubjectEsecond,
                    SubjectEthird
                })
                newStudentmark.save()
                return {
                    statusCode: 202,
                    status: true,
                    message: 'Mark upload successful'
                }
            }
        })
}

const civilfirstyearsubF = (Email, SubjectFfirst, SubjectFsecond, SubjectFthird) => {
    return mongodb.Civilfirstyearmark.findOne({ Email })
        .then(result => {
            if (result) {
                result.SubjectFfirst = SubjectFfirst
                result.SubjectFsecond = SubjectFsecond
                result.SubjectFthird = SubjectFthird
                result.save()
                return {
                    statusCode: 200,
                    status: true,
                    message: 'Mark upload successful'
                }
            } else {
                const newStudentmark = new mongodb.Civilfirstyearmark({
                    Email,
                    SubjectFfirst,
                    SubjectFsecond,
                    SubjectFthird
                })
                newStudentmark.save()
                return {
                    statusCode: 202,
                    status: true,
                    message: 'Mark upload successful'
                }
            }
        })
}


const csfirstyearsubA = (Email, SubjectAfirst, SubjectAsecond, SubjectAthird) => {
    return mongodb.Csfirstyearmark.findOne({ Email })
        .then(result => {
            if (result) {
                result.SubjectAfirst = SubjectAfirst
                result.SubjectAsecond = SubjectAsecond
                result.SubjectAthird = SubjectAthird
                result.save()
                return {
                    statusCode: 200,
                    status: true,
                    message: 'Mark upload successful'
                }
            } else {
                const newStudentmark = new mongodb.Csfirstyearmark({
                    Email,
                    SubjectAfirst,
                    SubjectAsecond,
                    SubjectAthird,
                })
                newStudentmark.save()
                return {
                    statusCode: 202,
                    status: true,
                    message: 'Mark upload successful'
                }
            }
        })
}

const csfirstyearsubB = (Email, SubjectBfirst, SubjectBsecond, SubjectBthird) => {
    return mongodb.Csfirstyearmark.findOne({ Email })
        .then(result => {
            if (result) {
                result.SubjectBfirst = SubjectBfirst
                result.SubjectBsecond = SubjectBsecond
                result.SubjectBthird = SubjectBthird
                result.save()
                return {
                    statusCode: 200,
                    status: true,
                    message: 'Mark upload successful'
                }
            } else {
                const newStudentmark = new mongodb.Csfirstyearmark({
                    Email,
                    SubjectBfirst,
                    SubjectBsecond,
                    SubjectBthird,
                })
                newStudentmark.save()
                return {
                    statusCode: 202,
                    status: true,
                    message: 'Mark upload successful'
                }
            }
        })
}

const csfirstyearsubC = (Email, SubjectCfirst, SubjectCsecond, SubjectCthird) => {
    return mongodb.Csfirstyearmark.findOne({ Email })
        .then(result => {
            if (result) {
                result.SubjectCfirst = SubjectCfirst
                result.SubjectCsecond = SubjectCsecond
                result.SubjectCthird = SubjectCthird
                result.save()
                return {
                    statusCode: 200,
                    status: true,
                    message: 'Mark upload successful'
                }
            } else {
                const newStudentmark = new mongodb.Csfirstyearmark({
                    Email,
                    SubjectCfirst,
                    SubjectCsecond,
                    SubjectCthird,
                })
                newStudentmark.save()
                return {
                    statusCode: 202,
                    status: true,
                    message: 'Mark upload successful'
                }
            }
        })
}

const csfirstyearsubD = (Email, SubjectDfirst, SubjectDsecond, SubjectDthird) => {
    return mongodb.Csfirstyearmark.findOne({ Email })
        .then(result => {
            if (result) {
                result.SubjectDfirst = SubjectDfirst
                result.SubjectDsecond = SubjectDsecond
                result.SubjectDthird = SubjectDthird
                result.save()
                return {
                    statusCode: 200,
                    status: true,
                    message: 'Mark upload successful'
                }
            } else {
                const newStudentmark = new mongodb.Csfirstyearmark({
                    Email,
                    SubjectDfirst,
                    SubjectDsecond,
                    SubjectDthird
                })
                newStudentmark.save()
                return {
                    statusCode: 202,
                    status: true,
                    message: 'Mark upload successful'
                }
            }
        })
}

const csfirstyearsubE = (Email, SubjectEfirst, SubjectEsecond, SubjectEthird) => {
    return mongodb.Csfirstyearmark.findOne({ Email })
        .then(result => {
            if (result) {
                result.SubjectEfirst = SubjectEfirst
                result.SubjectEsecond = SubjectEsecond
                result.SubjectEthird = SubjectEthird
                result.save()
                return {
                    statusCode: 200,
                    status: true,
                    message: 'Mark upload successful'
                }
            } else {
                const newStudentmark = new mongodb.Csfirstyearmark({
                    Email,
                    SubjectEfirst,
                    SubjectEsecond,
                    SubjectEthird
                })
                newStudentmark.save()
                return {
                    statusCode: 202,
                    status: true,
                    message: 'Mark upload successful'
                }
            }
        })
}

const csfirstyearsubF = (Email, SubjectFfirst, SubjectFsecond, SubjectFthird) => {
    return mongodb.Csfirstyearmark.findOne({ Email })
        .then(result => {
            if (result) {
                result.SubjectFfirst = SubjectFfirst
                result.SubjectFsecond = SubjectFsecond
                result.SubjectFthird = SubjectFthird
                result.save()
                return {
                    statusCode: 200,
                    status: true,
                    message: 'Mark upload successful'
                }
            } else {
                const newStudentmark = new mongodb.Csfirstyearmark({
                    Email,
                    SubjectFfirst,
                    SubjectFsecond,
                    SubjectFthird
                })
                newStudentmark.save()
                return {
                    statusCode: 202,
                    status: true,
                    message: 'Mark upload successful'
                }
            }
        })
}


const mechfirstyearsubA = (Email, SubjectAfirst, SubjectAsecond, SubjectAthird) => {
    return mongodb.Mechfirstyearmark.findOne({ Email })
        .then(result => {
            if (result) {
                result.SubjectAfirst = SubjectAfirst
                result.SubjectAsecond = SubjectAsecond
                result.SubjectAthird = SubjectAthird
                result.save()
                return {
                    statusCode: 200,
                    status: true,
                    message: 'Mark upload successful'
                }
            } else {
                const newStudentmark = new mongodb.Mechfirstyearmark({
                    Email,
                    SubjectAfirst,
                    SubjectAsecond,
                    SubjectAthird,
                })
                newStudentmark.save()
                return {
                    statusCode: 202,
                    status: true,
                    message: 'Mark upload successful'
                }
            }
        })
}

const mechfirstyearsubB = (Email, SubjectBfirst, SubjectBsecond, SubjectBthird) => {
    return mongodb.Mechfirstyearmark.findOne({ Email })
        .then(result => {
            if (result) {
                result.SubjectBfirst = SubjectBfirst
                result.SubjectBsecond = SubjectBsecond
                result.SubjectBthird = SubjectBthird
                result.save()
                return {
                    statusCode: 200,
                    status: true,
                    message: 'Mark upload successful'
                }
            } else {
                const newStudentmark = new mongodb.Mechfirstyearmark({
                    Email,
                    SubjectBfirst,
                    SubjectBsecond,
                    SubjectBthird,
                })
                newStudentmark.save()
                return {
                    statusCode: 202,
                    status: true,
                    message: 'Mark upload successful'
                }
            }
        })
}

const mechfirstyearsubC = (Email, SubjectCfirst, SubjectCsecond, SubjectCthird) => {
    return mongodb.Mechfirstyearmark.findOne({ Email })
        .then(result => {
            if (result) {
                result.SubjectCfirst = SubjectCfirst
                result.SubjectCsecond = SubjectCsecond
                result.SubjectCthird = SubjectCthird
                result.save()
                return {
                    statusCode: 200,
                    status: true,
                    message: 'Mark upload successful'
                }
            } else {
                const newStudentmark = new mongodb.Mechfirstyearmark({
                    Email,
                    SubjectCfirst,
                    SubjectCsecond,
                    SubjectCthird,
                })
                newStudentmark.save()
                return {
                    statusCode: 202,
                    status: true,
                    message: 'Mark upload successful'
                }
            }
        })
}

const mechfirstyearsubD = (Email, SubjectDfirst, SubjectDsecond, SubjectDthird) => {
    return mongodb.Mechfirstyearmark.findOne({ Email })
        .then(result => {
            if (result) {
                result.SubjectDfirst = SubjectDfirst
                result.SubjectDsecond = SubjectDsecond
                result.SubjectDthird = SubjectDthird
                result.save()
                return {
                    statusCode: 200,
                    status: true,
                    message: 'Mark upload successful'
                }
            } else {
                const newStudentmark = new mongodb.Mechfirstyearmark({
                    Email,
                    SubjectDfirst,
                    SubjectDsecond,
                    SubjectDthird
                })
                newStudentmark.save()
                return {
                    statusCode: 202,
                    status: true,
                    message: 'Mark upload successful'
                }
            }
        })
}

const mechfirstyearsubE = (Email, SubjectEfirst, SubjectEsecond, SubjectEthird) => {
    return mongodb.Mechfirstyearmark.findOne({ Email })
        .then(result => {
            if (result) {
                result.SubjectEfirst = SubjectEfirst
                result.SubjectEsecond = SubjectEsecond
                result.SubjectEthird = SubjectEthird
                result.save()
                return {
                    statusCode: 200,
                    status: true,
                    message: 'Mark upload successful'
                }
            } else {
                const newStudentmark = new mongodb.Mechfirstyearmark({
                    Email,
                    SubjectEfirst,
                    SubjectEsecond,
                    SubjectEthird
                })
                newStudentmark.save()
                return {
                    statusCode: 202,
                    status: true,
                    message: 'Mark upload successful'
                }
            }
        })
}

const mechfirstyearsubF = (Email, SubjectFfirst, SubjectFsecond, SubjectFthird) => {
    return mongodb.Mechfirstyearmark.findOne({ Email })
        .then(result => {
            if (result) {
                result.SubjectFfirst = SubjectFfirst
                result.SubjectFsecond = SubjectFsecond
                result.SubjectFthird = SubjectFthird
                result.save()
                return {
                    statusCode: 200,
                    status: true,
                    message: 'Mark upload successful'
                }
            } else {
                const newStudentmark = new mongodb.Mechfirstyearmark({
                    Email,
                    SubjectFfirst,
                    SubjectFsecond,
                    SubjectFthird
                })
                newStudentmark.save()
                return {
                    statusCode: 202,
                    status: true,
                    message: 'Mark upload successful'
                }
            }
        })
}


const civilsecondyearsubA = (Email, SubjectAfirst, SubjectAsecond, SubjectAthird) => {
    return mongodb.Civilsecondyearmark.findOne({ Email })
        .then(result => {
            if (result) {
                result.SubjectAfirst = SubjectAfirst
                result.SubjectAsecond = SubjectAsecond
                result.SubjectAthird = SubjectAthird
                result.save()
                return {
                    statusCode: 200,
                    status: true,
                    message: 'Mark upload successful'
                }
            } else {
                const newStudentmark = new mongodb.Civilsecondyearmark({
                    Email,
                    SubjectAfirst,
                    SubjectAsecond,
                    SubjectAthird,
                })
                newStudentmark.save()
                return {
                    statusCode: 202,
                    status: true,
                    message: 'Mark upload successful'
                }
            }
        })
}

const civilsecondyearsubB = (Email, SubjectBfirst, SubjectBsecond, SubjectBthird) => {
    return mongodb.Civilsecondyearmark.findOne({ Email })
        .then(result => {
            if (result) {
                result.SubjectBfirst = SubjectBfirst
                result.SubjectBsecond = SubjectBsecond
                result.SubjectBthird = SubjectBthird
                result.save()
                return {
                    statusCode: 200,
                    status: true,
                    message: 'Mark upload successful'
                }
            } else {
                const newStudentmark = new mongodb.Civilsecondyearmark({
                    Email,
                    SubjectBfirst,
                    SubjectBsecond,
                    SubjectBthird,
                })
                newStudentmark.save()
                return {
                    statusCode: 202,
                    status: true,
                    message: 'Mark upload successful'
                }
            }
        })
}

const civilsecondyearsubC = (Email, SubjectCfirst, SubjectCsecond, SubjectCthird) => {
    return mongodb.Civilsecondyearmark.findOne({ Email })
        .then(result => {
            if (result) {
                result.SubjectCfirst = SubjectCfirst
                result.SubjectCsecond = SubjectCsecond
                result.SubjectCthird = SubjectCthird
                result.save()
                return {
                    statusCode: 200,
                    status: true,
                    message: 'Mark upload successful'
                }
            } else {
                const newStudentmark = new mongodb.Civilsecondyearmark({
                    Email,
                    SubjectCfirst,
                    SubjectCsecond,
                    SubjectCthird,
                })
                newStudentmark.save()
                return {
                    statusCode: 202,
                    status: true,
                    message: 'Mark upload successful'
                }
            }
        })
}

const civilsecondyearsubD = (Email, SubjectDfirst, SubjectDsecond, SubjectDthird) => {
    return mongodb.Civilsecondyearmark.findOne({ Email })
        .then(result => {
            if (result) {
                result.SubjectDfirst = SubjectDfirst
                result.SubjectDsecond = SubjectDsecond
                result.SubjectDthird = SubjectDthird
                result.save()
                return {
                    statusCode: 200,
                    status: true,
                    message: 'Mark upload successful'
                }
            } else {
                const newStudentmark = new mongodb.Civilsecondyearmark({
                    Email,
                    SubjectDfirst,
                    SubjectDsecond,
                    SubjectDthird
                })
                newStudentmark.save()
                return {
                    statusCode: 202,
                    status: true,
                    message: 'Mark upload successful'
                }
            }
        })
}

const civilsecondyearsubE = (Email, SubjectEfirst, SubjectEsecond, SubjectEthird) => {
    return mongodb.Civilsecondyearmark.findOne({ Email })
        .then(result => {
            if (result) {
                result.SubjectEfirst = SubjectEfirst
                result.SubjectEsecond = SubjectEsecond
                result.SubjectEthird = SubjectEthird
                result.save()
                return {
                    statusCode: 200,
                    status: true,
                    message: 'Mark upload successful'
                }
            } else {
                const newStudentmark = new mongodb.Civilsecondyearmark({
                    Email,
                    SubjectEfirst,
                    SubjectEsecond,
                    SubjectEthird
                })
                newStudentmark.save()
                return {
                    statusCode: 202,
                    status: true,
                    message: 'Mark upload successful'
                }
            }
        })
}

const civilsecondyearsubF = (Email, SubjectFfirst, SubjectFsecond, SubjectFthird) => {
    return mongodb.Civilsecondyearmark.findOne({ Email })
        .then(result => {
            if (result) {
                result.SubjectFfirst = SubjectFfirst
                result.SubjectFsecond = SubjectFsecond
                result.SubjectFthird = SubjectFthird
                result.save()
                return {
                    statusCode: 200,
                    status: true,
                    message: 'Mark upload successful'
                }
            } else {
                const newStudentmark = new mongodb.Civilsecondyearmark({
                    Email,
                    SubjectFfirst,
                    SubjectFsecond,
                    SubjectFthird
                })
                newStudentmark.save()
                return {
                    statusCode: 202,
                    status: true,
                    message: 'Mark upload successful'
                }
            }
        })
}


const cssecondyearsubA = (Email, SubjectAfirst, SubjectAsecond, SubjectAthird) => {
    return mongodb.Cssecondyearmark.findOne({ Email })
        .then(result => {
            if (result) {
                result.SubjectAfirst = SubjectAfirst
                result.SubjectAsecond = SubjectAsecond
                result.SubjectAthird = SubjectAthird
                result.save()
                return {
                    statusCode: 200,
                    status: true,
                    message: 'Mark upload successful'
                }
            } else {
                const newStudentmark = new mongodb.Cssecondyearmark({
                    Email,
                    SubjectAfirst,
                    SubjectAsecond,
                    SubjectAthird,
                })
                newStudentmark.save()
                return {
                    statusCode: 202,
                    status: true,
                    message: 'Mark upload successful'
                }
            }
        })
}

const cssecondyearsubB = (Email, SubjectBfirst, SubjectBsecond, SubjectBthird) => {
    return mongodb.Cssecondyearmark.findOne({ Email })
        .then(result => {
            if (result) {
                result.SubjectBfirst = SubjectBfirst
                result.SubjectBsecond = SubjectBsecond
                result.SubjectBthird = SubjectBthird
                result.save()
                return {
                    statusCode: 200,
                    status: true,
                    message: 'Mark upload successful'
                }
            } else {
                const newStudentmark = new mongodb.Cssecondyearmark({
                    Email,
                    SubjectBfirst,
                    SubjectBsecond,
                    SubjectBthird,
                })
                newStudentmark.save()
                return {
                    statusCode: 202,
                    status: true,
                    message: 'Mark upload successful'
                }
            }
        })
}

const cssecondyearsubC = (Email, SubjectCfirst, SubjectCsecond, SubjectCthird) => {
    return mongodb.Cssecondyearmark.findOne({ Email })
        .then(result => {
            if (result) {
                result.SubjectCfirst = SubjectCfirst
                result.SubjectCsecond = SubjectCsecond
                result.SubjectCthird = SubjectCthird
                result.save()
                return {
                    statusCode: 200,
                    status: true,
                    message: 'Mark upload successful'
                }
            } else {
                const newStudentmark = new mongodb.Cssecondyearmark({
                    Email,
                    SubjectCfirst,
                    SubjectCsecond,
                    SubjectCthird,
                })
                newStudentmark.save()
                return {
                    statusCode: 202,
                    status: true,
                    message: 'Mark upload successful'
                }
            }
        })
}

const cssecondyearsubD = (Email, SubjectDfirst, SubjectDsecond, SubjectDthird) => {
    return mongodb.Cssecondyearmark.findOne({ Email })
        .then(result => {
            if (result) {
                result.SubjectDfirst = SubjectDfirst
                result.SubjectDsecond = SubjectDsecond
                result.SubjectDthird = SubjectDthird
                result.save()
                return {
                    statusCode: 200,
                    status: true,
                    message: 'Mark upload successful'
                }
            } else {
                const newStudentmark = new mongodb.Cssecondyearmark({
                    Email,
                    SubjectDfirst,
                    SubjectDsecond,
                    SubjectDthird
                })
                newStudentmark.save()
                return {
                    statusCode: 202,
                    status: true,
                    message: 'Mark upload successful'
                }
            }
        })
}

const cssecondyearsubE = (Email, SubjectEfirst, SubjectEsecond, SubjectEthird) => {
    return mongodb.Cssecondyearmark.findOne({ Email })
        .then(result => {
            if (result) {
                result.SubjectEfirst = SubjectEfirst
                result.SubjectEsecond = SubjectEsecond
                result.SubjectEthird = SubjectEthird
                result.save()
                return {
                    statusCode: 200,
                    status: true,
                    message: 'Mark upload successful'
                }
            } else {
                const newStudentmark = new mongodb.Cssecondyearmark({
                    Email,
                    SubjectEfirst,
                    SubjectEsecond,
                    SubjectEthird
                })
                newStudentmark.save()
                return {
                    statusCode: 202,
                    status: true,
                    message: 'Mark upload successful'
                }
            }
        })
}

const cssecondyearsubF = (Email, SubjectFfirst, SubjectFsecond, SubjectFthird) => {
    return mongodb.Cssecondyearmark.findOne({ Email })
        .then(result => {
            if (result) {
                result.SubjectFfirst = SubjectFfirst
                result.SubjectFsecond = SubjectFsecond
                result.SubjectFthird = SubjectFthird
                result.save()
                return {
                    statusCode: 200,
                    status: true,
                    message: 'Mark upload successful'
                }
            } else {
                const newStudentmark = new mongodb.Cssecondyearmark({
                    Email,
                    SubjectFfirst,
                    SubjectFsecond,
                    SubjectFthird
                })
                newStudentmark.save()
                return {
                    statusCode: 202,
                    status: true,
                    message: 'Mark upload successful'
                }
            }
        })
}


const mechsecondyearsubA = (Email, SubjectAfirst, SubjectAsecond, SubjectAthird) => {
    return mongodb.Mechsecondyearmark.findOne({ Email })
        .then(result => {
            if (result) {
                result.SubjectAfirst = SubjectAfirst
                result.SubjectAsecond = SubjectAsecond
                result.SubjectAthird = SubjectAthird
                result.save()
                return {
                    statusCode: 200,
                    status: true,
                    message: 'Mark upload successful'
                }
            } else {
                const newStudentmark = new mongodb.Mechsecondyearmark({
                    Email,
                    SubjectAfirst,
                    SubjectAsecond,
                    SubjectAthird,
                })
                newStudentmark.save()
                return {
                    statusCode: 202,
                    status: true,
                    message: 'Mark upload successful'
                }
            }
        })
}

const mechsecondyearsubB = (Email, SubjectBfirst, SubjectBsecond, SubjectBthird) => {
    return mongodb.Mechsecondyearmark.findOne({ Email })
        .then(result => {
            if (result) {
                result.SubjectBfirst = SubjectBfirst
                result.SubjectBsecond = SubjectBsecond
                result.SubjectBthird = SubjectBthird
                result.save()
                return {
                    statusCode: 200,
                    status: true,
                    message: 'Mark upload successful'
                }
            } else {
                const newStudentmark = new mongodb.Mechsecondyearmark({
                    Email,
                    SubjectBfirst,
                    SubjectBsecond,
                    SubjectBthird,
                })
                newStudentmark.save()
                return {
                    statusCode: 202,
                    status: true,
                    message: 'Mark upload successful'
                }
            }
        })
}

const mechsecondyearsubC = (Email, SubjectCfirst, SubjectCsecond, SubjectCthird) => {
    return mongodb.Mechsecondyearmark.findOne({ Email })
        .then(result => {
            if (result) {
                result.SubjectCfirst = SubjectCfirst
                result.SubjectCsecond = SubjectCsecond
                result.SubjectCthird = SubjectCthird
                result.save()
                return {
                    statusCode: 200,
                    status: true,
                    message: 'Mark upload successful'
                }
            } else {
                const newStudentmark = new mongodb.Mechsecondyearmark({
                    Email,
                    SubjectCfirst,
                    SubjectCsecond,
                    SubjectCthird,
                })
                newStudentmark.save()
                return {
                    statusCode: 202,
                    status: true,
                    message: 'Mark upload successful'
                }
            }
        })
}

const mechsecondyearsubD = (Email, SubjectDfirst, SubjectDsecond, SubjectDthird) => {
    return mongodb.Mechsecondyearmark.findOne({ Email })
        .then(result => {
            if (result) {
                result.SubjectDfirst = SubjectDfirst
                result.SubjectDsecond = SubjectDsecond
                result.SubjectDthird = SubjectDthird
                result.save()
                return {
                    statusCode: 200,
                    status: true,
                    message: 'Mark upload successful'
                }
            } else {
                const newStudentmark = new mongodb.Mechsecondyearmark({
                    Email,
                    SubjectDfirst,
                    SubjectDsecond,
                    SubjectDthird
                })
                newStudentmark.save()
                return {
                    statusCode: 202,
                    status: true,
                    message: 'Mark upload successful'
                }
            }
        })
}

const mechsecondyearsubE = (Email, SubjectEfirst, SubjectEsecond, SubjectEthird) => {
    return mongodb.Mechsecondyearmark.findOne({ Email })
        .then(result => {
            if (result) {
                result.SubjectEfirst = SubjectEfirst
                result.SubjectEsecond = SubjectEsecond
                result.SubjectEthird = SubjectEthird
                result.save()
                return {
                    statusCode: 200,
                    status: true,
                    message: 'Mark upload successful'
                }
            } else {
                const newStudentmark = new mongodb.Mechsecondyearmark({
                    Email,
                    SubjectEfirst,
                    SubjectEsecond,
                    SubjectEthird
                })
                newStudentmark.save()
                return {
                    statusCode: 202,
                    status: true,
                    message: 'Mark upload successful'
                }
            }
        })
}

const mechsecondyearsubF = (Email, SubjectFfirst, SubjectFsecond, SubjectFthird) => {
    return mongodb.Mechsecondyearmark.findOne({ Email })
        .then(result => {
            if (result) {
                result.SubjectFfirst = SubjectFfirst
                result.SubjectFsecond = SubjectFsecond
                result.SubjectFthird = SubjectFthird
                result.save()
                return {
                    statusCode: 200,
                    status: true,
                    message: 'Mark upload successful'
                }
            } else {
                const newStudentmark = new mongodb.Mechsecondyearmark({
                    Email,
                    SubjectFfirst,
                    SubjectFsecond,
                    SubjectFthird
                })
                newStudentmark.save()
                return {
                    statusCode: 202,
                    status: true,
                    message: 'Mark upload successful'
                }
            }
        })
}


const civilthirdyearsubA = (Email, SubjectAfirst, SubjectAsecond, SubjectAthird) => {
    return mongodb.Civilthirdyearmark.findOne({ Email })
        .then(result => {
            if (result) {
                result.SubjectAfirst = SubjectAfirst
                result.SubjectAsecond = SubjectAsecond
                result.SubjectAthird = SubjectAthird
                result.save()
                return {
                    statusCode: 200,
                    status: true,
                    message: 'Mark upload successful'
                }
            } else {
                const newStudentmark = new mongodb.Civilthirdyearmark({
                    Email,
                    SubjectAfirst,
                    SubjectAsecond,
                    SubjectAthird,
                })
                newStudentmark.save()
                return {
                    statusCode: 202,
                    status: true,
                    message: 'Mark upload successful'
                }
            }
        })
}

const civilthirdyearsubB = (Email, SubjectBfirst, SubjectBsecond, SubjectBthird) => {
    return mongodb.Civilthirdyearmark.findOne({ Email })
        .then(result => {
            if (result) {
                result.SubjectBfirst = SubjectBfirst
                result.SubjectBsecond = SubjectBsecond
                result.SubjectBthird = SubjectBthird
                result.save()
                return {
                    statusCode: 200,
                    status: true,
                    message: 'Mark upload successful'
                }
            } else {
                const newStudentmark = new mongodb.Civilthirdyearmark({
                    Email,
                    SubjectBfirst,
                    SubjectBsecond,
                    SubjectBthird,
                })
                newStudentmark.save()
                return {
                    statusCode: 202,
                    status: true,
                    message: 'Mark upload successful'
                }
            }
        })
}

const civilthirdyearsubC = (Email, SubjectCfirst, SubjectCsecond, SubjectCthird) => {
    return mongodb.Civilthirdyearmark.findOne({ Email })
        .then(result => {
            if (result) {
                result.SubjectCfirst = SubjectCfirst
                result.SubjectCsecond = SubjectCsecond
                result.SubjectCthird = SubjectCthird
                result.save()
                return {
                    statusCode: 200,
                    status: true,
                    message: 'Mark upload successful'
                }
            } else {
                const newStudentmark = new mongodb.Civilthirdyearmark({
                    Email,
                    SubjectCfirst,
                    SubjectCsecond,
                    SubjectCthird,
                })
                newStudentmark.save()
                return {
                    statusCode: 202,
                    status: true,
                    message: 'Mark upload successful'
                }
            }
        })
}

const civilthirdyearsubD = (Email, SubjectDfirst, SubjectDsecond, SubjectDthird) => {
    return mongodb.Civilthirdyearmark.findOne({ Email })
        .then(result => {
            if (result) {
                result.SubjectDfirst = SubjectDfirst
                result.SubjectDsecond = SubjectDsecond
                result.SubjectDthird = SubjectDthird
                result.save()
                return {
                    statusCode: 200,
                    status: true,
                    message: 'Mark upload successful'
                }
            } else {
                const newStudentmark = new mongodb.Civilthirdyearmark({
                    Email,
                    SubjectDfirst,
                    SubjectDsecond,
                    SubjectDthird
                })
                newStudentmark.save()
                return {
                    statusCode: 202,
                    status: true,
                    message: 'Mark upload successful'
                }
            }
        })
}

const civilthirdyearsubE = (Email, SubjectEfirst, SubjectEsecond, SubjectEthird) => {
    return mongodb.Civilthirdyearmark.findOne({ Email })
        .then(result => {
            if (result) {
                result.SubjectEfirst = SubjectEfirst
                result.SubjectEsecond = SubjectEsecond
                result.SubjectEthird = SubjectEthird
                result.save()
                return {
                    statusCode: 200,
                    status: true,
                    message: 'Mark upload successful'
                }
            } else {
                const newStudentmark = new mongodb.Civilthirdyearmark({
                    Email,
                    SubjectEfirst,
                    SubjectEsecond,
                    SubjectEthird
                })
                newStudentmark.save()
                return {
                    statusCode: 202,
                    status: true,
                    message: 'Mark upload successful'
                }
            }
        })
}

const civilthirdyearsubF = (Email, SubjectFfirst, SubjectFsecond, SubjectFthird) => {
    return mongodb.Civilthirdyearmark.findOne({ Email })
        .then(result => {
            if (result) {
                result.SubjectFfirst = SubjectFfirst
                result.SubjectFsecond = SubjectFsecond
                result.SubjectFthird = SubjectFthird
                result.save()
                return {
                    statusCode: 200,
                    status: true,
                    message: 'Mark upload successful'
                }
            } else {
                const newStudentmark = new mongodb.Civilthirdyearmark({
                    Email,
                    SubjectFfirst,
                    SubjectFsecond,
                    SubjectFthird
                })
                newStudentmark.save()
                return {
                    statusCode: 202,
                    status: true,
                    message: 'Mark upload successful'
                }
            }
        })
}


const csthirdyearsubA = (Email, SubjectAfirst, SubjectAsecond, SubjectAthird) => {
    return mongodb.Csthirdyearmark.findOne({ Email })
        .then(result => {
            if (result) {
                result.SubjectAfirst = SubjectAfirst
                result.SubjectAsecond = SubjectAsecond
                result.SubjectAthird = SubjectAthird
                result.save()
                return {
                    statusCode: 200,
                    status: true,
                    message: 'Mark upload successful'
                }
            } else {
                const newStudentmark = new mongodb.Csthirdyearmark({
                    Email,
                    SubjectAfirst,
                    SubjectAsecond,
                    SubjectAthird,
                })
                newStudentmark.save()
                return {
                    statusCode: 202,
                    status: true,
                    message: 'Mark upload successful'
                }
            }
        })
}

const csthirdyearsubB = (Email, SubjectBfirst, SubjectBsecond, SubjectBthird) => {
    return mongodb.Csthirdyearmark.findOne({ Email })
        .then(result => {
            if (result) {
                result.SubjectBfirst = SubjectBfirst
                result.SubjectBsecond = SubjectBsecond
                result.SubjectBthird = SubjectBthird
                result.save()
                return {
                    statusCode: 200,
                    status: true,
                    message: 'Mark upload successful'
                }
            } else {
                const newStudentmark = new mongodb.Csthirdyearmark({
                    Email,
                    SubjectBfirst,
                    SubjectBsecond,
                    SubjectBthird,
                })
                newStudentmark.save()
                return {
                    statusCode: 202,
                    status: true,
                    message: 'Mark upload successful'
                }
            }
        })
}

const csthirdyearsubC = (Email, SubjectCfirst, SubjectCsecond, SubjectCthird) => {
    return mongodb.Csthirdyearmark.findOne({ Email })
        .then(result => {
            if (result) {
                result.SubjectCfirst = SubjectCfirst
                result.SubjectCsecond = SubjectCsecond
                result.SubjectCthird = SubjectCthird
                result.save()
                return {
                    statusCode: 200,
                    status: true,
                    message: 'Mark upload successful'
                }
            } else {
                const newStudentmark = new mongodb.Csthirdyearmark({
                    Email,
                    SubjectCfirst,
                    SubjectCsecond,
                    SubjectCthird,
                })
                newStudentmark.save()
                return {
                    statusCode: 202,
                    status: true,
                    message: 'Mark upload successful'
                }
            }
        })
}

const csthirdyearsubD = (Email, SubjectDfirst, SubjectDsecond, SubjectDthird) => {
    return mongodb.Csthirdyearmark.findOne({ Email })
        .then(result => {
            if (result) {
                result.SubjectDfirst = SubjectDfirst
                result.SubjectDsecond = SubjectDsecond
                result.SubjectDthird = SubjectDthird
                result.save()
                return {
                    statusCode: 200,
                    status: true,
                    message: 'Mark upload successful'
                }
            } else {
                const newStudentmark = new mongodb.Csthirdyearmark({
                    Email,
                    SubjectDfirst,
                    SubjectDsecond,
                    SubjectDthird
                })
                newStudentmark.save()
                return {
                    statusCode: 202,
                    status: true,
                    message: 'Mark upload successful'
                }
            }
        })
}

const csthirdyearsubE = (Email, SubjectEfirst, SubjectEsecond, SubjectEthird) => {
    return mongodb.Csthirdyearmark.findOne({ Email })
        .then(result => {
            if (result) {
                result.SubjectEfirst = SubjectEfirst
                result.SubjectEsecond = SubjectEsecond
                result.SubjectEthird = SubjectEthird
                result.save()
                return {
                    statusCode: 200,
                    status: true,
                    message: 'Mark upload successful'
                }
            } else {
                const newStudentmark = new mongodb.Csthirdyearmark({
                    Email,
                    SubjectEfirst,
                    SubjectEsecond,
                    SubjectEthird
                })
                newStudentmark.save()
                return {
                    statusCode: 202,
                    status: true,
                    message: 'Mark upload successful'
                }
            }
        })
}

const csthirdyearsubF = (Email, SubjectFfirst, SubjectFsecond, SubjectFthird) => {
    return mongodb.Csthirdyearmark.findOne({ Email })
        .then(result => {
            if (result) {
                result.SubjectFfirst = SubjectFfirst
                result.SubjectFsecond = SubjectFsecond
                result.SubjectFthird = SubjectFthird
                result.save()
                return {
                    statusCode: 200,
                    status: true,
                    message: 'Mark upload successful'
                }
            } else {
                const newStudentmark = new mongodb.Csthirdyearmark({
                    Email,
                    SubjectFfirst,
                    SubjectFsecond,
                    SubjectFthird
                })
                newStudentmark.save()
                return {
                    statusCode: 202,
                    status: true,
                    message: 'Mark upload successful'
                }
            }
        })
}


const mechthirdyearsubA = (Email, SubjectAfirst, SubjectAsecond, SubjectAthird) => {
    return mongodb.Mechthirdyearmark.findOne({ Email })
        .then(result => {
            if (result) {
                result.SubjectAfirst = SubjectAfirst
                result.SubjectAsecond = SubjectAsecond
                result.SubjectAthird = SubjectAthird
                result.save()
                return {
                    statusCode: 200,
                    status: true,
                    message: 'Mark upload successful'
                }
            } else {
                const newStudentmark = new mongodb.Mechthirdyearmark({
                    Email,
                    SubjectAfirst,
                    SubjectAsecond,
                    SubjectAthird,
                })
                newStudentmark.save()
                return {
                    statusCode: 202,
                    status: true,
                    message: 'Mark upload successful'
                }
            }
        })
}

const mechthirdyearsubB = (Email, SubjectBfirst, SubjectBsecond, SubjectBthird) => {
    return mongodb.Mechthirdyearmark.findOne({ Email })
        .then(result => {
            if (result) {
                result.SubjectBfirst = SubjectBfirst
                result.SubjectBsecond = SubjectBsecond
                result.SubjectBthird = SubjectBthird
                result.save()
                return {
                    statusCode: 200,
                    status: true,
                    message: 'Mark upload successful'
                }
            } else {
                const newStudentmark = new mongodb.Mechthirdyearmark({
                    Email,
                    SubjectBfirst,
                    SubjectBsecond,
                    SubjectBthird,
                })
                newStudentmark.save()
                return {
                    statusCode: 202,
                    status: true,
                    message: 'Mark upload successful'
                }
            }
        })
}

const mechthirdyearsubC = (Email, SubjectCfirst, SubjectCsecond, SubjectCthird) => {
    return mongodb.Mechthirdyearmark.findOne({ Email })
        .then(result => {
            if (result) {
                result.SubjectCfirst = SubjectCfirst
                result.SubjectCsecond = SubjectCsecond
                result.SubjectCthird = SubjectCthird
                result.save()
                return {
                    statusCode: 200,
                    status: true,
                    message: 'Mark upload successful'
                }
            } else {
                const newStudentmark = new mongodb.Mechthirdyearmark({
                    Email,
                    SubjectCfirst,
                    SubjectCsecond,
                    SubjectCthird,
                })
                newStudentmark.save()
                return {
                    statusCode: 202,
                    status: true,
                    message: 'Mark upload successful'
                }
            }
        })
}

const mechthirdyearsubD = (Email, SubjectDfirst, SubjectDsecond, SubjectDthird) => {
    return mongodb.Mechthirdyearmark.findOne({ Email })
        .then(result => {
            if (result) {
                result.SubjectDfirst = SubjectDfirst
                result.SubjectDsecond = SubjectDsecond
                result.SubjectDthird = SubjectDthird
                result.save()
                return {
                    statusCode: 200,
                    status: true,
                    message: 'Mark upload successful'
                }
            } else {
                const newStudentmark = new mongodb.Mechthirdyearmark({
                    Email,
                    SubjectDfirst,
                    SubjectDsecond,
                    SubjectDthird
                })
                newStudentmark.save()
                return {
                    statusCode: 202,
                    status: true,
                    message: 'Mark upload successful'
                }
            }
        })
}

const mechthirdyearsubE = (Email, SubjectEfirst, SubjectEsecond, SubjectEthird) => {
    return mongodb.Mechthirdyearmark.findOne({ Email })
        .then(result => {
            if (result) {
                result.SubjectEfirst = SubjectEfirst
                result.SubjectEsecond = SubjectEsecond
                result.SubjectEthird = SubjectEthird
                result.save()
                return {
                    statusCode: 200,
                    status: true,
                    message: 'Mark upload successful'
                }
            } else {
                const newStudentmark = new mongodb.Mechsecondyearmark({
                    Email,
                    SubjectEfirst,
                    SubjectEsecond,
                    SubjectEthird
                })
                newStudentmark.save()
                return {
                    statusCode: 202,
                    status: true,
                    message: 'Mark upload successful'
                }
            }
        })
}

const mechthirdyearsubF = (Email, SubjectFfirst, SubjectFsecond, SubjectFthird) => {
    return mongodb.Mechthirdyearmark.findOne({ Email })
        .then(result => {
            if (result) {
                result.SubjectFfirst = SubjectFfirst
                result.SubjectFsecond = SubjectFsecond
                result.SubjectFthird = SubjectFthird
                result.save()
                return {
                    statusCode: 200,
                    status: true,
                    message: 'Mark upload successful'
                }
            } else {
                const newStudentmark = new mongodb.Mechthirdyearmark({
                    Email,
                    SubjectFfirst,
                    SubjectFsecond,
                    SubjectFthird
                })
                newStudentmark.save()
                return {
                    statusCode: 202,
                    status: true,
                    message: 'Mark upload successful'
                }
            }
        })
}


const civilfourthyearsubA = (Email, SubjectAfirst, SubjectAsecond, SubjectAthird) => {
    return mongodb.Civilfourthyearmark.findOne({ Email })
        .then(result => {
            if (result) {
                result.SubjectAfirst = SubjectAfirst
                result.SubjectAsecond = SubjectAsecond
                result.SubjectAthird = SubjectAthird
                result.save()
                return {
                    statusCode: 200,
                    status: true,
                    message: 'Mark upload successful'
                }
            } else {
                const newStudentmark = new mongodb.Civilfourthyearmark({
                    Email,
                    SubjectAfirst,
                    SubjectAsecond,
                    SubjectAthird,
                })
                newStudentmark.save()
                return {
                    statusCode: 202,
                    status: true,
                    message: 'Mark upload successful'
                }
            }
        })
}

const civilfourthyearsubB = (Email, SubjectBfirst, SubjectBsecond, SubjectBthird) => {
    return mongodb.Civilfourthyearmark.findOne({ Email })
        .then(result => {
            if (result) {
                result.SubjectBfirst = SubjectBfirst
                result.SubjectBsecond = SubjectBsecond
                result.SubjectBthird = SubjectBthird
                result.save()
                return {
                    statusCode: 200,
                    status: true,
                    message: 'Mark upload successful'
                }
            } else {
                const newStudentmark = new mongodb.Civilfourthyearmark({
                    Email,
                    SubjectBfirst,
                    SubjectBsecond,
                    SubjectBthird,
                })
                newStudentmark.save()
                return {
                    statusCode: 202,
                    status: true,
                    message: 'Mark upload successful'
                }
            }
        })
}

const civilfourthyearsubC = (Email, SubjectCfirst, SubjectCsecond, SubjectCthird) => {
    return mongodb.Civilfourthyearmark.findOne({ Email })
        .then(result => {
            if (result) {
                result.SubjectCfirst = SubjectCfirst
                result.SubjectCsecond = SubjectCsecond
                result.SubjectCthird = SubjectCthird
                result.save()
                return {
                    statusCode: 200,
                    status: true,
                    message: 'Mark upload successful'
                }
            } else {
                const newStudentmark = new mongodb.Civilfourthyearmark({
                    Email,
                    SubjectCfirst,
                    SubjectCsecond,
                    SubjectCthird,
                })
                newStudentmark.save()
                return {
                    statusCode: 202,
                    status: true,
                    message: 'Mark upload successful'
                }
            }
        })
}

const civilfourthyearsubD = (Email, SubjectDfirst, SubjectDsecond, SubjectDthird) => {
    return mongodb.Civilfourthyearmark.findOne({ Email })
        .then(result => {
            if (result) {
                result.SubjectDfirst = SubjectDfirst
                result.SubjectDsecond = SubjectDsecond
                result.SubjectDthird = SubjectDthird
                result.save()
                return {
                    statusCode: 200,
                    status: true,
                    message: 'Mark upload successful'
                }
            } else {
                const newStudentmark = new mongodb.Civilfourthyearmark({
                    Email,
                    SubjectDfirst,
                    SubjectDsecond,
                    SubjectDthird
                })
                newStudentmark.save()
                return {
                    statusCode: 202,
                    status: true,
                    message: 'Mark upload successful'
                }
            }
        })
}

const civilfourthyearsubE = (Email, SubjectEfirst, SubjectEsecond, SubjectEthird) => {
    return mongodb.Civilfourthyearmark.findOne({ Email })
        .then(result => {
            if (result) {
                result.SubjectEfirst = SubjectEfirst
                result.SubjectEsecond = SubjectEsecond
                result.SubjectEthird = SubjectEthird
                result.save()
                return {
                    statusCode: 200,
                    status: true,
                    message: 'Mark upload successful'
                }
            } else {
                const newStudentmark = new mongodb.Civilfourthyearmark({
                    Email,
                    SubjectEfirst,
                    SubjectEsecond,
                    SubjectEthird
                })
                newStudentmark.save()
                return {
                    statusCode: 202,
                    status: true,
                    message: 'Mark upload successful'
                }
            }
        })
}

const civilfourthyearsubF = (Email, SubjectFfirst, SubjectFsecond, SubjectFthird) => {
    return mongodb.Civilfourthyearmark.findOne({ Email })
        .then(result => {
            if (result) {
                result.SubjectFfirst = SubjectFfirst
                result.SubjectFsecond = SubjectFsecond
                result.SubjectFthird = SubjectFthird
                result.save()
                return {
                    statusCode: 200,
                    status: true,
                    message: 'Mark upload successful'
                }
            } else {
                const newStudentmark = new mongodb.Civilfourthyearmark({
                    Email,
                    SubjectFfirst,
                    SubjectFsecond,
                    SubjectFthird
                })
                newStudentmark.save()
                return {
                    statusCode: 202,
                    status: true,
                    message: 'Mark upload successful'
                }
            }
        })
}


const csfourthyearsubA = (Email, SubjectAfirst, SubjectAsecond, SubjectAthird) => {
    return mongodb.Csfourthyearmark.findOne({ Email })
        .then(result => {
            if (result) {
                result.SubjectAfirst = SubjectAfirst
                result.SubjectAsecond = SubjectAsecond
                result.SubjectAthird = SubjectAthird
                result.save()
                return {
                    statusCode: 200,
                    status: true,
                    message: 'Mark upload successful'
                }
            } else {
                const newStudentmark = new mongodb.Csfourthyearmark({
                    Email,
                    SubjectAfirst,
                    SubjectAsecond,
                    SubjectAthird,
                })
                newStudentmark.save()
                return {
                    statusCode: 202,
                    status: true,
                    message: 'Mark upload successful'
                }
            }
        })
}

const csfourthyearsubB = (Email, SubjectBfirst, SubjectBsecond, SubjectBthird) => {
    return mongodb.Csfourthyearmark.findOne({ Email })
        .then(result => {
            if (result) {
                result.SubjectBfirst = SubjectBfirst
                result.SubjectBsecond = SubjectBsecond
                result.SubjectBthird = SubjectBthird
                result.save()
                return {
                    statusCode: 200,
                    status: true,
                    message: 'Mark upload successful'
                }
            } else {
                const newStudentmark = new mongodb.Csfourthyearmark({
                    Email,
                    SubjectBfirst,
                    SubjectBsecond,
                    SubjectBthird,
                })
                newStudentmark.save()
                return {
                    statusCode: 202,
                    status: true,
                    message: 'Mark upload successful'
                }
            }
        })
}

const csfourthyearsubC = (Email, SubjectCfirst, SubjectCsecond, SubjectCthird) => {
    return mongodb.Csfourthyearmark.findOne({ Email })
        .then(result => {
            if (result) {
                result.SubjectCfirst = SubjectCfirst
                result.SubjectCsecond = SubjectCsecond
                result.SubjectCthird = SubjectCthird
                result.save()
                return {
                    statusCode: 200,
                    status: true,
                    message: 'Mark upload successful'
                }
            } else {
                const newStudentmark = new mongodb.Csfourthyearmark({
                    Email,
                    SubjectCfirst,
                    SubjectCsecond,
                    SubjectCthird,
                })
                newStudentmark.save()
                return {
                    statusCode: 202,
                    status: true,
                    message: 'Mark upload successful'
                }
            }
        })
}

const csfourthyearsubD = (Email, SubjectDfirst, SubjectDsecond, SubjectDthird) => {
    return mongodb.Csfourthyearmark.findOne({ Email })
        .then(result => {
            if (result) {
                result.SubjectDfirst = SubjectDfirst
                result.SubjectDsecond = SubjectDsecond
                result.SubjectDthird = SubjectDthird
                result.save()
                return {
                    statusCode: 200,
                    status: true,
                    message: 'Mark upload successful'
                }
            } else {
                const newStudentmark = new mongodb.Csfourthyearmark({
                    Email,
                    SubjectDfirst,
                    SubjectDsecond,
                    SubjectDthird
                })
                newStudentmark.save()
                return {
                    statusCode: 202,
                    status: true,
                    message: 'Mark upload successful'
                }
            }
        })
}

const csfourthyearsubE = (Email, SubjectEfirst, SubjectEsecond, SubjectEthird) => {
    return mongodb.Csfourthyearmark.findOne({ Email })
        .then(result => {
            if (result) {
                result.SubjectEfirst = SubjectEfirst
                result.SubjectEsecond = SubjectEsecond
                result.SubjectEthird = SubjectEthird
                result.save()
                return {
                    statusCode: 200,
                    status: true,
                    message: 'Mark upload successful'
                }
            } else {
                const newStudentmark = new mongodb.Csfourthyearmark({
                    Email,
                    SubjectEfirst,
                    SubjectEsecond,
                    SubjectEthird
                })
                newStudentmark.save()
                return {
                    statusCode: 202,
                    status: true,
                    message: 'Mark upload successful'
                }
            }
        })
}

const csfourthyearsubF = (Email, SubjectFfirst, SubjectFsecond, SubjectFthird) => {
    return mongodb.Csfourthyearmark.findOne({ Email })
        .then(result => {
            if (result) {
                result.SubjectFfirst = SubjectFfirst
                result.SubjectFsecond = SubjectFsecond
                result.SubjectFthird = SubjectFthird
                result.save()
                return {
                    statusCode: 200,
                    status: true,
                    message: 'Mark upload successful'
                }
            } else {
                const newStudentmark = new mongodb.Csfourthyearmark({
                    Email,
                    SubjectFfirst,
                    SubjectFsecond,
                    SubjectFthird
                })
                newStudentmark.save()
                return {
                    statusCode: 202,
                    status: true,
                    message: 'Mark upload successful'
                }
            }
        })
}


const mechfourthyearsubA = (Email, SubjectAfirst, SubjectAsecond, SubjectAthird) => {
    return mongodb.Mechfourthyearmark.findOne({ Email })
        .then(result => {
            if (result) {
                result.SubjectAfirst = SubjectAfirst
                result.SubjectAsecond = SubjectAsecond
                result.SubjectAthird = SubjectAthird
                result.save()
                return {
                    statusCode: 200,
                    status: true,
                    message: 'Mark upload successful'
                }
            } else {
                const newStudentmark = new mongodb.Mechfourthyearmark({
                    Email,
                    SubjectAfirst,
                    SubjectAsecond,
                    SubjectAthird,
                })
                newStudentmark.save()
                return {
                    statusCode: 202,
                    status: true,
                    message: 'Mark upload successful'
                }
            }
        })
}

const mechfourthyearsubB = (Email, SubjectBfirst, SubjectBsecond, SubjectBthird) => {
    return mongodb.Mechfourthyearmark.findOne({ Email })
        .then(result => {
            if (result) {
                result.SubjectBfirst = SubjectBfirst
                result.SubjectBsecond = SubjectBsecond
                result.SubjectBthird = SubjectBthird
                result.save()
                return {
                    statusCode: 200,
                    status: true,
                    message: 'Mark upload successful'
                }
            } else {
                const newStudentmark = new mongodb.Mechfourthyearmark({
                    Email,
                    SubjectBfirst,
                    SubjectBsecond,
                    SubjectBthird,
                })
                newStudentmark.save()
                return {
                    statusCode: 202,
                    status: true,
                    message: 'Mark upload successful'
                }
            }
        })
}

const mechfourthyearsubC = (Email, SubjectCfirst, SubjectCsecond, SubjectCthird) => {
    return mongodb.Mechfourthyearmark.findOne({ Email })
        .then(result => {
            if (result) {
                result.SubjectCfirst = SubjectCfirst
                result.SubjectCsecond = SubjectCsecond
                result.SubjectCthird = SubjectCthird
                result.save()
                return {
                    statusCode: 200,
                    status: true,
                    message: 'Mark upload successful'
                }
            } else {
                const newStudentmark = new mongodb.Mechfourthyearmark({
                    Email,
                    SubjectCfirst,
                    SubjectCsecond,
                    SubjectCthird,
                })
                newStudentmark.save()
                return {
                    statusCode: 202,
                    status: true,
                    message: 'Mark upload successful'
                }
            }
        })
}

const mechfourthyearsubD = (Email, SubjectDfirst, SubjectDsecond, SubjectDthird) => {
    return mongodb.Mechfourthyearmark.findOne({ Email })
        .then(result => {
            if (result) {
                result.SubjectDfirst = SubjectDfirst
                result.SubjectDsecond = SubjectDsecond
                result.SubjectDthird = SubjectDthird
                result.save()
                return {
                    statusCode: 200,
                    status: true,
                    message: 'Mark upload successful'
                }
            } else {
                const newStudentmark = new mongodb.Mechfourthyearmark({
                    Email,
                    SubjectDfirst,
                    SubjectDsecond,
                    SubjectDthird
                })
                newStudentmark.save()
                return {
                    statusCode: 202,
                    status: true,
                    message: 'Mark upload successful'
                }
            }
        })
}

const mechfourthyearsubE = (Email, SubjectEfirst, SubjectEsecond, SubjectEthird) => {
    return mongodb.Mechfourthyearmark.findOne({ Email })
        .then(result => {
            if (result) {
                result.SubjectEfirst = SubjectEfirst
                result.SubjectEsecond = SubjectEsecond
                result.SubjectEthird = SubjectEthird
                result.save()
                return {
                    statusCode: 200,
                    status: true,
                    message: 'Mark upload successful'
                }
            } else {
                const newStudentmark = new mongodb.Mechfourthyearmark({
                    Email,
                    SubjectEfirst,
                    SubjectEsecond,
                    SubjectEthird
                })
                newStudentmark.save()
                return {
                    statusCode: 202,
                    status: true,
                    message: 'Mark upload successful'
                }
            }
        })
}

const mechfourthyearsubF = (Email, SubjectFfirst, SubjectFsecond, SubjectFthird) => {
    return mongodb.Mechfourthyearmark.findOne({ Email })
        .then(result => {
            if (result) {
                result.SubjectFfirst = SubjectFfirst
                result.SubjectFsecond = SubjectFsecond
                result.SubjectFthird = SubjectFthird
                result.save()
                return {
                    statusCode: 200,
                    status: true,
                    message: 'Mark upload successful'
                }
            } else {
                const newStudentmark = new mongodb.Mechfourthyearmark({
                    Email,
                    SubjectFfirst,
                    SubjectFsecond,
                    SubjectFthird
                })
                newStudentmark.save()
                return {
                    statusCode: 202,
                    status: true,
                    message: 'Mark upload successful'
                }
            }
        })
}

const csfirstmarkdisplay = (Email) => {
    return mongodb.Csfirstyearmark.findOne({ Email })
        .then(result => {
            if (result) {
                return {
                    statusCode: 200,
                    status: true,
                    subAfirst:result.SubjectAfirst,
                    subAsecond:result.SubjectAsecond,
                    subAthird:result.SubjectAthird,
                    subBfirst:result.SubjectBfirst,
                    subBsecond:result.SubjectBsecond,
                    subBthird:result.SubjectBthird,
                    subCfirst:result.SubjectCfirst,
                    subCsecond:result.SubjectCsecond,
                    subCthird:result.SubjectCthird,
                    subDfirst:result.SubjectDfirst,
                    subDsecond:result.SubjectDsecond,
                    subDthird:result.SubjectDthird,
                    subEfirst:result.SubjectEfirst,
                    subEsecond:result.SubjectEsecond,
                    subEthird:result.SubjectEthird,
                    subFfirst:result.SubjectFfirst,
                    subFsecond:result.SubjectFsecond,
                    subFthird:result.SubjectFthird
                }
            }
        })
}

const cssecondmarkdisplay = (Email) => {
    return mongodb.Cssecondyearmark.findOne({ Email })
        .then(result => {
            if (result) {
                return {
                    statusCode: 200,
                    status: true,
                    subAfirst:result.SubjectAfirst,
                    subAsecond:result.SubjectAsecond,
                    subAthird:result.SubjectAthird,
                    subBfirst:result.SubjectBfirst,
                    subBsecond:result.SubjectBsecond,
                    subBthird:result.SubjectBthird,
                    subCfirst:result.SubjectCfirst,
                    subCsecond:result.SubjectCsecond,
                    subCthird:result.SubjectCthird,
                    subDfirst:result.SubjectDfirst,
                    subDsecond:result.SubjectDsecond,
                    subDthird:result.SubjectDthird,
                    subEfirst:result.SubjectEfirst,
                    subEsecond:result.SubjectEsecond,
                    subEthird:result.SubjectEthird,
                    subFfirst:result.SubjectFfirst,
                    subFsecond:result.SubjectFsecond,
                    subFthird:result.SubjectFthird
                }
            }
        })
}

const csthirdmarkdisplay = (Email) => {
    return mongodb.Csthirdyearmark.findOne({ Email })
        .then(result => {
            if (result) {
                return {
                    statusCode: 200,
                    status: true,
                    subAfirst:result.SubjectAfirst,
                    subAsecond:result.SubjectAsecond,
                    subAthird:result.SubjectAthird,
                    subBfirst:result.SubjectBfirst,
                    subBsecond:result.SubjectBsecond,
                    subBthird:result.SubjectBthird,
                    subCfirst:result.SubjectCfirst,
                    subCsecond:result.SubjectCsecond,
                    subCthird:result.SubjectCthird,
                    subDfirst:result.SubjectDfirst,
                    subDsecond:result.SubjectDsecond,
                    subDthird:result.SubjectDthird,
                    subEfirst:result.SubjectEfirst,
                    subEsecond:result.SubjectEsecond,
                    subEthird:result.SubjectEthird,
                    subFfirst:result.SubjectFfirst,
                    subFsecond:result.SubjectFsecond,
                    subFthird:result.SubjectFthird
                }
            }
        })
}

const csfourthmarkdisplay = (Email) => {
    return mongodb.Csfourthyearmark.findOne({ Email })
        .then(result => {
            if (result) {
                return {
                    statusCode: 200,
                    status: true,
                    subAfirst:result.SubjectAfirst,
                    subAsecond:result.SubjectAsecond,
                    subAthird:result.SubjectAthird,
                    subBfirst:result.SubjectBfirst,
                    subBsecond:result.SubjectBsecond,
                    subBthird:result.SubjectBthird,
                    subCfirst:result.SubjectCfirst,
                    subCsecond:result.SubjectCsecond,
                    subCthird:result.SubjectCthird,
                    subDfirst:result.SubjectDfirst,
                    subDsecond:result.SubjectDsecond,
                    subDthird:result.SubjectDthird,
                    subEfirst:result.SubjectEfirst,
                    subEsecond:result.SubjectEsecond,
                    subEthird:result.SubjectEthird,
                    subFfirst:result.SubjectFfirst,
                    subFsecond:result.SubjectFsecond,
                    subFthird:result.SubjectFthird
                }
            }
        })
}

const civilfirstmarkdisplay = (Email) => {
    return mongodb.Civilfirstyearmark.findOne({ Email })
        .then(result => {
            if (result) {
                return {
                    statusCode: 200,
                    status: true,
                    subAfirst:result.SubjectAfirst,
                    subAsecond:result.SubjectAsecond,
                    subAthird:result.SubjectAthird,
                    subBfirst:result.SubjectBfirst,
                    subBsecond:result.SubjectBsecond,
                    subBthird:result.SubjectBthird,
                    subCfirst:result.SubjectCfirst,
                    subCsecond:result.SubjectCsecond,
                    subCthird:result.SubjectCthird,
                    subDfirst:result.SubjectDfirst,
                    subDsecond:result.SubjectDsecond,
                    subDthird:result.SubjectDthird,
                    subEfirst:result.SubjectEfirst,
                    subEsecond:result.SubjectEsecond,
                    subEthird:result.SubjectEthird,
                    subFfirst:result.SubjectFfirst,
                    subFsecond:result.SubjectFsecond,
                    subFthird:result.SubjectFthird
                }
            }
        })
}

const civilsecondmarkdisplay = (Email) => {
    return mongodb.Civilsecondyearmark.findOne({ Email })
        .then(result => {
            if (result) {
                return {
                    statusCode: 200,
                    status: true,
                    subAfirst:result.SubjectAfirst,
                    subAsecond:result.SubjectAsecond,
                    subAthird:result.SubjectAthird,
                    subBfirst:result.SubjectBfirst,
                    subBsecond:result.SubjectBsecond,
                    subBthird:result.SubjectBthird,
                    subCfirst:result.SubjectCfirst,
                    subCsecond:result.SubjectCsecond,
                    subCthird:result.SubjectCthird,
                    subDfirst:result.SubjectDfirst,
                    subDsecond:result.SubjectDsecond,
                    subDthird:result.SubjectDthird,
                    subEfirst:result.SubjectEfirst,
                    subEsecond:result.SubjectEsecond,
                    subEthird:result.SubjectEthird,
                    subFfirst:result.SubjectFfirst,
                    subFsecond:result.SubjectFsecond,
                    subFthird:result.SubjectFthird
                }
            }
        })
}

const civilthirdmarkdisplay = (Email) => {
    return mongodb.Civilthirdyearmark.findOne({ Email })
        .then(result => {
            if (result) {
                return {
                    statusCode: 200,
                    status: true,
                    subAfirst:result.SubjectAfirst,
                    subAsecond:result.SubjectAsecond,
                    subAthird:result.SubjectAthird,
                    subBfirst:result.SubjectBfirst,
                    subBsecond:result.SubjectBsecond,
                    subBthird:result.SubjectBthird,
                    subCfirst:result.SubjectCfirst,
                    subCsecond:result.SubjectCsecond,
                    subCthird:result.SubjectCthird,
                    subDfirst:result.SubjectDfirst,
                    subDsecond:result.SubjectDsecond,
                    subDthird:result.SubjectDthird,
                    subEfirst:result.SubjectEfirst,
                    subEsecond:result.SubjectEsecond,
                    subEthird:result.SubjectEthird,
                    subFfirst:result.SubjectFfirst,
                    subFsecond:result.SubjectFsecond,
                    subFthird:result.SubjectFthird
                }
            }
        })
}

const civilfourthmarkdisplay = (Email) => {
    return mongodb.Civilfourthyearmark.findOne({ Email })
        .then(result => {
            if (result) {
                return {
                    statusCode: 200,
                    status: true,
                    subAfirst:result.SubjectAfirst,
                    subAsecond:result.SubjectAsecond,
                    subAthird:result.SubjectAthird,
                    subBfirst:result.SubjectBfirst,
                    subBsecond:result.SubjectBsecond,
                    subBthird:result.SubjectBthird,
                    subCfirst:result.SubjectCfirst,
                    subCsecond:result.SubjectCsecond,
                    subCthird:result.SubjectCthird,
                    subDfirst:result.SubjectDfirst,
                    subDsecond:result.SubjectDsecond,
                    subDthird:result.SubjectDthird,
                    subEfirst:result.SubjectEfirst,
                    subEsecond:result.SubjectEsecond,
                    subEthird:result.SubjectEthird,
                    subFfirst:result.SubjectFfirst,
                    subFsecond:result.SubjectFsecond,
                    subFthird:result.SubjectFthird
                }
            }
        })
}

const mechfirstmarkdisplay = (Email) => {
    return mongodb.Mechfirstyearmark.findOne({ Email })
        .then(result => {
            if (result) {
                return {
                    statusCode: 200,
                    status: true,
                    subAfirst:result.SubjectAfirst,
                    subAsecond:result.SubjectAsecond,
                    subAthird:result.SubjectAthird,
                    subBfirst:result.SubjectBfirst,
                    subBsecond:result.SubjectBsecond,
                    subBthird:result.SubjectBthird,
                    subCfirst:result.SubjectCfirst,
                    subCsecond:result.SubjectCsecond,
                    subCthird:result.SubjectCthird,
                    subDfirst:result.SubjectDfirst,
                    subDsecond:result.SubjectDsecond,
                    subDthird:result.SubjectDthird,
                    subEfirst:result.SubjectEfirst,
                    subEsecond:result.SubjectEsecond,
                    subEthird:result.SubjectEthird,
                    subFfirst:result.SubjectFfirst,
                    subFsecond:result.SubjectFsecond,
                    subFthird:result.SubjectFthird
                }
            }
        })
}

const mechsecondmarkdisplay = (Email) => {
    return mongodb.Mechsecondyearmark.findOne({ Email })
        .then(result => {
            if (result) {
                return {
                    statusCode: 200,
                    status: true,
                    subAfirst:result.SubjectAfirst,
                    subAsecond:result.SubjectAsecond,
                    subAthird:result.SubjectAthird,
                    subBfirst:result.SubjectBfirst,
                    subBsecond:result.SubjectBsecond,
                    subBthird:result.SubjectBthird,
                    subCfirst:result.SubjectCfirst,
                    subCsecond:result.SubjectCsecond,
                    subCthird:result.SubjectCthird,
                    subDfirst:result.SubjectDfirst,
                    subDsecond:result.SubjectDsecond,
                    subDthird:result.SubjectDthird,
                    subEfirst:result.SubjectEfirst,
                    subEsecond:result.SubjectEsecond,
                    subEthird:result.SubjectEthird,
                    subFfirst:result.SubjectFfirst,
                    subFsecond:result.SubjectFsecond,
                    subFthird:result.SubjectFthird
                }
            }
        })
}

const mechthirdmarkdisplay = (Email) => {
    return mongodb.Mechthirdyearmark.findOne({ Email })
        .then(result => {
            if (result) {
                return {
                    statusCode: 200,
                    status: true,
                    subAfirst:result.SubjectAfirst,
                    subAsecond:result.SubjectAsecond,
                    subAthird:result.SubjectAthird,
                    subBfirst:result.SubjectBfirst,
                    subBsecond:result.SubjectBsecond,
                    subBthird:result.SubjectBthird,
                    subCfirst:result.SubjectCfirst,
                    subCsecond:result.SubjectCsecond,
                    subCthird:result.SubjectCthird,
                    subDfirst:result.SubjectDfirst,
                    subDsecond:result.SubjectDsecond,
                    subDthird:result.SubjectDthird,
                    subEfirst:result.SubjectEfirst,
                    subEsecond:result.SubjectEsecond,
                    subEthird:result.SubjectEthird,
                    subFfirst:result.SubjectFfirst,
                    subFsecond:result.SubjectFsecond,
                    subFthird:result.SubjectFthird
                }
            }
        })
}

const mechfourthmarkdisplay = (Email) => {
    return mongodb.Mechfourthyearmark.findOne({ Email })
        .then(result => {
            if (result) {
                return {
                    statusCode: 200,
                    status: true,
                    subAfirst:result.SubjectAfirst,
                    subAsecond:result.SubjectAsecond,
                    subAthird:result.SubjectAthird,
                    subBfirst:result.SubjectBfirst,
                    subBsecond:result.SubjectBsecond,
                    subBthird:result.SubjectBthird,
                    subCfirst:result.SubjectCfirst,
                    subCsecond:result.SubjectCsecond,
                    subCthird:result.SubjectCthird,
                    subDfirst:result.SubjectDfirst,
                    subDsecond:result.SubjectDsecond,
                    subDthird:result.SubjectDthird,
                    subEfirst:result.SubjectEfirst,
                    subEsecond:result.SubjectEsecond,
                    subEthird:result.SubjectEthird,
                    subFfirst:result.SubjectFfirst,
                    subFsecond:result.SubjectFsecond,
                    subFthird:result.SubjectFthird
                }
            }
        })
}

module.exports = { civilfirstyearsubA, civilfirstyearsubB, civilfirstyearsubC, civilfirstyearsubD, civilfirstyearsubE, civilfirstyearsubF, csfirstyearsubA, csfirstyearsubB, csfirstyearsubC, csfirstyearsubD, csfirstyearsubE, csfirstyearsubF, mechfirstyearsubA, mechfirstyearsubB, mechfirstyearsubC, mechfirstyearsubD, mechfirstyearsubE, mechfirstyearsubF, civilsecondyearsubA, civilsecondyearsubB, civilsecondyearsubC, civilsecondyearsubD, civilsecondyearsubE, civilsecondyearsubF, cssecondyearsubA, cssecondyearsubB, cssecondyearsubC, cssecondyearsubD, cssecondyearsubE, cssecondyearsubF, mechsecondyearsubA, mechsecondyearsubB, mechsecondyearsubC, mechsecondyearsubD, mechsecondyearsubE, mechsecondyearsubF, civilthirdyearsubA, civilfirstyearsubB, civilfirstyearsubC, civilfirstyearsubD, civilfirstyearsubE, civilthirdyearsubF, csthirdyearsubA, csthirdyearsubB, csthirdyearsubC, csthirdyearsubD, csthirdyearsubE, csthirdyearsubF, mechthirdyearsubA, mechthirdyearsubB, mechthirdyearsubC, mechthirdyearsubD, mechthirdyearsubE, mechthirdyearsubF, civilfourthyearsubA, civilfourthyearsubB, civilfourthyearsubC, civilfourthyearsubD, civilfourthyearsubE, civilfourthyearsubF, csfourthyearsubA, csfourthyearsubB, csfourthyearsubC, csfourthyearsubD, csfourthyearsubE, csfourthyearsubF, mechfourthyearsubA, mechfourthyearsubB, mechfourthyearsubC, mechfourthyearsubD, mechfourthyearsubE, mechfourthyearsubF,csfirstmarkdisplay,cssecondmarkdisplay,csthirdmarkdisplay,csfourthmarkdisplay,civilfirstmarkdisplay,civilsecondmarkdisplay,civilthirdmarkdisplay,civilfourthmarkdisplay,mechfirstmarkdisplay,mechsecondmarkdisplay,mechthirdmarkdisplay,mechfourthmarkdisplay }