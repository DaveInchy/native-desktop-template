module.exports.default = ({
    windowSettings: ({
        width: 1080,
        height: 720,
        webPreferences: {
            preload: false,
            nodeIntegration: true,
            contextIsolation: false,
            enableRemoteModule: true,
            openDevTools: true,
        },
        frame: false,
        transparent: false,
        resizable: true,
        show: true,
    }),
    devSettings: ({
        middleware: ({
            port: 8080,
            host: '0.0.0.0',
        }),
    }),
})