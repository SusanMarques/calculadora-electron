const {app, BrowserWindow} = require('electron')

let mainWindow = null;

app.on('ready', ()=>{
    console.log('Iniciando electron');
    mainWindow = new BrowserWindow({
        width: 280, 
        height: 520,
        icon: 'icon/calculadora.ico',
        autoHideMenuBar: 'false'
    })

    mainWindow.loadFile('app/index.html')
})

app.on('window-all-closed', ()=>{
    app.quit();
})