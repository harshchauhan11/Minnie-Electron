'use strict';

const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

var mainWindow = null;

app.on('window-all-closed', function() {
    if (process.platform != 'darwin') {
        app.quit();
    }
});

app.on('ready', function() {
    mainWindow = new BrowserWindow({
        titleBarStyle: 'hidden',
        width: 1024,
        height: 700,
        webPreferences: { nodeIntegration: true },
        backgroundColor: '#c1bdba',
        show: false
    });
    //mainWindow.loadURL('file://' + __dirname + '/app/index.htm');
    mainWindow.loadURL('http://preface-prhc.rhcloud.com/pr/');
    mainWindow.on('closed', function() {
        mainWindow = null;
    });
    mainWindow.once('ready-to-show', () => {
        mainWindow.show()
    })
});