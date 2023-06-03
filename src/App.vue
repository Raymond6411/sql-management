<template>
  <sideBarVue v-show="route.path != '/Login'" />
  <div class="content">
    <navVue v-show="route.path != '/Login'" />
    <router-view />
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import sideBarVue from "./components/sideBar.vue"
import navVue from "./components/nav.vue";
import { asyncGet } from "./utils/tool/fetch";
import { apis } from "./utils/tool/apis";
import { onBeforeRouteUpdate, useRoute, useRouter } from "vue-router";
import { useUserStore } from "./utils/store/user";
export default defineComponent({
  components: {navVue},
  setup() {
    const route = useRoute();
    const router = useRouter();
    const user = useUserStore();
    onMounted(() => {
      if (localStorage.getItem("jwt")) {
        asyncGet(apis.check, true).then((res) => {
          if (res.code == "403") {
            router.push("/Login");
          } else if (res.code == "200") {
            if (res.body == "root") {
              console.log(res.body);
              user.initUser({
                account: res.body,
                authority: "Admin",
                authorized: "Authorized",
              });
            } else {
              router.push("/Login");
            }
          }
        });
      } else {
        router.push("/Login");
      }
    })
    return {
      route,
    }
  }
})
</script>

<style lang="scss">
* {
  box-sizing: border-box;
  margin: 0px;
  padding: 0px;
  font-family: "Noto Sans TC", sans-serif;
  font-family: "Open Sans", sans-serif;
}
html,
body,
#app {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
#app {
  display: flex;
  .content {
    width: 100%;
    height: 100%;
  }
  &::-webkit-scrollbar {
    display: none;
  }
}
</style>
