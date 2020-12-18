const { app, BrowserWindow, ipcMain } = require('electron')
const url = require("url");
const path = require("path");
const isDev = require('isdev');
const fs = require('fs');
const { Parser } = require('json2csv');


let mainWindow

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1400,
    height: 900,
    frame: false,
    // fullscreen: true,
    webPreferences: {
      nodeIntegration: true
    }
  });
  
  mainWindow.loadURL(isDev ? 'http://localhost:4200' :
    url.format({
      pathname: path.join(__dirname, `/dist/leapapp/index.html`),
      protocol: "file:",
      slashes: true
    })
  );
  
  // Open the DevTools.
  mainWindow.webContents.openDevTools()

  mainWindow.on('closed', function () {
    mainWindow = null
  })
}

app.on('ready', createWindow)

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})

app.on('activate', function () {
  if (mainWindow === null) createWindow()
})

ipcMain.on('close-app', (event, arg) => {
  mainWindow.destroy();
  app.quit();
})

ipcMain.on('write-result', (event, arg) => {
    const fields = [
        {
            label: 'Question',
            value: 'question'
        },
        {
            label: 'Answer',
            value: 'answer'
        }
    ]
    const json2csv = new Parser({ fields: fields });
    const csv = json2csv.parse(arg)
    
    const d = new Date();
    var filename = d.getTime() + '.csv';
    fs.writeFile(filename, csv, function(err, result) {
        if(err) console.log('error', err);
    });
})