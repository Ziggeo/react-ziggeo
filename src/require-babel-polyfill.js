export default (() => {
    const root = (typeof globalThis !== 'undefined') ? globalThis :
        (typeof window !== 'undefined') ? window :
            (typeof global !== 'undefined') ? global : null;
    if (!root || !root.__ZIGGEO_POLYFILL_LOADED__) {
        require("core-js/es");
        require("core-js/web");
        require("regenerator-runtime/runtime");
        if (root) root.__ZIGGEO_POLYFILL_LOADED__ = true;
    }
})()
