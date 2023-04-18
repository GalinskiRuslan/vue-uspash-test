<template>
  <div class="image-container"><img :src="photo.urls.regular" /></div>
</template>
<script>
import axios from "axios";
export default {
  props: ["id"],
  data() {
    return {
      accessKey: "mRM4BS17oxyPLqhYQIsu0QC9RxLWn8V8O2cB0BOcBFI",
      url: "https://api.unsplash.com/",
      photo: "",
    };
  },
  methods: {
    log(e) {
      console.log(e);
    },
    fetchPhoto() {
      axios({
        method: "get",
        url: this.url + `photos/${this.id}/?client_id=${this.accessKey}`,
      }).then((res) => (this.photo = res.data));
    },
  },
  created() {
    this.fetchPhoto();
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
  width: 1200px;
  height: 720px;
  margin: 0 auto;
  padding-top: 25px;
}
</style>
