<template>
    <input ref="file" type="file" @change="readFile" />
</template>

<script setup>
import {ref} from 'vue'
const electron = require('electron')
const {ipcRenderer} = electron
const file = ref(null)

const readFile = () => {
    const inputPath = file.value.files[0].path, 
        arr = inputPath.split('.'),
        outputPath = `${arr[0]}-draco.${arr[1]}`
    
    ipcRenderer.send('compress-gltf', {
        inputPath,
        outputPath,
        options: {
            dracoOptions: {
                compressionLevel: 10,
            }
        }
    })
    ipcRenderer.on('compress-gltf-done', (eve, res) => {
        console.log('渲染进程 ',eve, res)
    })
    ipcRenderer.on('compress-gltf-error', (eve, res) => {
        console.log('渲染进程fail ',eve, res)
    })
}

</script>

<style scoped>
</style>
