<template>
    <el-menu class="side" background-color="#304156" text-color="#BFCBD9">
      <el-menu-item index="1" @click="to('/')">
        <el-icon>
          <i class="bi bi-house"></i>
        </el-icon>
        <span>首頁</span>
      </el-menu-item>
      <el-menu-item index="2" @click="to('/Browse')">
        <el-icon>
          <i class="bi bi-search"></i>
        </el-icon>
        <span>瀏覽</span>
      </el-menu-item>
      <el-menu-item index="3" @click="to('/Material')">
        <el-icon>
          <i class="bi bi-box"></i>
        </el-icon>
        <span>材料</span>
      </el-menu-item>
      <el-menu-item index="4" @click="to('/Transation')">
        <el-icon>
          <i class="bi bi-credit-card"></i>
        </el-icon>
        <span>交易</span>
      </el-menu-item>
      <el-menu-item index="5" @click="to('/Use')">
        <el-icon>
          <i class="bi bi-list-check"></i>
        </el-icon>
        <span>使用</span>
      </el-menu-item>
      <el-menu-item index="6" @click="to('/User')">
        <el-icon>
          <i class="bi bi-person-circle"></i>
        </el-icon>
        <span>會員</span>
      </el-menu-item>
    </el-menu>
</template>

<script setup lang="ts">
import { defineComponent, onMounted, ref, watch } from "vue";
import { useRoute, useRouter } from "vue-router";
const route = useRoute();
const router = useRouter();
const path = ref<string>(route.path);
const to = (path: string) => {
  router.push(path);
};
watch(path, (newPath) => {
  console.log(newPath);
});
</script>

<style lang="scss">
.side {
  min-width: 10%;
  height: 100vh;
  .el-menu-item {
    padding: 1%;
  }
}
</style>