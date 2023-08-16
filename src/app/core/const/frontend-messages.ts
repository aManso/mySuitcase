

export const FRONTEND_MESSAGES = {
    CONFIRMATION_REMINDER_PASSWORD_SENT: {
        message: $localize `If the user exists in our data base, an email has successfully been sent to update your password, check your email even in the junk folder`
    },
    CONFIRMATION_UPDATE_PASSWORD: {
        message: $localize `The password has succesfully been updated, you can login now`
    },
    CONFIRMATION_REGISTER: {
        message: $localize `We have just sent an email to you, please review your email (even spam folder) to complete the register`
    },
    CONFIRMATION_REMOVE_NOTIFICATION: {
        title: $localize `¡Warning!`,
        message: $localize `Are you sure that you want to continue and remove the notification?`
    },
    CONFIRMATION_SEND_NOTIFICATION: {
        title: $localize `¡Warning!`,
        message: $localize `Are you sure that you want to continue and send the notification to all the subscribers?`
    },
    CONFIRMATION_REMOVED_NOTIFICATION: {
        title: $localize `The notification has been successfully removed`,
        message: ''
    },
    CONFIRMATION_REGISTRATION: {
        title: ``,
        message: $localize `The register has been completed, time to login and start packing!`
    }
}