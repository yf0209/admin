<template>
  <div class="mask">
    <div class="con">
      <h3 class="tit">登录</h3>
      <div class="center">
        <el-select v-model="user.type" placeholder="请选择角色">
          <el-option
            v-for="item in types"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
      </div>
      <div class="center">
        <el-input v-model="user.name" placeholder="请输入账号" clearable></el-input>
      </div>
      <div class="center">
        <el-input v-model="user.pass" placeholder="请输入密码" show-password clearable></el-input>
      </div>
      <div class="center">
        <el-button type="primary" @click="login">登录</el-button>
      </div>
    </div>
  </div>
</template>
<script>
import API from '../utils/API'
import {message} from 'element-ui'
export default {
  props: [],
  components: {},
  data() {
    return {
      user: {
        name: "", //账号
        pass: "", //密码
        type: "" //角色
      },

      types: [
        {
          value: "0",
          label: "超级管理员"
        },
        {
          value: "1",
          label: "普通管理员"
        },
        {
          value: "2",
          label: "用户"
        }
      ]
    };
  },
  methods: {
    login() {
      //登录验证
      this.$http({
        url: API.login,
        method: "post",
        data: this.user
      }).then(res => {
        if (res.isok) {
          //登录成功
          this.$message({
            message: res.info,
            type: "success"
          });
          this.$router.push("/index");
        } else {
          //登录失败
          this.$message({
            message: res.info,
            type: "warning"
          });
        }
      });
    }
  },
  mounted() {},
  watch: {},
  computed: {}
};
</script>
<style  scoped>
.mask {
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.4);
  position: fixed;
  left: 0;
  top: 0;
}
.tit {
  font-size: 30px;
  text-align: center;
}
.con {
  width: 400px;
  height: 250px;
  border-radius: 20px;
  background: #ffffff;
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  margin: auto;
}
.el-select,
.el-input {
  width: 80%;
  margin: 2px auto;
}
.center {
  text-align: center;
}
</style>