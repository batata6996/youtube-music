const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electronAPI', {
  continueInBackground: () => ipcRenderer.send('continue-in-background'),
  quitApp: () => ipcRenderer.send('quit-app')
});
