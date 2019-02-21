// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import VueRouter from "vue-router";
import "font-awesome/css/font-awesome.css";
import "normalize.css";
import "whatwg-fetch";
import VueQrcode from '@xkeshi/vue-qrcode';
import App from "./App";

Vue.component(VueQrcode.name, VueQrcode);

Vue.use(VueRouter);
Vue.config.productionTip = false;

import Index from "./components/Index.vue";
import Download from "./components/Download.vue";
import Law from "./components/Law.vue";
import About from "./components/About.vue";
import Article from "./components/Article.vue";

const router = new VueRouter({
  routes: [{
      path: "/",
      component: Index
    },
    {
      path: "/download",
      component: Download
    },
    {
      path: "/law",
      component: Law
    },
    {
      path: "/about",
      component: About
    },
    {
      path: "/articles/:lawid",
      name: "articles",
      component: Article
    }
  ]
});

/* eslint-disable no-new */
new Vue({
  el: "#app",
  components: {
    App
  },
  template: "<App/>",
  router
});



// WEBPACK FOOTER //
// ./src/main.js
