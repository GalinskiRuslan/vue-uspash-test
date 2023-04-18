<template>
  <div class="serch-block">
    <form @submit.prevent="fetchSearchPhoto(searchValue)">
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
      v-for="photo in photos"
      :key="photo.id"
      @click="log(photo.id)"
    >
      <router-link :to="'/photo/' + photo.id">
        <img :src="photo.urls.small" />
      </router-link>
    </div>
  </div>
  <button @click="() => log(totalPages, currentPage)">123</button>
  <button v-if="currentPage < totalPages" type="button" @click="nextPage()">
    next
  </button>
  <button v-if="currentPage > 1" type="button" @click="perPage()">pre</button>
</template>
<script>
import axios from "axios";
export default {
  name: "App",
  methods: {
    nextPage() {
      this.currentPage = this.currentPage + 1;
      this.fetchSearchPhoto(this.searchValue);
    },
    perPage() {
      this.currentPage = this.currentPage - 1;
      this.fetchSearchPhoto(this.searchValue);
    },
    log(e, a) {
      console.log(e, a);
    },
    fetchPhotos() {
      axios({
        method: "get",
        url: this.url + `photos/random/?count=8&client_id=${this.accessKey}`,
      }).then((res) => (this.photos = res.data));
    },
    fetchSearchPhoto(value) {
      axios({
        method: "get",
        url:
          this.url +
          `/search/photos?page=${this.currentPage}&query=${value}&client_id=${this.accessKey}`,
      }).then(
        (res) => (
          (this.photos = res.data.results),
          (this.totalPages = res.data.total_pages),
          console.log(res.data)
        )
      );
    },
  },
  created() {
    this.fetchPhotos();
  },

  data() {
    return {
      accessKey: "mRM4BS17oxyPLqhYQIsu0QC9RxLWn8V8O2cB0BOcBFI",
      url: "https://api.unsplash.com/",
      photos: [],
      currentPage: 1,
      searchValue: "",
      totalPages: 1,
    };
  },

  components: {},
};
</script>
<style lang=""></style>
