<template>
  <sideVue v-show="path != '/Login'" />
  <div class="content">
    <navVue v-show="path != '/Login'" />
    <router-view />
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted, ref } from "vue";
import sideVue from "./components/sideBar.vue"
import navVue from "./components/nav.vue";
import { asyncGet } from "./utils/tool/fetch";
import { apis } from "./utils/tool/apis";
import { useRoute, useRouter } from "vue-router";
import { useUserStore } from "./utils/store/user";
export default defineComponent({
  components: {navVue,sideVue},
  setup() {
    const route = useRoute();
    const router = useRouter();
    const user = useUserStore();

    const path = computed(()=>{
      return route.path
    })
    onMounted(() => {
      if (localStorage.getItem("jwt")) {
        asyncGet(apis.check).then((res) => {
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
      route,path
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
