

export const BACKEND_ERROR_TYPES = {
    MAX_SUITCASES_REACHED: 'maxSuitcasesReached',
    POP_UPS_BLOCKED: 'NotAllowedError',
    WRONG_PASSWORD: 'wrongPassword',
    EXISTING_EMAIL: 'existingEmail',
    USER_NOT_FOUND: 'userNotFound',
}

export const BACKEND_ERRORS = {
    MAX_SUITCASES_REACHED: {
        title: 'Error',
        message: $localize `You have reached the maximum number of suitcases`
    },
    POP_UPS_BLOCKED: {
        title: 'Error',
        message: $localize `:@@popupsBlockedError:Please, make sure that you have enabled pop ups in your browser. You could check it in both the navigation bar and the browser configuration`
    },
    WRONG_PASSWORD: {
        title: $localize `Wrong username or password`,
        message: $localize `The username, the password or both are wrong. Please make sure that both fields are right`
    },
    EXISTING_EMAIL: {
        title: $localize `The email already exists`,
        message: $localize `The email that you are trying to introduce already exists in our database, please if its yours and you dont remember the password, click into the remember password button in the login area`
    },
    USER_NOT_FOUND: {
        title: $localize `The username or the password are wrong`,
        message: $localize `The username or the password are wrong`
    },
}