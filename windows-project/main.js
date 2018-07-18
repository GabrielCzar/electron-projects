// initial project 
const { app, BrowserWindow, dialog } = require('electron');

const appUrl = `file://${__dirname}/index.html`;

let win, child;

const createElectronShell = () => {
	win = new BrowserWindow({ width: 800, height: 600 });
	child = new BrowserWindow({ width: 600, height: 400, parent: win, modal: true });
	dialog.showMessageBox({ title: 'MESSAGE BOX', message: 'Hello!'});

	win.loadURL(appUrl);
	win.on('closed', () => { win = null; });
};

app.on('ready', createElectronShell);

app.on('window-all-closed', () => { if (process.platform !== 'darwin') { app.quit(); } })

app.on('activate', () => { if (app == null) { createElectronShell() } })
