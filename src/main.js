/*
 * @Description: 渲染线程入口文件
 * @Author: wangfengxiang
 * @Date: 2023-08-05 16:32:42
 * @LastEditTime: 2023-08-05 20:46:43
 * @LastEditors: wangfengxiang
 */
import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

createApp(App).use(ElementPlus).mount('#app')