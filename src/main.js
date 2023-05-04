import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { createPinia } from "pinia";
import * as ConfirmDialog from "vuejs-confirm-dialog";
import "@formkit/themes/genesis";

import "./assets/main.css";
import { plugin, defaultConfig } from "@formkit/vue";

createApp(App)
  .use(router)
  .use(createPinia())
  .use(ConfirmDialog)
  .use(plugin, defaultConfig)
  .mount("#app");
