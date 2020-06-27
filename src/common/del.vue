<template>
  <el-button type="danger" @click="willDel">删除</el-button>
</template>
<script>
export default {
  props: ["id"],
  methods: {
    //弹确定删除弹框
    willDel(){
      this.$confirm("你确定要删除吗?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      }).then(() => {
       //有可能是删除管理员 有可能是删除用户 有可能是删除通知 。。。。
       //通知父组件快删除数据
      
       this.$emit("del",this.id)
      });
    }
  },
};
</script>
<style  scoped>
</style>