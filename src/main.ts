import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
//import store from "./services/store";
import axios from "./services/http";
import VueAxios from "vue-axios";
import Pagination from "./components/Pagination.vue";

import "bootstrap";
//import 'bootstrap/dist/css/bootstrap.css'

const app = createApp(App);

app.use(VueAxios, axios);
// app.use(store);
app.use(router);
app.component("paginate", Pagination);

app.mount("#app");
