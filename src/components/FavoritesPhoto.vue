<template>
  <h3 class="favorite-title">Favorites</h3>
  <div class="image-container">
    <div
      v-for="photo in getFavorites()"
      :key="photo.id"
      @click="fetchPhoto(photo.id)"
    >
      <img class="fav-img" :src="photo.urls.regular" />
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from "vuex";
export default {
  methods: {
    ...mapActions(["fetchRandomPhotos", "fetchSearchPhoto", "fetchPhoto"]),
    ...mapGetters([
      "getRandPhotos",
      "getPhoto",
      "getTotalPages",
      "getFavorites",
    ]),
    ...mapMutations(["setfavorites"]),
    log(e, a) {
      console.log(e, a);
    },
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    },
  },
};
</script>

<style lang="css" scoped>
.fav-img {
  max-width: 474px;
  max-height: 454px;
  width: 100%;
  height: 100%;
  object-fit: cover;
  cursor: pointer;
  border-radius: 8px;
}
.favorite-title {
  color: #000;
  text-align: center;
  font-family: Roboto;
  font-size: 72px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin: 50px 0;
}
.image-container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 30px;
}
</style>
