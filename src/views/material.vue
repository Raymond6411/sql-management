<template>
  <div class="wrapper">
    <el-table :data="Materials" stripe style="width: 100%" max-height="850">
      <el-table-column prop="mName" label="名稱" width="180" />
      <el-table-column prop="mType" label="類型" width="180" />
      <el-table-column prop="mNum" label="數量" />
    </el-table>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import { asyncGet } from "../utils/tool/fetch";
import { apis } from "../utils/tool/apis";
import { Material } from "../utils/interfaces";

const Materials = ref<Array<Material>>([]);

const sync = () => {
  asyncGet(apis.getMaterial).then((res: Array<Material>) => {
    Materials.value = res;
    console.log(res);
  });
};

onMounted(() => {
  sync();
});
</script>

<style scoped lang="scss">
.wrapper{
  padding: 1%;
}
</style>