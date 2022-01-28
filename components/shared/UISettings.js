const DARK_MODE_KEY = 'dark_mode';
export const themeSetting = {
    get setting() {
        try {
            return JSON.parse(window.localStorage.getItem(DARK_MODE_KEY)) === true;
        } catch (e) {
            return false;
        }
    },
    set setting(value) {
        try {
            window.localStorage.setItem(DARK_MODE_KEY, JSON.stringify(value === true));
        } catch (e) {}
    }
};

