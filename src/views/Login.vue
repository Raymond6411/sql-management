<template>
    <div class="wrapper">
      <div class="login-container">
        <div class="title">飲料店倉儲管理系統登入</div>
        <el-form-item prop="username">
          <el-input
            ref="username"
            size="large"
            v-model="userInfo.Username"
            placeholder="Username"
          />
        </el-form-item>
  
        <el-form-item prop="password">
          <el-input
            ref="password"
            size="large"
            v-model="userInfo.Password"
            placeholder="Password"
          />
        </el-form-item>
  
        <el-button type="primary" style="width: 100%" @click="Submit" size="large"
          >submit</el-button
        >
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { reactive } from "vue";
  import { login } from "../utils/tool/fetch";
  import { useUserStore } from "../utils/store/user";
  import { useRouter } from "vue-router";
  import { ElMessage } from "element-plus";
  import jwtDecode, { JwtPayload } from "jwt-decode";
  
  const userInfo = reactive({ Username: "", Password: "" });
  const user = useUserStore();
  const router = useRouter();
  
  const Submit = () => {
    login(userInfo.Username, userInfo.Password, (res: any) => {
      const decoded = jwtDecode<JwtPayload>(res.result)
      //@ts-ignore
      if (decoded.authorities[0].authority =="ROLE_Admin" ) {
        user.initUser({
          account: decoded.sub,
          authority: "ROLE_Admin",
          authorized: "authorized",
        });
        ElMessage({
          message: "登入成功",
          type: "success",
        });
        router.push("/");
        localStorage.setItem('jwt', res.result );
      } else {
        ElMessage.error("非管理員帳號, 請聯繫:ethcilab@gmail.com");
      }
    });
  };
  </script>
  
  <style lang="scss">
  .wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
    .login-container {
      margin-top: 7%;
      width: 25%;
      padding: 2%;
      .title {
        margin-bottom: 18px;
        text-align: center;
        font-weight: 600;
        font-size: 1.25rem;
      }
    }
  }
  </style>