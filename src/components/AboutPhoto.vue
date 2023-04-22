<template>
  <div>
    <p>
      <img class="prifole-img" :src="getPhoto().user.profile_image.small" />
      Author: {{ getPhoto().user.name }}
    </p>
    <div>
      <button @click="setfavorites(getPhoto())">
        <img src="../assets/img/Group4.png" />
      </button>
      <a target="_blanc" :href="getPhoto().links.download"
        ><button>
          <img src="../assets/img/Group3.png" />
        </button>
      </a>
    </div>
  </div>
  <div class="image-container"><img :src="getPhoto().urls.regular" /></div>
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
  height: 100%;
  object-fit: contain;
}
.image-container {
  display: block;
  max-width: 1200px;
  height: 720px;
  margin: 0 auto;
  padding-top: 25px;
}
.prifole-img {
  width: 30px;
}
</style>
