<template>
    <div class="wrapper">
      <el-table :data="Users" stripe style="width: 100%">
        <el-table-column prop="name" label="name" width="180" />
        <el-table-column prop="Address" label="Address" width="180" />
        <el-table-column prop="phone" label="phone" width="180" />
        <el-table-column prop="email" label="email" />
      </el-table>
    </div>
  </template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import { asyncGet } from "../utils/tool/fetch";
import { apis } from "../utils/tool/apis";
import { User } from "../utils/interfaces";

const Users = ref<Array<User>>([]);

const sync = () => {
  asyncGet(apis.getUser).then((res: Array<User>) => {
    Users.value = res;
    console.log(res);
  });
};

onMounted(() => {
  if (Users.value.length == 0) {
    sync();
  }
});
</script>

<style lang="scss">
.wrapper{
  padding: 1%;
}
</style>