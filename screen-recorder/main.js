const { app, BrowserWindow } = require('electron');

const appUrl = `file://${__dirname}/index.html`;

let win;

const createElectronShell = () => {
    win = new BrowserWindow({ width: 800, height: 600 });
    
	win.loadURL(appUrl);
	win.on('closed', () => { win = null; });
};

app.on('ready', createElectronShell);

app.on('window-all-closed', () => { if (process.platform !== 'darwin') { app.quit(); } });

app.on('activate', () => { if (app == null) { createElectronShell() } });
