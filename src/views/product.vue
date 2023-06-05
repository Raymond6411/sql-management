<template>
  <div class="wrapper">
    <div class="product">
      <div class="name">
        {{ product?.pName }}
      </div>
      <div class="package">
        <i class="bi bi-box-seam"></i> {{ product?.pPackage }}
      </div>
      <div class="cat"><i class="bi bi-tags"></i> {{ product?.category }}</div>
      <div class="price"><i class="bi bi-coin"></i> {{ product?.price }}</div>
      <div class="sale">
        <div class="info">
            <span>月銷:</span> {{ product?.saleCount}}
        </div>
        <el-button plain @click="buy">buy</el-button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import { Product } from "../utils/interfaces";
import { asyncGet, asyncPost } from "../utils/tool/fetch";
import { apis } from "../utils/tool/apis";

const route = useRoute();
const product = ref<Product>();

const buy = ()=>{
    asyncGet(apis.buy).then(res=>{
        asyncPost(apis.addRecord,{
            pId:product.value?.pid,
            tId:res.tId,
            salePrice:product.value?.saleCount,
            amount:1
        }).then(res=>{
            console.log(res)
        })
    })
    console.log(product.value)
}

onMounted(() => {
  asyncGet(`${apis.findProduct}?name=${route.params.name}`).then((res) => {
    product.value = res;
  });
});

</script>

<style scoped lang="scss">
.wrapper {
  margin: 1%;
  width: 100%;
  height: 60%;
  display: flex;
  align-items: center;
  justify-content: center;

  .product {
    font-size: 1.25rem;
    width: 15%;
    border: 1px solid #9ba0a5;
    border-radius: 0.5rem;
    color: rgb(96, 98, 102);
    padding: 1.5%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin: 1rem;
    cursor: pointer;
    transition: all 0.25s;

    &:hover {
      border: 1px solid #71777b;
      box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
    }

    i,
    .name {
      color: rgb(61, 62, 66);
      font-weight: 600;
    }

    .name {
      font-size: 1.5rem;
    }

    .sale {
      display: flex;
      flex-direction: row;
      align-items: flex-start;
      justify-content: space-between;
    }
  }
}
</style>