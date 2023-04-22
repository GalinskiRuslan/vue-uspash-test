import { createStore } from "vuex";
import axios from "axios";

export default createStore({
  state() {
    return {
      photos: [],
      photo: {},
      favorites: [],
      currentPage: 1,
      searchValue: "",
      totalPages: 1,
    };
  },
  actions: {
    async fetchRandomPhotos({ commit }) {
      return axios({
        method: "get",
        url:
          process.env.VUE_APP_URL +
          `photos/random/?count=8&client_id=${process.env.VUE_APP_ACCESS_KEY}`,
      }).then((res) => commit("setPhotos", res.data));
    },
    async fetchSearchPhoto({ commit }, value) {
      axios({
        method: "get",
        url:
          process.env.VUE_APP_URL +
          `/search/photos?page=${this.state.currentPage}&query=${value}&client_id=${process.env.VUE_APP_ACCESS_KEY}`,
      }).then(
        (res) => (
          commit("setPhotos", res.data.results),
          commit("setTotalPages", res.data.total_pages),
          console.log(res.data)
        )
      );
    },
    async fetchPhoto({ commit }, id) {
      axios({
        method: "get",
        url:
          process.env.VUE_APP_URL +
          `photos/${id}/?client_id=${process.env.VUE_APP_ACCESS_KEY}`,
      }).then((res) => commit("setPhoto", res.data));
    },
  },
  mutations: {
    setPhotos: (state, photos) => {
      state.photos = photos;
    },
    setPhoto: (state, photo) => {
      state.photo = photo;
    },
    setTotalPages: (state, value) => {
      state.totalPages = value;
    },
    setCurrentPages: (state, value) => {
      state.currentPage = value;
    },
    setfavorites: (state, photo) => {
      if (state.favorites.includes(photo)) {
        state.favorites = state.favorites.filter((photos) => photos !== photo);
        console.log("filter");
      } else {
        state.favorites.push(photo);
        console.log("addinFav");
      }
    },
  },
  getters: {
    getPhotos(state) {
      return state.photos;
    },
    getPhoto(state) {
      return state.photo;
    },
    getTotalPages(state) {
      return state.totalPages;
    },
    getCurrentPages(state) {
      return state.currentPage;
    },
    getFavorites(state) {
      return state.favorites;
    },
  },
});
