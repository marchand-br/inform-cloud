export function getTheme() {
    const storage = localStorage.getItem('inform-cloud:theme');

    if (storage) {
        const { color } = JSON.parse(storage);
        return color;
    };

    return 'light-red';
}