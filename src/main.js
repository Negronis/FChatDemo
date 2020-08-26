import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store' 
import '../node_modules/fonlineconsultation/packages/styles/index.less';
import fonlineconsultation from 'fonlineconsultation';
import '../node_modules/fonlineconsultation/packages/recorder.js';
Vue.use(fonlineconsultation);
Vue.config.productionTip = false
import VConsole from 'vconsole';
var Vconsole = new VConsole();
Vue.use(Vconsole);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
