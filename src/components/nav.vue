<template>
    <div class="navtop">
    <span>{{ user.user.account }}</span>
  </div>
</template>

<script setup lang="ts">
import { defineComponent, onMounted, ref, watch, computed } from "vue";
import { useRoute } from "vue-router";
import { useUserStore } from "../utils/store/user";
const route = useRoute();
const user = useUserStore();
</script>

<style scoped lang="scss">
.navtop {
  display: flex;
  justify-content: space-between;
  padding: 1%;
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
  max-width: 100%;
  span {
    color: #97a8be;
  }
}
</style>