/* eslint-disable @typescript-eslint/no-var-requires */
require('core-js/stable');
require("regenerator-runtime/runtime");

require('@electron/remote/main').initialize();

const { app, BrowserWindow } = require('electron');
const path = require('path');

const port = process.env.PORT || 8080;

function createWindow()
{
    const Splash = new BrowserWindow({
        width: 420,
        height: 840,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js'),
            nodeIntegration: true,
            contextIsolation: false,
            enableRemoteModule: true
      },
      frame: true,
      transparent: false,
      resizable: false,
      show: true,
    });

    Splash.loadURL('http://localhost:' + port);
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
