import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { createPinia } from "pinia";

import "./assets/main.css";

createApp(App).use(router).use(createPinia()).mount("#app");

// const app = createApp(App)

// app.

// app.mount('#app')
