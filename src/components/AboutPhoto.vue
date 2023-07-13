<template>
  <div class="background-img">
    <div class="container-controls">
      <p class="author">
        <img class="prifole-img" :src="getPhoto().user.profile_image.small" />
        Author: {{ getPhoto().user.name }} <br />
        {{ getPhoto().user.social.instagram_username }}
      </p>
      <div class="img-container">
        <button class="favPhotoBtn" @click="setfavorites(getPhoto())">
          <img src="../assets/img/Group4.png" />
        </button>
        <a target="_blanc" :href="getPhoto().links.download"
          ><button class="downloadBtn">
            <img src="../assets/img/Group3.png" />
          </button>
        </a>
      </div>
    </div>
    <div class="image-container">
      <img class="head-photo" :src="getPhoto().urls.regular" />
    </div>
  </div>
</template>
<script>
import { mapActions, mapGetters, mapMutations } from "vuex";
export default {
  methods: {
    ...mapActions(["fetchPhoto"]),
    ...mapGetters(["getPhoto"]),
    ...mapMutations(["setfavorites"]),

    log(e, a) {
      console.log(e, a);
    },
  },
  props: ["id"],
  data() {
    return {};
  },
};
</script>
<style scoped>
img {
  width: 100%;
  object-fit: contain;
}
.head-photo {
  border-radius: 8px;
}
.image-container {
  display: block;
  max-width: 1200px;
  height: 720px;
  margin: 0 auto;
  padding-top: 25px;
  position: relative;
  z-index: 10;
}
.prifole-img {
  width: 55px;
  border-radius: 8px;
  margin-right: 10px;
  border: 1px solid #fff;
}
.favPhotoBtn {
  background: none;
  border: none;
  cursor: pointer;
}
.container-controls {
  display: flex;
  max-width: 1920px;
  justify-content: space-around;
  padding-top: 45px;
  margin: 0 auto;
  position: relative;
  z-index: 10;
}
.author {
  display: flex;
  align-items: center;
  color: var(--gray-6, #f2f2f2);
  font-family: Roboto;
  font-size: 18px;
}
.downloadBtn {
  background: transparent;
  border: none;
  cursor: pointer;
}
.background-img {
  max-width: 1920px;
  margin: 0 auto;
  background: url("../assets/img/backgroundAbout.png"), rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(4px);
  position: relative;
  z-index: 1;
}
.background-img:before {
  content: "";
  display: block;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
}
</style>
