// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App';
import goods from 'components/goods/goods.vue';
import ratings from 'components/ratings/ratings.vue';
import seller from 'components/seller/seller.vue';

Vue.config.productionTip = false;

Vue.use(VueRouter);

let routes = [
  { path: '/goods', component: goods },
  { path: '/ratings', component: ratings },
  { path: '/seller', component: seller }
];

let router = new VueRouter({
  routes,
  linkActiveClass: 'active'
});

// 注册组件
Vue.component('app', App);

/* eslint "no-new": 0 */
new Vue({
  el: '#app',
  router
});
