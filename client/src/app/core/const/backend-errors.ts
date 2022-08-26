

export const BACKEND_ERROR_TYPES = {
    MAX_SUITCASES_REACHED: 'maxSuitcasesReached',
    POP_UPS_BLOCKED: 'NotAllowedError',
    WRONG_PASSWORD: 'wrongPassword',
    EXISTING_EMAIL: 'existingEmail',
}

export const BACKEND_ERRORS = {
    MAX_SUITCASES_REACHED: {
        title: 'Error',
        message: 'Se ha alcanzado el numero máximo de maletas'
    },
    POP_UPS_BLOCKED: {
        title: 'Error',
        message: 'Por favor, revisa que no tienes bloqueados los popups en el navegador. Podrás verlo tanto en la barra de navegación como en la configuración de tu navegador'
    },
    WRONG_PASSWORD: {
        title: 'Usuario o Contraseña incorrecta',
        message: 'El usuario,  la contraseña o ambas son incorrectas, por favor verifica que los datos estén correctos'
    },
    EXISTING_EMAIL: {
        title: 'El email ya existe',
        message: 'El email que intenta introducir ya existe en nuestra base de datos, por favor si es suyo y no recuerda la contraseña, pulse recordar contraseña en el área de login'
    },
}