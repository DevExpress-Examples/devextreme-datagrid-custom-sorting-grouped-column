import Vue from 'vue'
import App from './App.vue'

import 'devextreme/dist/css/dx.common.css';
import 'devextreme/dist/css/dx.light.css';

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
