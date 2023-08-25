import { FRONTEND_ERRORS } from "./frontend-errors"


export const BACKEND_ERROR_TYPES = {
    MAX_SUITCASES_REACHED: 'maxSuitcasesReached',
    POP_UPS_BLOCKED: 'NotAllowedError',
    WRONG_PASSWORD: 'wrongPassword',
    EXISTING_EMAIL: 'existingEmail',
    USER_NOT_FOUND: 'userNotFound',
    USER_NOT_CONFIRMED: 'userNotConfirmed',
    MISSING_FIELDS: 'missingFields',
    GENERAL_ERROR: 'generalError',
    UNAUTHORIZED_REQUEST: 'unauthorizedRequest'
}

export const BACKEND_ERRORS = {
    GENERAL_ERROR: {
        title: FRONTEND_ERRORS.GENERAL_ERROR.title,
        message: FRONTEND_ERRORS.GENERAL_ERROR.message
    },
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
    USER_NOT_CONFIRMED: {
        title: 'Error',
        message: $localize `The user not confirmed yet his email, please check your mailbox even in the junk folder`
    },
    MISSING_FIELDS: {
        title: 'Error',
        message: $localize `The are missing fields that need to be complete, please review the form message`
    },
    UNAUTHORIZED_REQUEST: {
        title: 'Error',
        message: $localize `The user is not authorized to perform this action, please try to log in again`
    },
}