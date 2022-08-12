require('core-js/stable');
require("regenerator-runtime/runtime");

// preload electron with the window global so it can be used in the renderer process
const { app, BrowserWindow } = require('electron');

window['App'] = app;
window['Windows'] = BrowserWindow.getAllWindows();
