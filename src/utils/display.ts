export const toLocaleNumberDisplay = (displayNumber: number) => {
    return new Intl.NumberFormat(navigator.language ?? 'en-CA').format(
        displayNumber
    );
};
