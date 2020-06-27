// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './assets/css/reset.css'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import Filter from './filter'
import axios from 'axios'
// 响应拦截
axios.interceptors.response.use(res=>{
  console.log("---" + res.config.url + "--------")
  console.log(res.data);
  return res.data;
})
import components from "./common"
for (var i in components) {
  Vue.component(i, components[i])
}
//全局过滤器
for(let i in Filter){
  Vue.filter(i,Filter[i])
}
Vue.prototype.$http=axios;

Vue.use(ElementUI)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
