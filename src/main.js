import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

Vue.mixin({
  methods: {
    formatMoney: function(amount) {
      let dollar = amount / 100;
      let sign = "$ ";

      if (dollar < 0) {
        sign = "-$ ";
        dollar *= -1;
      }

      return sign + dollar.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
    },
  },
});

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
