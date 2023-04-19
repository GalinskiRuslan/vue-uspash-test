import { createApp } from "vue";
import App from "./components/App";
import { createRouter, createWebHistory } from "vue-router";
import MainPageVue from "./components/MainPage.vue";
import AboutPhotoVue from "./components/AboutPhoto.vue";
import store from "./store";
import FavoritesPhotoVue from "./components/FavoritesPhoto.vue";

const app = createApp(App);

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      name: "Home",
      path: "/",
      component: MainPageVue,
    },
    {
      name: "AboutPhoto",
      path: "/photo/:id",
      component: AboutPhotoVue,
      props: true,
    },
    {
      name: "Favorite",
      path: "/favorites",
      component: FavoritesPhotoVue,
    },
  ],
});
app.use(store);
app.use(router);
app.mount("#app");
