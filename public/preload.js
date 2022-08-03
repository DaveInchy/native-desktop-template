require('core-js/stable');
require("regenerator-runtime/runtime");

// eslint-disable-next-line @typescript-eslint/no-var-requires
require('@electron/remote/main').initialize();

window.API = ({
    data: {},
    state: {},
    methods: {},
    twStyles: {
        defaults: {
            container: "flex flex-col justify-center items-center",
        },
        navBar: {
            container: "bg-black h-[80px] w-full fixed z-50 top-0 left-0",
            branding: "text-white text-2xl font-bold",
        },
        controls: {
            container: "bg-black h-[50px] w-full fixed z-50 bottom-0 left-0",
        }
    },
});
