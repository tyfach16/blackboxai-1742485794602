const { app, BrowserWindow, Menu } = require('electron');
const path = require('path');

function createWindow() {
  try {
    // Create the browser window
    const mainWindow = new BrowserWindow({
      width: 900,
      height: 600,
      webPreferences: {
        nodeIntegration: true,
        contextIsolation: false
      },
      center: true,
      title: 'Flash USDT Generator'
    });

    // Load the index.html file
    mainWindow.loadFile('index.html');

    // Create the application menu
    const template = [
      {
        label: 'File',
        submenu: [
          {
            label: 'Exit',
            click: () => app.quit(),
            accelerator: process.platform === 'darwin' ? 'Cmd+Q' : 'Alt+F4'
          }
        ]
      },
      {
        label: 'View',
        submenu: [
          { role: 'reload' },
          { role: 'toggleDevTools' },
          { type: 'separator' },
          { role: 'resetZoom' },
          { role: 'zoomIn' },
          { role: 'zoomOut' }
        ]
      },
      {
        label: 'Help',
        submenu: [
          {
            label: 'About',
            click: () => {
              // You can implement an about dialog here if needed
              console.log('About clicked');
            }
          }
        ]
      }
    ];

    const menu = Menu.buildFromTemplate(template);
    Menu.setApplicationMenu(menu);

  } catch (error) {
    console.error('Error creating window:', error);
  }
}

// This method will be called when Electron has finished initialization
app.whenReady().then(createWindow);

// Quit when all windows are closed
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

// On macOS, re-create a window when dock icon is clicked
app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});