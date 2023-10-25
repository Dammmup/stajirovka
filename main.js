

import Vue from 'vue';
import VueRouter from 'vue-router';




Vue.use(VueRouter);

const routes = [
  { path: '/', component: ImageList },
  { path: '/image/:id', component: ImageViewer, props: true },
];

const router = new VueRouter({
  routes,
  mode: 'history',
});

new Vue({
  el: '#app',
  router,
});
