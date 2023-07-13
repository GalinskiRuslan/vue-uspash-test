<template>
  <div id="top" class="serch-block">
    <form
      @submit.prevent="
        fetchSearchPhoto(searchValue), setCurrentPages(1), (isSearched = true)
      "
    >
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
  <button
    v-if="!isSearched"
    class="newrndphoto-btn"
    @click="() => addedFechPhotos()"
  >
    New Random photo
  </button>
  <div class="pageNav">
    <button
      class="prePagebtn"
      v-if="getCurrentPages() > 1"
      type="button"
      @click="setCurrentPages(getCurrentPages() - 1)"
    >
      <img class="arrowPagePre" src="../assets/icons/arrow.png" alt="arrow" />
      pre Page
    </button>
    <button
      class="nextPagebtn"
      v-if="getCurrentPages() < getTotalPages()"
      type="button"
      @click="nextPage()"
    >
      next Page
      <img class="arrowPageNext" src="../assets/icons/arrow.png" alt="arrow" />
    </button>
  </div>
  <button @click="scrollToTop()" class="noTop">
    <img src="../assets/icons/Group19.png" alt="arrow" class="arr" />
  </button>
</template>
<script>
import { mapActions, mapGetters, mapMutations } from "vuex";
export default {
  name: "App",

  methods: {
    ...mapActions([
      "fetchRandomPhotos",
      "fetchSearchPhoto",
      "fetchPhoto",
      "addedFechPhotos",
    ]),
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
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    },
  },
  async mounted() {
    this.fetchRandomPhotos();
  },

  data() {
    return {
      searchValue: "",
      isSearched: false,
    };
  },

  components: {},
};
</script>
<style scoped>
.newrndphoto-btn {
  border: none;
  padding: 15px 40px;
  border-radius: 15px;
  cursor: pointer;
  font-size: 18px;
  margin: 50px 0;
}
.arr {
  padding: 15px 12px;
}
.noTop {
  border: none;
  filter: drop-shadow(0px 0px 4px rgba(0, 0, 0, 0.25));
  background: #fff;
  position: fixed;
  bottom: 10%;
  right: 5%;
  cursor: pointer;
  border-radius: 8px;
}
.pageNav {
  max-width: 1240px;
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
}
.arrowPageNext {
  max-width: 50px;
}
.arrowPagePre {
  max-width: 50px;
  transform: rotate(180deg);
}
.prePagebtn {
  display: flex;
  align-items: center;
  cursor: pointer;
  border: none;
  background: #fff;
  filter: drop-shadow(0px 0px 4px rgba(0, 0, 0, 0.25));
  border-radius: 8px;
  padding: 5px 15px;
  margin-bottom: 50px;
}
.nextPagebtn {
  display: flex;
  align-items: center;
  cursor: pointer;
  border: none;
  background: #fff;
  filter: drop-shadow(0px 0px 4px rgba(0, 0, 0, 0.25));
  border-radius: 8px;
  padding: 5px 15px;
  margin-bottom: 50px;
}
</style>
