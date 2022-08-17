/* eslint-disable @typescript-eslint/no-var-requires */
require('core-js/stable');
require("regenerator-runtime/runtime");

const { app, BrowserWindow } = require('electron');
const path = require('path');
const Config = require('./../native.config').default;

const port = process.env.PORT || Config.devSettings.middleware.port;
const host = process.env.HOST || Config.devSettings.middleware.host;

function createWindow()
{
    const Splash = new BrowserWindow({
        width: Config.windowSettings.width,
        height: Config.windowSettings.height,
        webPreferences: {
            preload: Config.windowSettings.webPreferences.preload ? path.join(__dirname, 'preload.js') : null,
            nodeIntegration: Config.windowSettings.webPreferences.nodeIntegration,
            contextIsolation: Config.windowSettings.webPreferences.contextIsolation,
            enableRemoteModule: Config.windowSettings.webPreferences.enableRemoteModule,
            openDevTools: Config.windowSettings.webPreferences.openDevTools,
        },
        frame: Config.windowSettings.frame,
        transparent: Config.windowSettings.transparent,
        resizable: Config.windowSettings.resizable,
        show: Config.windowSettings.show,
    });

    Splash.loadURL(`http://${host}:${port}/`);
}

function closeApp()
{
    if (process.platform !== 'darwin')
    {
        app.quit();
    }
}

app.on('ready', createWindow);
app.on('window-all-closed', closeApp);
app.on('activate', (e) => BrowserWindow.getAllWindows().length === 0 ? createWindow() : e.preventDefault());
