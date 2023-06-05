<template>
  <div class="wrapper">
    <div class="products">
      <div class="product" v-for="(product, index) in Category" :key="index" @click="select(product)">
        <div class="name">
          {{ product.pName }}
        </div>
        <div class="package">
          <i class="bi bi-box-seam"></i> {{ product.pPackage }}
        </div>
        <div class="cat"><i class="bi bi-tags"></i> {{ product.category }}</div>
        <div class="price"><i class="bi bi-coin"></i> {{ product.price }}</div>
        <div class="sale"><span>月銷:</span> {{ product.saleCount }}</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from "vue";
import { asyncGet, asyncPost } from "../utils/tool/fetch";
import { apis } from "../utils/tool/apis";
import { Product } from "../utils/interfaces";
import { useRouter } from "vue-router";

const products = ref<Array<Product>>([]);
const currentSelect = ref<string>("");
  const router = useRouter();

const sync = () => {
  asyncGet(apis.getProduct).then((res: Array<Product>) => {
    if (products.value.length != res.length) {
      products.value = res;
    }
  });
};

const select = (product:Product)=>{
  asyncPost(apis.addBrowse,{pid:product.pid}).then(res=>{
    console.log(res)
    router.push(`/Product/${product.pName}`)
  })
}

const Category = computed(() => {
  if (currentSelect.value != "") {
    return products.value.filter(
      (product) => product.category == currentSelect.value
    );
  } else {
    return products.value;
  }
});

onMounted(() => {
  sync();
});
</script>

<style scoped lang="scss">
.wrapper {
  padding: 1%;
  .products {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    gap: 1.5rem;
    .product {
      font-size: .8rem;
      width: 15%;
      border: 1px solid #dfe6ec;
      border-radius: 0.5rem;
      color: rgb(96, 98, 102);;
      padding: 1%;
      display: flex;
      flex-direction: column;
      gap: 0.7rem;
      margin: 1rem;
      cursor: pointer;
      transition: all .25s;
      &:hover{
        border: 1px solid #c5cdd3;
        box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
      }
      i,.name{
        color: rgb(61, 62, 66);
      }
      .name {
        font-weight: 600;
        font-size: 1.2rem;
      }
    }
  }
}
</style>