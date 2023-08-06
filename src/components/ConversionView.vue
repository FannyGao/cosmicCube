<!--
 * @Description: 模型转换组件
 * @Author: wangfengxiang
 * @Date: 2023-08-05 21:31:14
 * @LastEditTime: 2023-08-06 08:20:14
 * @LastEditors: wangfengxiang
-->
<template>
  <section>
    <el-upload
      class="upload-box"
      drag
      multiple
      @change="uploadChange"
      accept=".glb,.gltf,.obj"
    >
      <el-icon class="el-icon--upload"><upload-filled /></el-icon>
      <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
      <div class="el-upload__tip" slot="tip">只能上传gltf/glb/obj文件</div>
    </el-upload>
    <el-row class="mb-4">
      <el-button type="info" :disabled="!inputPath || suffix !== 'gltf'">
        gltf2glb
      </el-button>
      <el-button type="info" :disabled="!inputPath || suffix !== 'glb'">
        glb2gltf
      </el-button>
      <el-button type="info" :disabled="!inputPath || suffix !== 'obj'">
        obj2gltf
      </el-button>
      <el-button type="info" @click="handleCompress" :disabled="!inputPath">
        模型压缩
      </el-button>
      <el-button type="info" :disabled="!inputPath"> 保存纹理 </el-button>
    </el-row>
  </section>
</template>

<script setup>
import { ref } from "vue";
import { UploadFilled } from "@element-plus/icons-vue";
import { ElNotification } from 'element-plus'

const electron = require("electron");
const { ipcRenderer } = electron;
let inputPath = ref(""),
  outputPath = "",
  suffix = ref("");
const uploadChange = (e) => {
    console.log('e: ', e);
  inputPath.value = e.raw?.path;
  console.log('inputPath: ', inputPath);
  const arr = inputPath.value.split(".");
  outputPath = `${arr[0]}-draco.${arr[1]}`;
  suffix.value = arr[arr.length - 1];
  console.log('suffix: ', suffix);
};
const handleCompress = () => {
  ipcRenderer.send("compress-gltf", {
    inputPath:inputPath.value,
    outputPath,
    options: {
      dracoOptions: {
        compressionLevel: 10,
      },
    },
  });
};

ipcRenderer.on("compress-gltf-done", (eve, res) => {
  console.log("渲染进程 ", eve, res);
  ElNotification({
    title: "压缩完成",
    message: "模型压缩成功",
    type: "success",
  });
});
ipcRenderer.on("compress-gltf-error", (eve, res) => {
  console.log("渲染进程fail ", eve, res);
  ElNotification({
    title: "压缩失败",
    message: "模型压缩失败",
    type: "warning",
  });
});
</script>

<style scoped>
>>> .el-upload-dragger  {
  background: #373e47 !important;
}
.mb-4 {
  margin-top: 50px;
  justify-content: center;
}
</style>
