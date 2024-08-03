const { app, BrowserWindow, Tray, Menu, ipcMain } = require('electron');
const path = require('path');

let mainWindow;
let tray = null;
let confirmWindow = null;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    autoHideMenuBar: true,
    icon: path.join(__dirname, 'Design_sem_nome-removebg-preview.png'),
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    }
  });

  mainWindow.loadURL('https://music.youtube.com');
  mainWindow.maximize();

  mainWindow.on('close', (event) => {
    if (!app.isQuiting) {
      event.preventDefault();
      createConfirmWindow();
    }
  });

  tray = new Tray(path.join(__dirname, 'Design_sem_nome-removebg-preview.png'));
  const contextMenu = Menu.buildFromTemplate([
    { label: 'Mostrar', click: () => { mainWindow.show(); } },
    { label: 'Sair', click: () => {
      app.isQuiting = true;
      app.quit();
    } }
  ]);

  tray.setToolTip('YouTube Music');
  tray.setContextMenu(contextMenu);

  tray.on('click', () => {
    mainWindow.isVisible() ? mainWindow.hide() : mainWindow.show();
  });

  ipcMain.on('continue-in-background', () => {
    if (confirmWindow) confirmWindow.close();
    mainWindow.hide();
  });

  ipcMain.on('quit-app', () => {
    app.isQuiting = true;
    app.quit();
  });
}

function createConfirmWindow() {
  if (confirmWindow) {
    confirmWindow.focus();
    return;
  }

  confirmWindow = new BrowserWindow({
    width: 600,
    height: 300,
    autoHideMenuBar: true,
    resizable: false,
    movable: true,
    minimizable: false,
    maximizable: false,
    parent: mainWindow,
    modal: true,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    }
  });

  confirmWindow.loadFile('confirm.html');

  confirmWindow.on('closed', () => {
    confirmWindow = null;
  });
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  } else {
    mainWindow.show();
  }
});
