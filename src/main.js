import Vue from 'vue'
import router from './router/router'
import ElementUI from "element-ui"; // 引入 element 组件
import "element-ui/lib/theme-chalk/index.css";
import App from './App.vue'

Vue.use(ElementUI, { size: 'small', zIndex: 3000 });


Vue.config.productionTip = false




new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
