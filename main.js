const { app, BrowserWindow, ipcMain } = require('electron')
const url = require("url");
const path = require("path");
const isDev = require('isdev')

let mainWindow

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1400,
    height: 900,
    frame: false,
    fullscren: true,
    webPreferences: {
      nodeIntegration: true
    }
  });
  
  mainWindow.loadURL(isDev ? 'http://localhost:4200' :
    url.format({
      pathname: path.join(__dirname, `/dist/angular/index.html`),
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