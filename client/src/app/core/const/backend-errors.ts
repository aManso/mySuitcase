

export const BACKEND_ERROR_TYPES = {
    MAX_SUITCASES_REACHED: 'maxSuitcasesReached',
    POP_UPS_BLOCKED: 'NotAllowedError',
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
}