<template>
  <div class="wrapper">
    <el-table :data="Transactions" stripe style="width: 100%" max-height="850">
      <el-table-column prop="tId" label="tId" width="300"></el-table-column>
      <el-table-column prop="mId" label="用戶" width="180"></el-table-column>
      <el-table-column prop="transTime" label="交易時間"></el-table-column>
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
  Transactions.value = [];
  asyncGet(apis.getTransaction).then((res: Array<Transaction>) => {
    res.forEach((transaction) => {
      const temp = <Transaction>{};
      asyncGet(`${apis.findNameById}?id=${transaction.mId}`,"text").then((user) => {
        temp.mId = user
        temp.tId = transaction.tId
        temp.transTime = `${new Date(transaction.transTime).toLocaleDateString()}  ${new Date(transaction.transTime).toLocaleTimeString()}`;
        Transactions.value.push(temp);
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