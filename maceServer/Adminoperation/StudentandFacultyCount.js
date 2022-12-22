const mongodb = require('../mongoDB')

const CsstudentCount = () => {
    return mongodb.Csfirstyear.count()
        .then(firstCount => {
            return mongodb.Cssecondyear.count()
                .then(secondCount => {
                    return mongodb.Csthirdyear.count()
                        .then(thirdCount => {
                            return mongodb.Csfourthyear.count()
                                .then(fourthCount => {
                                        return {
                                            statusCode: 200,
                                            firstYearCount: firstCount,
                                            secondYearCount: secondCount,
                                            thirdYearCount: thirdCount,
                                            fourthYearCount: fourthCount
                                        }
                                })
                        })

                })


        })
}

const CivilstudentCount = () => {
    return mongodb.Civilfirstyear.count()
        .then(firstCount => {
            return mongodb.Civilsecondyear.count()
                .then(secondCount => {
                    return mongodb.Civilthirdyear.count()
                        .then(thirdCount => {
                            return mongodb.Civilfourthyear.count()
                                .then(fourthCount => {
                                        return {
                                            statusCode: 200,
                                            firstYearCount: firstCount,
                                            secondYearCount: secondCount,
                                            thirdYearCount: thirdCount,
                                            fourthYearCount: fourthCount
                                        }
                                })
                        })

                })


        })
}

const MechstudentCount = () => {
    return mongodb.Mechfirstyear.count()
        .then(firstCount => {
            return mongodb.Mechsecondyear.count()
                .then(secondCount => {
                    return mongodb.Mechthirdyear.count()
                        .then(thirdCount => {
                            return mongodb.Mechfourthyear.count()
                                .then(fourthCount => {
                                   
                                        return {
                                            statusCode: 200,
                                            firstYearCount: firstCount,
                                            secondYearCount: secondCount,
                                            thirdYearCount: thirdCount,
                                            fourthYearCount: fourthCount
                                        }
                                })
                        })

                })


        })
}

const Facultycount = () => {
    return mongodb.Csfaculty.count()
        .then(csfacultycount => {
            return mongodb.Civilfaculty.count()
                .then(civilfacultycount => {
                    return mongodb.Mechfaculty.count()
                        .then(mechanicalcount => {
                            return {
                                statusCode: 200,
                                Cscount: csfacultycount,
                                Civilcount: civilfacultycount,
                                Mechcount: mechanicalcount
                            }
                        })
                })
        })
}

module.exports = { CsstudentCount, CivilstudentCount, MechstudentCount, Facultycount }