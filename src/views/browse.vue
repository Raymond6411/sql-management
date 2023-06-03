<template>
    <div class="wrapper">
      <el-table :data="Browses" stripe style="width: 100%">
        <el-table-column prop="_id" label="_id" width="180" />
        <el-table-column prop="uid" label="uid" width="180" />
        <el-table-column prop="pid" label="pid" width="180" />
        <el-table-column prop="browseTime" label="browseTime" />
      </el-table>
    </div>
  </template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import { asyncGet } from "../utils/tool/fetch";
import { apis } from "../utils/tool/apis";
import { Browse } from "../utils/interfaces";

const Browses = ref<Array<Browse>>([]);

const sync = () => {
  asyncGet(apis.getBrowse).then((res: Array<Browse>) => {
    Browses.value = res;
    console.log(res);
  });
};

onMounted(() => {
  if (Browses.value.length == 0) {
    sync();
  }
});
</script>

<style lang="scss">
.wrapper{
  padding: 1%;
}
</style>