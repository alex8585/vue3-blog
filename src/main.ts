import { createApp } from "vue";
import { createPinia } from "pinia";
import axios from "axios";
import VueAxios from "vue-axios";
import { Quasar } from "quasar";
import App from "./App.vue";
import router from "./router";
import "@quasar/extras/material-icons/material-icons.css";
import "./assets/base.css";
import "quasar/dist/quasar.css";

const app = createApp(App);

app.use(VueAxios, axios);
app.use(createPinia());
app.use(router);
app.use(Quasar, {
  plugins: {},
});
app.mount("#app");
