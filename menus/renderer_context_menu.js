const Menu = require('electron').remote.Menu;

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

window.addEventListener('contextmenu', (e) => {
    e.preventDefault();
    menu.popup();
});


  