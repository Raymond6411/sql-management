<template>
    <div class="wrapper">
      <el-table :data="Uses" stripe style="width: 100%" max-height="850">
        <el-table-column prop="pId" label="產品" width="180" />
        <el-table-column prop="INo" label="材料" width="180" />
        <el-table-column prop="amount" label="數量" />
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
  Uses.value = []
  asyncGet(apis.getUse).then((res: Array<Use>) => {

    res.forEach((use) => {

      const temp = <Use>{};
      asyncGet(`${apis.findMaterialNameById}?id=${use.INo}`).then((material) => {
        temp.INo = material.mName
  
        asyncGet(`${apis.findProductNameById}?id=${use.pId}`).then(
          (product) => {

            temp.pId = product.pName
            temp.amount = use.amount
            Uses.value.push(temp)
            
          }
        );

      });
    });

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