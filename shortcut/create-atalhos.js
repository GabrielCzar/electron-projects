const {app, globalShortcut} = require('electron');

app.on('ready', () => {
  globalShortcut.register('CommandOrControl+L', () => {
    console.log('Hello!');
  })
})

app.on('will-quit', () => {
  globalShortcut.unregister('CommandOrControl+L');
})
