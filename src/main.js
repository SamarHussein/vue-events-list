import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import BaseIcon from "./components/BaseIcon.vue";
/* import BaseButton from "./components/BaseButton.vue";
import BaseInput from "./components/BaseInput.vue"; */

Vue.component("BaseIcon", BaseIcon);
/* Vue.component("BaseIcon", BaseButton);
Vue.component("BaseIcon", BaseInput); */

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
