function isMobile () {
    return typeof window !== "undefined" && window.innerWidth <= 768;
};

export { isMobile };