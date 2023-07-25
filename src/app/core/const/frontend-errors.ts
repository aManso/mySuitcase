

export const FRONTEND_ERROR_TYPES = {
    NOTIFICATIONS_DISABLED: 'NotificationsNotEnabled'
}

export const FRONTEND_ERRORS = {
    GENERAL_ERROR: {
        title: 'Error',
        message: $localize `There has been a problem, please try again and if the problem persist contact us`
    },
    NOTIFICATIONS_DISABLED: {
        title: 'Error',
        message: $localize `Notifications are not enabled for this device`
    }
}