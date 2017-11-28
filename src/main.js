// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false
Vue.config.devtools = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {
    App
  }
})

// console.log("hello es6")


// var promise = new Promise(function (resolve, reject) {
//   console.log(1);
//   resolve();
//   console.log(2);
// });
// promise.then(function () {
//   console.log(3);
// })
// console.log(4);

// setTimeout(() => {
//   console.log(1);
// }, 0);
// console.log(2);
// import d, {
//   b,
//   c,
// } from './mode';
// console.log(b, c, d)
