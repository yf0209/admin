<template>
<div>
    <router-link to="/index/manage" class="nav" active-class="select">管理员管理</router-link>
    <router-link to="/index/user" class="nav" active-class="select">用户管理</router-link>
    <router-link to="/index/notice" class="nav" active-class="select">通知管理</router-link>
    <router-link to="/index/device" class="nav" active-class="select">设备管理</router-link>
</div>
</template>
<script>
export default {
props:[],
components:{},
data(){
return {
}
},
methods:{
},
mounted(){},
watch:{
},
computed:{
}
}
</script>
<style scoped>
.nav{
    display: inline-block;
    width: 100%;
    line-height: 50px;
    text-align: center;
    font-size: 20px;
    color: #fff;
}
.select{
    background: turquoise;
}
</style>