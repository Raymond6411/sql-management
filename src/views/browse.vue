<template>
  <div class="wrapper">
    <el-table :data="Browses" stripe style="width: 100%" max-height="850">
      <el-table-column prop="user" label="用戶" width="180" />
      <el-table-column prop="product" label="產品" width="180" />
      <el-table-column prop="browseTime" label="瀏覽時間" />
    </el-table>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from "vue";
import { asyncGet } from "../utils/tool/fetch";
import { apis } from "../utils/tool/apis";
import { Browse } from "../utils/interfaces";

interface browse {
  user: string;
  product: string;
  browseTime: string;
}
const Browses = ref<Array<browse>>([]);

const sync = () => {
  Browses.value = []
  asyncGet(apis.getBrowse).then((res: Array<Browse>) => {

    res.forEach((browse) => {

      const temp = <browse>{};
      temp.browseTime = `${new Date(browse.browseTime).toLocaleDateString()}  ${new Date(browse.browseTime).toLocaleTimeString()}`;

      asyncGet(`${apis.findNameById}?id=${browse.uid}`, "text").then((user) => {
        temp.user = user;
        
        asyncGet(`${apis.findProductNameById}?id=${browse.pid}`).then(
          (product) => {
            temp.product = product.pName;
            Browses.value.push(temp);
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

<style lang="scss">
.wrapper {
  padding: 1%;
}
</style>