<template>
    <div class="wrapper">
      <el-table :data="Uses" stripe style="width: 100%">
        <el-table-column prop="INo" label="INo" width="180" />
        <el-table-column prop="pId" label="pId" width="180" />
        <el-table-column prop="amount" label="amount" />
      </el-table>
    </div>
  </template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import { asyncGet } from "../utils/tool/fetch";
import { apis } from "../utils/tool/apis";
import { Use } from "../utils/interfaces";

const Uses = ref<Array<Use>>([]);

const sync = () => {
  asyncGet(apis.getUse).then((res: Array<Use>) => {
    Uses.value = res;
    console.log(res);
  });
};

onMounted(() => {
  if (Uses.value.length == 0) {
    sync();
  }
});
</script>

<style scoped lang="scss">

.wrapper{
  padding: 1%;
}
</style>