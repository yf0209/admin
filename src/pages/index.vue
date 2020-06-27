<template>
  <div class="index">
    <div class="header">
      <v-header></v-header>
    </div>
    <div class="main">
      <v-left class="left"></v-left>
      <v-right class="right"></v-right>
    </div>
  </div>
</template>
<script>
import vHeader from '../components/header'
import vLeft from '../components/left'
import vRight from '../components/right'
export default {
  props: [],
  components: {
    vHeader,
    vLeft,
    vRight
  },
  data() {
    return {};
  },
  methods: {},
  mounted() {},
  watch: {},
  computed: {}
};
</script>
<style scoped>
.index{
  display: flex;
  width: 100vw;
  height: 100vh;
  flex-direction: column;
}
.index .header{
  width: 100vw;
  height: 50px;
  background: #202050;
  color: #fff;
}
.main{
  display: flex;
  flex: 1;
}
.main .left{
  background: #30333b;
  width: 150px;
 
}
.main .right{
  flex: 1;
  /* background: blue; */
}
</style>