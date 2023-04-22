<template>
  <div class="serch-block">
    <form @submit.prevent="fetchSearchPhoto(searchValue), setCurrentPages(1)">
      <input
        class="search-inpt"
        type="search"
        v-model="searchValue"
        placeholder="Поиск"
      /><img class="searchIcon" src="../assets/img/searchIcon.png" />
    </form>
  </div>
  <div class="img-container">
    <div
      class="photo-container"
      v-for="photo in getPhotos()"
      :key="photo.id"
      @click="fetchPhoto(photo.id)"
    >
      <router-link :to="'/photo/' + photo.id">
        <img :src="photo.urls.small" />
      </router-link>
    </div>
  </div>
  <button @click="() => log(getPhotos(), getCurrentPages())">123</button>
  <button
    v-if="getCurrentPages() < getTotalPages()"
    type="button"
    @click="nextPage()"
  >
    next
  </button>
  <button
    v-if="getCurrentPages() > 1"
    type="button"
    @click="setCurrentPages(getCurrentPages() - 1)"
  >
    pre
  </button>
</template>
<script>
import { mapActions, mapGetters, mapMutations } from "vuex";
export default {
  name: "App",
  methods: {
    ...mapActions(["fetchRandomPhotos", "fetchSearchPhoto","fetchPhoto"]),
    ...mapGetters([
      "getPhotos",
      "getPhoto",
      "getTotalPages",
      "getFavorites",
      "getCurrentPages",
    ]),
    ...mapMutations(["setfavorites", "setCurrentPages"]),
    nextPage() {
      this.setCurrentPages(this.getCurrentPages() + 1);
      this.fetchSearchPhoto(this.searchValue);
    },
    perPage() {
      this.setCurrentPages(this.getCurrentPages() - 1);
      this.fetchSearchPhoto(this.searchValue);
    },
    log(e, a) {
      console.log(e, a);
    },
  },
  async mounted() {
    this.fetchRandomPhotos();
  },

  data() {
    return {
      searchValue: "",
    };
  },

  components: {},
};
</script>
<style lang=""></style>
