<template>
  <div class="wrapper">
    <el-table :data="Records" stripe style="width: 100%" max-height="850">
      <el-table-column prop="tId" label="tId" width="300"></el-table-column>
      <el-table-column prop="pId" label="產品" width="180"></el-table-column>
      <el-table-column
        prop="salePrice"
        label="salePrice"
        width="180"
      ></el-table-column>
      <el-table-column prop="amount" label="數量"></el-table-column>
    </el-table>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import { asyncGet } from "../utils/tool/fetch";
import { apis } from "../utils/tool/apis";
import { Record } from "../utils/interfaces";

const Records = ref<Array<Record>>([]);

const sync = () => {
  Records.value = [];
  asyncGet(apis.getRecord).then((res: Array<Record>) => {
    res.forEach((record) => {
      asyncGet(`${apis.findProductNameById}?id=${record.pId}`).then((product) => {
        record.pId = product.pName
        console.log(record)
        Records.value.push(record);
      });
    });
  });
};

onMounted(() => {
  sync();
});
</script>

<style lang="scss">
.wrapper {
  padding: 1%;
}
</style>