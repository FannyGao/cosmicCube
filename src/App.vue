<!--
 * @Description: 主页面
 * @Author: wangfengxiang
 * @Date: 2023-08-05 21:31:14
 * @LastEditTime: 2023-08-06 08:23:02
 * @LastEditors: wangfengxiang
-->
<template>
  <!-- <HelloWorld /> -->
  <el-container>
    <el-header>
      <i class="logo"></i>
      <el-radio-group v-model="isConversion">
        <el-radio-button :label="true">模型转换</el-radio-button>
        <el-radio-button :label="false">模型调试</el-radio-button>
      </el-radio-group>
    </el-header>
    <el-main>
      <ConversionView v-if="isConversion" />
      <RenderView v-else />
    </el-main>
  </el-container>
</template>

<script setup>
import { ref } from "vue";
import ConversionView from "./components/ConversionView.vue";
import RenderView from "./components/RenderView.vue";
const isConversion = ref(true);
</script>

<style scoped>
.el-container {
  width: 100vw;
  height: 100vh;
}
.el-header {
  background-color: #1d2125;
  color: #333;
  display: flex;
  justify-content: space-between;
  padding: 10px 20px;
}

.logo {
  width: 40px;
  height: 40px;
  background: url(./images/logo.png) no-repeat center/contain;
}

.el-main {
  background-color: #24292f;
  color: #333;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
