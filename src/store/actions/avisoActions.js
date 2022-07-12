export function setAviso(values) {
    return {
        type: 'WARNING_COMPLETED',
        payload: values
    }
}

export function avisoReset() {
    return {
        type: 'WARNING_RESET'
    }
}