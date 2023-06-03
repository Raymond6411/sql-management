<template>
    <el-table 
        :data="Product"
        style="width: 100%">
        <el-table-column prop="category" label="category" width="180" />
        <el-table-column prop="pName" label="pName" width="180" />
        <el-table-column prop="pPackage" label="pPackage" width="180" />
        <el-table-column prop="saleCount" label="saleCount" width="180" />
        <el-table-column prop="price" label="price" width="180" />
        <el-table-column label="Operations">
      <template #default="scope">
        <el-button size="small" 
          >Edit</el-button
        >
      </template>
    </el-table-column>
  </el-table>
  <!-- <div
      class="product"
      v-for="product in Products"
      :key="product.category"
      @click="editor(product)"
    >
      <div class="category">
        {{ product.category }}
      </div>
      <div class="pName">
        <i class="bi bi-person"></i>
        {{ product.pName }}
      </div>
      <div class="pPackage">
        <i class="bi bi-key"></i>
        {{ product.pPackage }}
      </div>
      <div class="saleCount">
        {{ product.saleCount }}
      </div>
      <div class="price">
        {{ product.price }}
      </div>
    </div> -->
</template>

<script setup lang="ts">
import { onMounted, ref, reactive } from "vue";
import { asyncGet } from "../utils/tool/fetch";
import { apis } from "../utils/tool/apis";
import { Product } from "../utils/interfaces"

const Product = ref<Array<Product>>([]);

const selectProduct = reactive<Product>({pid:"",category: "", pName: "", pPackage: "",saleCount: 0, price: 0})

const sync = () => {
    asyncGet(apis.getProduct).then((res: Array<Product>) => {
        Product.value = res;
        console.log(res);
    });
};

// const editor = (product: Product) => {
//     selectProduct.category = product.category
//     selectProduct.pName = product.pName
//     selectProduct.pPackage = product.pPackage
//     selectProduct.saleCount = product.saleCount
//     selectProduct.price = product.price
// }
onMounted(() => {
    if (Product.value.length == 0) {
        sync();
    }
});
</script>

<style lang="scss">
</style>