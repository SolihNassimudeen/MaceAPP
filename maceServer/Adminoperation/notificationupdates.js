const mongodb = require('../mongoDB')

const notificationUpdate = (notification1, notification2, notification3) => {
    return mongodb.Notification.updateOne({ "Notification1": notification1, "Notification2": notification2, "Notification3": notification3 })
        .then(result => {
            if (result) {
                return {
                    statusCode: 200,
                    message: 'Notification updated successfully'
                }
            }
            else {
                return {
                    statusCode: 200,
                    message: 'Notification update failed'
                }
            }
        })
}

const notificationplaceholder = () => {
    return mongodb.Notification.findOne({})
        .then(result => {
            if (result) {
                return {
                    statusCode: 200,
                    Notification1:result.Notification1,
                    Notification2:result.Notification2,
                    Notification3:result.Notification3
                }
            } else {
                return {
                    statusCode: 400,
                    message: 'updation failed'
                }
            }
        })
}

module.exports = { notificationUpdate,notificationplaceholder }