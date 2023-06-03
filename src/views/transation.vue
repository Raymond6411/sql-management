<template>
  <div class="wrapper">
    <el-table :data="Transactions" stripe style="width: 100%">
      <el-table-column prop="mId" label="mId" width="180"></el-table-column>
      <el-table-column prop="tId" label="tId" width="180"></el-table-column>
      <el-table-column prop="transTime" label="transTime"></el-table-column>
    </el-table>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import { asyncGet } from "../utils/tool/fetch";
import { apis } from "../utils/tool/apis";
import { Transaction } from "../utils/interfaces";

const Transactions = ref<Array<Transaction>>([]);

const sync = () => {
  asyncGet(apis.getTransaction).then((res: Array<Transaction>) => {
    Transactions.value = res;
    console.log(res);
  });
};

onMounted(() => {
  if (Transactions.value.length == 0) {
    sync();
  }
});
</script>

<style lang="scss">
.wrapper {
  padding: 1%;
}
</style>