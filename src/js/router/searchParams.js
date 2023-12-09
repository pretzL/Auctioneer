export const getSearchParams = () => {
    const url = new URL(window.location);
    return Object.fromEntries(url.searchParams);
};

export const setSearchParams = (params) => {
    const currentParams = new URLSearchParams(window.location.search);

    Object.entries(params).forEach(([key, value]) => {
        if (value === null) {
            currentParams.delete(key);
        } else {
            currentParams.set(key, value);
        }
    });

    window.location.search = currentParams.toString();
};
