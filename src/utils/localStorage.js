export const getLocalStorage = (key) => {
    const value = localStorage.getItem(key);
    if (value !== null) return JSON.parse(value);
    return {};
}

export const setLocalStorage = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
}