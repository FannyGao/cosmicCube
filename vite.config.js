/*
 * @Description: 
 * @Author: gaoyating
 * @Date: 2023-08-01 16:02:37
 * @LastEditTime: 2023-08-02 20:37:06
 * @LastEditors: gaoyating
 */
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: './',
  server: {
    port: 8888,
    cors: true, // 允许跨域
    hmr: true,   // 开启热更新
  }
})
