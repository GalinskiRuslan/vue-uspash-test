<template>
  <div v-for="photo in getFavorites()" :key="photo.id">
    <img class="fav-img" :src="photo.urls.regular" />
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
  },
};
</script>

<style lang="css" scoped>
.fav-img {
  max-width: 430px;
}
</style>
