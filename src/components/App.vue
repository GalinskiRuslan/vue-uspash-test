<template>
  <header>
    <img src="../assets/img/logo.png" />
    <button class="favorites-btn">
      <svg
        width="23"
        height="22"
        viewBox="0 0 23 22"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M17.0104 0C14.4592 0 12.3521 2.36963 11.5 3.488C10.6479 2.36963 8.54077 0 5.98957 0C2.68691 0 0 3.03645 0 6.76824C0 8.80424 0.808145 10.7017 2.22269 12.0002C2.24326 12.0358 2.26855 12.0686 2.29802 12.098L11.1617 20.9434C11.2553 21.0366 11.3774 21.0834 11.5 21.0834C11.6226 21.0834 11.7452 21.0366 11.8388 20.943L20.9972 11.7878L21.0918 11.6961C21.1666 11.6254 21.2406 11.5538 21.3234 11.4621C21.358 11.428 21.3865 11.3896 21.4086 11.3479C22.4357 10.0901 23 8.46777 23 6.76824C23 3.03645 20.3131 0 17.0104 0ZM20.6112 10.8089C20.5981 10.8243 20.5859 10.8407 20.5752 10.8575C20.5302 10.909 20.4811 10.9544 20.4324 11.0007L11.4996 19.9271L3.08465 11.529C3.05752 11.4757 3.0196 11.427 2.97329 11.3863C1.69252 10.2679 0.958318 8.58475 0.958318 6.76824C0.958318 3.56473 3.21519 0.958363 5.98957 0.958363C8.73263 0.958363 11.0737 4.53621 11.0971 4.57224C11.274 4.8455 11.726 4.8455 11.9029 4.57224C11.9263 4.53621 14.2674 0.958363 17.0104 0.958363C19.7848 0.958363 22.0417 3.56478 22.0417 6.76824C22.0417 8.2778 21.5335 9.71296 20.6112 10.8089Z"
          fill="white"
        />
      </svg>
      Избранное
    </button>
  </header>
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
    <div class="photo-container" v-for="photo in photos" :key="photo.id">
      <img :src="photo.urls.small" />
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

<style>
* {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0;
  padding: 0;
}
header {
  background-color: black;
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.img-container {
  display: flex;
  flex-wrap: wrap;
}
.favorites-btn {
  background-color: inherit;
  color: #ffffff;
  font-size: 16px;
  border: none;
  cursor: pointer;
  height: 35px;
}
.serch-block {
  background-image: url("../assets/img/background.png");
  padding: 80px 0;
}
.search-inpt {
  height: 70px;
  width: 60%;
  font-size: 1em;
  border: none;
  text-align: start;
  padding: 0 20px;
  padding-right: 60px;
}
.searchIcon {
  position: absolute;
  width: 23px;
  margin-left: -50px;
  margin-top: 22px;
}
input:focus {
  outline: none;
}
.photo-container {
  display: block;
  width: 473px;
  height: 440px;
  margin: 20px;
}
.photo-container img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  object-fit: contain;
}
</style>
