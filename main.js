const { app, BrowserWindow } = require('electron')
const { ipcMain } = require('electron')
const Store = require('electron-store');

let win;
const USER_DATA_FILE = 'user_data';


function saveUserData(data) {
    store.set(USER_DATA_FILE, data);
}

function loadUserData() {
    return store.get(USER_DATA_FILE);
}

ipcMain.on('save-data', (event, data) => {
    console.info('saving data')
    console.debug(data)
    saveUserData(data);
})

ipcMain.on('load-data', (event, arg) => {
    console.info('saving data')
    const data = loadUserData();
    console.debug(data);
    event.returnValue = data
})

function createWindow () {
  // Create the browser window.
  win = new BrowserWindow({
    width: 600, 
    height: 600,
    backgroundColor: '#ffffff',
    // icon: `file://${__dirname}/dist/assets/logo.png`
  })


  win.loadURL(`http://localhost:4200`)
  //   win.loadURL(`file://${__dirname}/dist/index.html`)

  //// uncomment below to open the DevTools.
  win.webContents.openDevTools()

  // Event when the window is closed.
  win.on('closed', function () {
    win = null
  })
}

// Create window on electron intialization
app.on('ready', createWindow)

// Quit when all windows are closed.
app.on('window-all-closed', function () {

  // On macOS specific close process
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', function () {
  // macOS specific close process
  if (win === null) {
    createWindow()
  }
})