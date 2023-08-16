

export const FRONTEND_ERROR_TYPES = {
    NOTIFICATIONS_DISABLED: 'NotificationsNotEnabled',
    USER_EXISTS: 'userExists',
    USER_NOT_FOUND: 'userNotFound'
}

export const FRONTEND_ERRORS = {
    GENERAL_ERROR: {
        title: 'Error',
        message: $localize `There has been a problem, please try again and if the problem persist contact us`
    },
    NOTIFICATIONS_DISABLED: {
        title: 'Error',
        message: $localize `Notifications are not enabled for this device`
    },
    USER_EXISTS: {
        title: 'Error',
        message: $localize `There is already an user with this email`
    },
    USER_NOT_FOUND: {
        title: 'Error',
        message: $localize `User has not been found in our system`
    }
}