const changePasswordUser = require('./changePasswordUser')

try {
    changePasswordUser('3xhzp98ajw80', '234234234', '123123123', '123123123', (error, userId) => {
        if (error) {
            console.error(error)

            return
        }

        console.log('password changed', userId)
    })
} catch (error) {
    console.log(error)
}