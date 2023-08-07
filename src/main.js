/*
 * @Description: 渲染线程入口文件
 * @Author: wangfengxiang
 * @Date: 2023-08-05 21:30:14
 * @LastEditTime: 2023-08-06 08:23:36
 * @LastEditors: wangfengxiang
 */
import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

const app = createApp(App)

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}


app.use(ElementPlus).mount('#app')