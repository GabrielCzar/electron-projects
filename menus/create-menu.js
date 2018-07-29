const {app, Menu } = require('electron');

let menuTemplate = [
  { 
    'label1' : 'Meu Item',
    'submenu': [
      { 'role' : 'paste' }
    ]
  },
  { 'role' : 'copy' }
];

let menu = Menu.buildFromTemplate(menuTemplate);
Menu.setApplicationMenu(menu);

