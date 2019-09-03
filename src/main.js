import Vue from 'vue';
import App from './App.vue';
import Buefy from 'buefy';
import vueSmoothScroll from 'vue2-smooth-scroll';
Vue.use(vueSmoothScroll);

Vue.use(Buefy);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
