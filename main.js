/*
 * @Description: 
 * @Author: gaoyating
 * @Date: 2023-08-01 16:06:44
 * @LastEditTime: 2023-08-02 13:52:00
 * @LastEditors: gaoyating
 */
// app 控制应用程序的事件生命周期 BrowerWinkdow 创建和管理应用程序窗口
const { app, BrowserWindow } = require('electron')
const path = require('path')
const isDev = require('electron-is-dev')

const createWindow = () => {
    const win = new BrowserWindow({
      width: 800,
      height: 600,
      webPreferences: {
        // 书写渲染进程中的配置
        nodeIntegration: true, // vue文件中可以引入node和electron相关API
        contextIsolation: false, // 可以使用require方法
        enableRemoteModule: true, // 可以使用remote方法
      }
    })

    if(isDev) {
        const elePath = path.join(__dirname, './node_modules/electron')
        require('electron-reload')('./', {electron: require(elePath)})
        win.loadURL('http://localhost:8888')
    } else {
        win.loadFile(path.resolve(__dirname, './dist/index.html'))
    }
    win.webContents.openDevTools()
  }

// app模块的ready事件被激发后才能创建浏览器窗口
app.whenReady().then(() => {
    createWindow()
    app.on('activate', () => {
      if(BrowserWindow.getAllWindows().length === 0) createWindow()
    })
})
// 关闭所有窗口时退出应用
app.on('window-all-closed',()=>{
    if(process.platform !== 'darwin') app.quit()
})